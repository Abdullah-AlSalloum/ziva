import { User } from '../../types';

export type AuthenticationResult =
  | { success: true; user: User }
  | { success: false; error: 'invalid-credentials' | 'disabled-account'; detail?: string }
  | { success: false; error: 'password-change-required'; user: User };

export interface AuthService {
  authenticate(identifier: string, password: string, users: User[]): Promise<AuthenticationResult>;
  setPassword?(userId: string, password: string): Promise<void>;
  completePasswordChange?(password: string): Promise<AuthenticationResult>;
  changePassword?(currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }>;
  restoreSession?(users: User[]): Promise<User | null>;
}
