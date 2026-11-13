import { describe, expect, it } from 'vitest';
import { getIdentity, isAllowed, parsePath, response, validate } from './api';

describe('API authorization boundaries', () => {
  it('derives identity from verified Cognito claims', () => {
    expect(getIdentity({
      requestContext: {
        authorizer: {
          jwt: {
            claims: {
              sub: 'user-123',
              'cognito:groups': ['Technical Service'],
            },
          },
        },
      },
    })).toEqual({
      subject: 'user-123',
      tenant: 'default',
      role: 'Technical Service',
    });
  });

  it('rejects identities without a subject or recognized role', () => {
    expect(getIdentity({
      requestContext: { authorizer: { jwt: { claims: { 'cognito:groups': ['Owner'] } } } },
    })).toBeNull();
    expect(getIdentity({
      requestContext: { authorizer: { jwt: { claims: { sub: 'user-123' } } } },
    })).toBeNull();
  });

  it('uses the single application workspace regardless of client claims', () => {
    expect(getIdentity({
      requestContext: {
        authorizer: {
          jwt: {
            claims: {
              sub: 'user-123',
              'custom:workspaceId': '../other-tenant',
              'custom:role': 'Owner',
            },
          },
        },
      },
    })).toMatchObject({ subject: 'user-123', tenant: 'default', role: 'Owner' });
  });

  it('enforces operation permissions independently of frontend visibility', () => {
    expect(isAllowed('users', 'GET', 'Owner')).toBe(true);
    expect(isAllowed('users', 'GET', 'Sales Lead')).toBe(false);
    expect(isAllowed('inventory', 'PATCH', 'Technical Service')).toBe(true);
    expect(isAllowed('inventory', 'DELETE', 'Technical Service')).toBe(false);
    expect(isAllowed('audit-events', 'GET', 'Owner')).toBe(true);
    expect(isAllowed('audit-events', 'GET', 'Sales Manager')).toBe(false);
    expect(isAllowed('users', 'DELETE', 'Manager')).toBe(true);
    expect(isAllowed('users', 'DELETE', 'Sales Lead')).toBe(false);
  });

  it('rejects invalid collection paths and resource identifiers', () => {
    expect(parsePath({ rawPath: '/inventory/item-1' })).toEqual({
      collection: 'inventory',
      id: 'item-1',
    });
    expect(parsePath({ rawPath: '/inventory/item/extra' })).toBeNull();
    expect(parsePath({ rawPath: '/inventory/../users' })).toBeNull();
    expect(parsePath({ rawPath: '/inventory/%2Fsecret' })).toBeNull();
  });

  it('adds non-cacheable API security headers to every response', () => {
    const result = response(200, { ok: true });

    expect(result.headers).toMatchObject({
      'cache-control': 'no-store',
      'content-security-policy': "default-src 'none'; frame-ancestors 'none'",
      'strict-transport-security': 'max-age=31536000',
      'x-content-type-options': 'nosniff',
    });
  });

  it('rejects protected fields in partial updates', () => {
    expect(() => validate('inventory', { quantity: 10, id: 'different-item' }, true))
      .toThrow('Request validation failed.');
    expect(() => validate('users', { hasSetPassword: true }, true))
      .toThrow('Request validation failed.');
    expect(validate('inventory', { quantity: 10 }, true)).toEqual({ quantity: 10 });
  });
});
