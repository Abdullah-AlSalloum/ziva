import { QueryCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import bcrypt from 'bcryptjs';

const tableName = process.env.TABLE_NAME;
const database = DynamoDBDocumentClient.from(new DynamoDBClient({
  region: process.env.AWS_REGION,
  maxAttempts: 3,
}));

export type AuthenticatedProfile = {
  id: string;
  name: string;
  username: string;
  description: string;
  role: string;
  status: string;
  email?: string;
  hasSetPassword: boolean;
};

type StoredUser = AuthenticatedProfile & { passwordHash?: string };

const findUsers = async () => {
  if (!tableName) throw new Error('TABLE_NAME is not configured.');
  const result = await database.send(new QueryCommand({
    TableName: tableName,
    IndexName: 'GSI1',
    KeyConditionExpression: 'GSI1PK = :partition',
    ExpressionAttributeValues: { ':partition': 'TENANT#default#USER' },
    Limit: 500,
  }));
  return (result.Items ?? []) as StoredUser[];
};

export const authenticateUser = async (identifier: string, password: string) => {
  const normalizedIdentifier = identifier.trim().toLowerCase();
  const users = await findUsers();
  const user = users.find(candidate =>
    [candidate.username, candidate.email, candidate.name]
      .filter(Boolean)
      .some(value => value!.toLowerCase() === normalizedIdentifier),
  );

  if (!user || user.status !== 'active' || !user.passwordHash) return null;
  const passwordMatches = await bcrypt.compare(password, user.passwordHash);
  if (!passwordMatches) return null;

  const { passwordHash: _passwordHash, ...profile } = user;
  return profile;
};
