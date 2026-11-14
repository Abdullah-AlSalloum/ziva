import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/src/lib/auth';
import { QueryCommand, UpdateCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import bcrypt from 'bcryptjs';

const tableName = process.env.TABLE_NAME;
const database = DynamoDBDocumentClient.from(new DynamoDBClient({
  region: process.env.AWS_REGION,
  maxAttempts: 3,
}));

export async function PUT(request: NextRequest) {
  const session = await getSession();
  const userId = session?.user?.id;
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!tableName) return NextResponse.json({ error: 'Database is not configured' }, { status: 500 });

  const body = await request.json() as { currentPassword?: string; newPassword?: string };
  if (!body.currentPassword || !body.newPassword || body.newPassword.length < 6) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
  }

  const result = await database.send(new QueryCommand({
    TableName: tableName,
    IndexName: 'GSI1',
    KeyConditionExpression: 'GSI1PK = :partition',
    ExpressionAttributeValues: { ':partition': 'TENANT#default#USER' },
    Limit: 500,
  }));
  const user = (result.Items ?? []).find(item => item.id === userId) as { PK?: string; SK?: string; passwordHash?: string } | undefined;
  if (!user?.PK || !user.SK || !user.passwordHash || !(await bcrypt.compare(body.currentPassword, user.passwordHash))) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
  }

  await database.send(new UpdateCommand({
    TableName: tableName,
    Key: { PK: user.PK, SK: user.SK },
    UpdateExpression: 'SET passwordHash = :passwordHash, hasSetPassword = :hasSetPassword',
    ExpressionAttributeValues: {
      ':passwordHash': await bcrypt.hash(body.newPassword, 12),
      ':hasSetPassword': true,
    },
  }));
  return NextResponse.json({ ok: true });
}
