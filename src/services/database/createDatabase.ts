import { ApiDatabase } from './apiDatabase';
import { Database } from './localDatabase';

export const createDatabase = (): Database => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? '/api';
  return new ApiDatabase(apiBaseUrl);
};
