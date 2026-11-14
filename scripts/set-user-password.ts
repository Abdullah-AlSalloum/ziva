import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import nextEnv from '@next/env';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { QueryCommand, UpdateCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import bcrypt from 'bcryptjs';

nextEnv.loadEnvConfig(process.cwd());

const tableName = process.env.TABLE_NAME;
const database = DynamoDBDocumentClient.from(new DynamoDBClient({
  region: process.env.AWS_REGION,
  maxAttempts: 3,
}));

if (!tableName) throw new Error('TABLE_NAME is required.');

const readline = createInterface({ input, output });
try {
  const identifier = (await readline.question('Username or email: ')).trim().toLowerCase();
  const password = await readline.question('New password: ');
  if (password.length < 6) throw new Error('Password must be at least 6 characters.');

  const result = await database.send(new QueryCommand({
    TableName: tableName,
    IndexName: 'GSI1',
    KeyConditionExpression: 'GSI1PK = :partition',
    ExpressionAttributeValues: { ':partition': 'TENANT#default#USER' },
    Limit: 500,
  }));
  const user = (result.Items ?? []).find(candidate =>
    [candidate.username, candidate.email, candidate.name]
      .filter(Boolean)
      .some(value => String(value).toLowerCase() === identifier),
  ) as { PK?: string; SK?: string; username?: string } | undefined;
  if (!user?.PK || !user.SK) throw new Error('User profile was not found.');

  await database.send(new UpdateCommand({
    TableName: tableName,
    Key: { PK: user.PK, SK: user.SK },
    UpdateExpression: 'SET passwordHash = :passwordHash, hasSetPassword = :hasSetPassword',
    ExpressionAttributeValues: {
      ':passwordHash': await bcrypt.hash(password, 12),
      ':hasSetPassword': true,
    },
  }));
  console.log(`Password updated for ${user.username ?? identifier}.`);
} finally {
  readline.close();
}
