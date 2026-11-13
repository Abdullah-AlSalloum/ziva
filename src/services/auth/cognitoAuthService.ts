import { confirmSignIn, getCurrentUser, signIn, signOut, updatePassword } from 'aws-amplify/auth';
import { AuthService, AuthenticationResult } from './authService';
import { User } from '../../types';

export class CognitoAuthService implements AuthService {
  private pendingUser: User | null = null;

  async authenticate(identifier: string, password: string, users: User[]): Promise<AuthenticationResult> {
    try {
      const trimmedIdentifier = identifier.trim();
      let result;
      try {
        result = await signIn({ username: trimmedIdentifier, password });
      } catch (error) {
        const errorName = error instanceof Error ? error.name : '';
        if (errorName === 'UserAlreadyAuthenticatedException') {
          await signOut();
          result = await signIn({ username: trimmedIdentifier, password });
        } else {
          const mappedUser = users.find(user =>
            [user.email, user.username, user.name]
              .filter(Boolean)
              .some(value => value!.toLowerCase() === trimmedIdentifier.toLowerCase())
          );
          const alternateIdentifiers = mappedUser
            ? [mappedUser.username, mappedUser.name, mappedUser.email].filter(
              (value): value is string => Boolean(value) && value !== trimmedIdentifier
            )
            : [];
          if (!['NotAuthorizedException', 'UserNotFoundException'].includes(errorName) || alternateIdentifiers.length === 0) {
            throw error;
          }
          let lastError = error;
          for (const alternateIdentifier of alternateIdentifiers) {
            try {
              result = await signIn({ username: alternateIdentifier, password });
              break;
            } catch (alternateError) {
              lastError = alternateError;
            }
          }
          if (!result) {
            throw lastError;
          }
        }
      }

      const currentUser = result.isSignedIn ? await getCurrentUser() : null;
      const normalizedIdentifier = trimmedIdentifier.toLowerCase();
      const user = users.find(candidate =>
        [candidate.username, candidate.email, candidate.name]
          .filter(Boolean)
          .some(value => value!.toLowerCase() === normalizedIdentifier)
        || (currentUser && (candidate.username || candidate.name).toLowerCase() === currentUser.username.toLowerCase())
      );

      if (!user && !result.isSignedIn && result.nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
        this.pendingUser = {
          id: currentUser?.userId ?? trimmedIdentifier,
          name: currentUser?.username ?? trimmedIdentifier,
          username: currentUser?.username ?? trimmedIdentifier,
          description: '',
          role: 'Owner',
          status: 'active',
          hasSetPassword: false,
        };
        return { success: false, error: 'password-change-required', user: this.pendingUser };
      }

      if (!user) {
        return { success: false, error: 'profile-not-found' };
      }

      if (user.status === 'disabled') {
        return { success: false, error: user?.status === 'disabled' ? 'disabled-account' : 'invalid-credentials' };
      }

      if (!result.isSignedIn) {
        if (result.nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
          this.pendingUser = user;
          return { success: false, error: 'password-change-required', user };
        }
        return { success: false, error: 'invalid-credentials' };
      }

      return { success: true, user: { ...user, hasSetPassword: true } };
    } catch (error) {
      console.error('Cognito sign-in failed:', error);
      const detail = error instanceof Error ? error.name : 'UnknownCognitoError';
      return { success: false, error: 'invalid-credentials', detail };
    }

  }

  async completePasswordChange(password: string): Promise<AuthenticationResult> {
    try {
      const result = await confirmSignIn({ challengeResponse: password });
      if (!result.isSignedIn || !this.pendingUser) {
        return { success: false, error: 'invalid-credentials' };
      }

      const user = { ...this.pendingUser, hasSetPassword: true };
      this.pendingUser = null;
      return { success: true, user };
    } catch (error) {
      console.error('Cognito password change failed:', error);
      if (error instanceof Error && error.name === 'SignInException') {
        this.pendingUser = null;
        return { success: false, error: 'password-session-expired' };
      }
      const detail = error instanceof Error ? error.name : 'UnknownCognitoError';
      return { success: false, error: 'invalid-credentials', detail };
    }
  }

  async changePassword(currentPassword: string, newPassword: string) {
    try {
      await updatePassword({ oldPassword: currentPassword, newPassword });
      return { success: true };
    } catch (error) {
      console.error('Cognito password update failed:', error);
      return { success: false, error: 'password-update-failed' };
    }
  }

  async restoreSession(users: User[]): Promise<User | null> {
    try {
      const currentUser = await getCurrentUser();
      return users.find(user =>
        (user.username || user.name).toLowerCase() === currentUser.username.toLowerCase()
      ) || null;
    } catch {
      return null;
    }
  }
}
