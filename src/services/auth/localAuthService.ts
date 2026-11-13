import { User } from '../../types';
import { AuthService, AuthenticationResult } from './authService';

const STORAGE_KEY = 'invictus-manager-local-auth';

type StoredCredentials = Record<string, string>;

const readCredentials = (): StoredCredentials => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) as StoredCredentials : {};
  } catch (error) {
    console.error('Unable to read local authentication data:', error);
    return {};
  }
};

const hashPassword = async (password: string) => {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
};

export class LocalAuthService implements AuthService {
  private currentUserId: string | null = null;

  async authenticate(identifier: string, password: string, users: User[]): Promise<AuthenticationResult> {
    const normalizedIdentifier = identifier.trim().toLowerCase();
    const user = users.find(candidate =>
      [candidate.username, candidate.email, candidate.name]
        .filter(Boolean)
        .some(value => value!.toLowerCase() === normalizedIdentifier)
    );

    if (!user || user.status === 'disabled') {
      return { success: false, error: user?.status === 'disabled' ? 'disabled-account' : 'invalid-credentials' };
    }

    const credentials = readCredentials();
    const passwordHash = await hashPassword(password);
    if (credentials[user.id] !== passwordHash) {
      return { success: false, error: 'invalid-credentials' };
    }

    this.currentUserId = user.id;
    return { success: true, user: { ...user, hasSetPassword: true } };
  }

  async setPassword(userId: string, password: string) {
    const credentials = readCredentials();
    credentials[userId] = await hashPassword(password);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(credentials));
  }

  async changePassword(currentPassword: string, newPassword: string) {
    if (!this.currentUserId) return { success: false, error: 'password-update-failed' };
    const credentials = readCredentials();
    if (credentials[this.currentUserId] !== await hashPassword(currentPassword)) {
      return { success: false, error: 'password-update-failed' };
    }
    credentials[this.currentUserId] = await hashPassword(newPassword);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(credentials));
    return { success: true };
  }
}
