import { ApiDatabase } from './apiDatabase';
import { Database, LocalDatabase } from './localDatabase';

export const createDatabase = (): Database => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  if (apiBaseUrl) return new ApiDatabase(apiBaseUrl);
  if (import.meta.env.DEV) return new LocalDatabase();
  throw new Error('Production API configuration is missing. Set VITE_API_BASE_URL.');
};
