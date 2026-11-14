import { signIn, signOut } from 'next-auth/react';
import { User } from '../../types';
import { AuthService, AuthenticationResult } from './authService';

const profileFromSession = (session: Record<string, unknown> | null): User | null => {
  const profile = session?.user as Record<string, unknown> | undefined;
  if (!profile?.id || typeof profile.name !== 'string' || typeof profile.username !== 'string') return null;
  return {
    id: String(profile.id),
    name: profile.name,
    username: profile.username,
    description: typeof profile.description === 'string' ? profile.description : '',
    role: profile.role as User['role'],
    status: profile.status as User['status'],
    email: typeof profile.email === 'string' ? profile.email : undefined,
    hasSetPassword: profile.hasSetPassword !== false,
  };
};

export class DatabaseAuthService implements AuthService {
  async authenticate(identifier: string, password: string): Promise<AuthenticationResult> {
    const result = await signIn('credentials', {
      identifier,
      password,
      redirect: false,
    });
    if (result?.error) return { success: false, error: 'invalid-credentials' };

    const sessionResponse = await fetch('/api/auth/session', { cache: 'no-store' });
    const session = sessionResponse.ok ? await sessionResponse.json() as Record<string, unknown> : null;
    const user = profileFromSession(session);
    return user
      ? { success: true, user }
      : { success: false, error: 'profile-not-found' };
  }

  async restoreSession(): Promise<User | null> {
    const response = await fetch('/api/auth/session', { cache: 'no-store' });
    if (!response.ok) return null;
    return profileFromSession(await response.json() as Record<string, unknown>);
  }

  async changePassword(currentPassword: string, newPassword: string) {
    const response = await fetch('/api/auth/password', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    return response.ok
      ? { success: true }
      : { success: false, error: 'password-update-failed' };
  }

  async logout() {
    await signOut({ redirect: false });
  }
}
