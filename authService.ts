import { User } from './types';

export type AuthenticationResult =
  | { success: true; user: User }
  | { success: false; error: 'invalid-credentials' | 'disabled-account'; detail?: string }
  | { success: false; error: 'password-change-required'; user: User };

export interface AuthService {
  authenticate(identifier: string, password: string, users: User[]): Promise<AuthenticationResult>;
  completePasswordChange?(password: string): Promise<AuthenticationResult>;
  restoreSession?(users: User[]): Promise<User | null>;
}

class LocalAuthService implements AuthService {
  async authenticate(identifier: string, password: string, users: User[]): Promise<AuthenticationResult> {
    const normalizedIdentifier = identifier.trim().toLowerCase();
    const user = users.find(candidate =>
      [candidate.username, candidate.email, candidate.name]
        .filter(Boolean)
        .some(value => value!.toLowerCase() === normalizedIdentifier)
    );

    if (!user || user.password !== password) {
      return { success: false, error: 'invalid-credentials' };
    }

    if (user.status === 'disabled') {
      return { success: false, error: 'disabled-account' };
    }

    return { success: true, user };
  }
}

export const createLocalAuthService = (): AuthService => new LocalAuthService();
