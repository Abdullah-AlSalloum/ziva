import { Database, LocalDatabase } from './localDatabase';

export const createDatabase = (): Database => new LocalDatabase();
