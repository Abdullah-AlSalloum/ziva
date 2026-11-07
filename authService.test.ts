import { describe, expect, it } from 'vitest';
import { createLocalAuthService } from './authService';
import { User } from './types';

const users: User[] = [
  {
    id: 'owner-1',
    name: 'Mohammad',
    username: 'mohammad',
    description: 'Owner',
    role: 'Owner',
    status: 'active',
    password: 'password123',
    hasSetPassword: false,
  },
  {
    id: 'disabled-1',
    name: 'Disabled User',
    username: 'disabled',
    description: 'Manager',
    role: 'Manager',
    status: 'disabled',
    password: 'password123',
    hasSetPassword: true,
  },
  {
    id: 'legacy-1',
    name: 'Legacy User',
    username: '',
    description: 'Manager',
    role: 'Manager',
    status: 'active',
    password: 'password123',
    hasSetPassword: true,
  },
];

describe('LocalAuthService', () => {
  const service = createLocalAuthService();

  it('authenticates an active user by case-insensitive username', async () => {
    const result = await service.authenticate(' MOHAMMAD ', 'password123', users);

    expect(result).toEqual({ success: true, user: users[0] });
  });

  it('rejects invalid credentials', async () => {
    const result = await service.authenticate('mohammad', 'wrong-password', users);

    expect(result).toEqual({ success: false, error: 'invalid-credentials' });
  });

  it('rejects disabled accounts', async () => {
    const result = await service.authenticate('disabled', 'password123', users);

    expect(result).toEqual({ success: false, error: 'disabled-account' });
  });

  it('supports legacy records that do not have a username yet', async () => {
    const result = await service.authenticate('legacy user', 'password123', users);

    expect(result).toEqual({ success: true, user: users[2] });
  });
});
