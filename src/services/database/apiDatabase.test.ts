import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchAuthSession } from 'aws-amplify/auth';
import { ApiDatabase, ApiHttpError } from './apiDatabase';

vi.mock('aws-amplify/auth', () => ({
  fetchAuthSession: vi.fn(),
}));

describe('ApiDatabase', () => {
  beforeEach(() => {
    vi.mocked(fetchAuthSession).mockResolvedValue({
      tokens: { accessToken: { toString: () => 'access-token' } },
    } as never);
    vi.stubGlobal('fetch', vi.fn());
  });

  it('loads all cursor pages with the Cognito access token', async () => {
    const fetchMock = vi.mocked(fetch);
    fetchMock
      .mockResolvedValueOnce(new Response(JSON.stringify({
        items: [{ id: 'one' }],
        nextToken: 'next-page',
      }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({
        items: [{ id: 'two' }],
      }), { status: 200 }));

    const snapshot = await new ApiDatabase('https://api.example.com')
      .collection('inventory')
      .get();

    expect(snapshot.docs.map(document => document.id)).toEqual(['one', 'two']);
    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      'https://api.example.com/inventory?limit=100',
      expect.objectContaining({
        headers: expect.objectContaining({ authorization: 'Bearer access-token' }),
      }),
    );
    expect(fetchMock.mock.calls[1][0]).toBe('https://api.example.com/inventory?limit=100&nextToken=next-page');
  });

  it('does not retry failed writes', async () => {
    const fetchMock = vi.mocked(fetch);
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ message: 'write failed' }), { status: 500 }));

    await expect(new ApiDatabase('https://api.example.com')
      .collection('inventory')
      .doc('item-1')
      .set({ name: 'Updated' })).rejects.toThrow('write failed');

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('preserves the HTTP status for API failures', async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(
      JSON.stringify({ message: 'forbidden' }),
      { status: 403 },
    ));

    const request = new ApiDatabase('https://api.example.com').collection('users').get();
    await expect(request).rejects.toMatchObject({ message: 'forbidden', status: 403 });
    await expect(request).rejects.toBeInstanceOf(ApiHttpError);
  });
});
