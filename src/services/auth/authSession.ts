const SESSION_KEY = 'invictus-manager-authenticated-user';

export const getStoredUserId = (): string | null => {
  try {
    return localStorage.getItem(SESSION_KEY);
  } catch (error) {
    console.error('Unable to read the authentication session:', error);
    return null;
  }
};

export const storeUserId = (userId: string): void => {
  try {
    localStorage.setItem(SESSION_KEY, userId);
  } catch (error) {
    console.error('Unable to save the authentication session:', error);
  }
};

export const clearStoredUserId = (): void => {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (error) {
    console.error('Unable to clear the authentication session:', error);
  }
};
