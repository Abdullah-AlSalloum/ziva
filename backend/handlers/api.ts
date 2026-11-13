import { randomUUID } from 'node:crypto';
import {
  AdminAddUserToGroupCommand,
  AdminCreateUserCommand,
  AdminDeleteUserCommand,
  CognitoIdentityProviderClient,
  CreateGroupCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  QueryCommand,
} from '@aws-sdk/lib-dynamodb';
import { z } from 'zod';

const MAX_BODY_BYTES = 64 * 1024;
const WORKSPACE_ID = 'default';
const TABLE_NAME = process.env.TABLE_NAME;
const COGNITO_USER_POOL_ID = process.env.COGNITO_USER_POOL_ID;
const cognito = new CognitoIdentityProviderClient({
  region: process.env.AWS_REGION,
  maxAttempts: 3,
});
const database = DynamoDBDocumentClient.from(new DynamoDBClient({
  region: process.env.AWS_REGION,
  maxAttempts: 3,
}));

const userRoles = ['Owner', 'Manager', 'Sales Manager', 'Technical Service', 'Accountant', 'Sales Lead', 'Computer Engineer'] as const;
const taskStatuses = ['To Do', 'In Progress', 'Completed'] as const;
const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phoneNumber: z.string().trim().min(3).max(40),
}).strict();
const orderDetailsSchema = z.union([
  z.string().trim().min(1).max(5000),
  z.array(z.string().trim().min(1).max(500)).min(1).max(100),
  z.array(z.object({
    name: z.string().trim().min(1).max(500),
    quantity: z.number().int().positive().max(1_000_000),
  }).strict()).min(1).max(100),
]);

const schemas = {
  users: z.object({
    name: z.string().trim().min(1).max(120),
    username: z.string().trim().min(1).max(120),
    description: z.string().trim().max(500),
    role: z.enum(userRoles),
    status: z.enum(['active', 'disabled']),
    email: z.string().email().max(320).optional(),
    hasSetPassword: z.boolean(),
  }).strict(),
  inventory: z.object({
    reference: z.string().trim().min(1).max(120),
    name: z.string().trim().min(1).max(200),
    type: z.string().trim().min(1).max(120),
    quantity: z.number().int().nonnegative().max(1_000_000),
    managedBy: z.string().trim().min(1).max(200),
    createdAt: z.string().datetime().optional(),
  }).strict(),
  'order-requests': z.object({
    userId: z.string().trim().min(1).max(200),
    customerName: z.string().trim().min(1).max(200),
    orderDetails: orderDetailsSchema,
    createdAt: z.string().datetime().optional(),
  }).strict(),
  tasks: z.object({
    description: z.string().trim().min(1).max(5000),
    assignedTo: z.string().trim().min(1).max(200),
    createdBy: z.string().trim().min(1).max(200),
    dueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    status: z.enum(taskStatuses),
    createdAt: z.string().datetime().optional(),
  }).strict(),
  'daily-orders': z.object({
    orderDetails: z.string().trim().min(1).max(5000),
    customerName: z.string().trim().min(1).max(200),
    dateSent: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    createdAt: z.string().datetime().optional(),
  }).strict(),
  laboratories: z.object({
    name: z.string().trim().min(1).max(200),
    googleMapsLink: z.string().url().max(2048),
    contacts: z.array(contactSchema).max(50),
    createdAt: z.string().datetime().optional(),
  }).strict(),
  backorders: z.object({
    userId: z.string().trim().min(1).max(200),
    customerName: z.string().trim().min(1).max(200),
    orderDetails: orderDetailsSchema,
    createdAt: z.string().datetime().optional(),
  }).strict(),
  notifications: z.object({
    messages: z.array(z.string().max(2000)).max(100),
  }).strict(),
} as const;

const collectionConfig = {
  users: { entityType: 'USER', readRoles: userRoles },
  inventory: { entityType: 'INVENTORY', readRoles: userRoles },
  'order-requests': { entityType: 'ORDER_REQUEST', readRoles: userRoles },
  tasks: { entityType: 'TASK', readRoles: userRoles },
  'daily-orders': { entityType: 'DAILY_ORDER', readRoles: userRoles },
  laboratories: { entityType: 'LABORATORY', readRoles: userRoles },
  backorders: { entityType: 'BACKORDER', readRoles: userRoles },
  notifications: { entityType: 'NOTIFICATION', readRoles: userRoles },
  'audit-events': { entityType: 'AUDIT', readRoles: ['Owner', 'Manager'] as const },
} as const;

const updateSchemas = {
  users: schemas.users.pick({ name: true, description: true, role: true, status: true }),
  inventory: schemas.inventory.pick({ reference: true, name: true, type: true, quantity: true, managedBy: true }),
  'order-requests': schemas['order-requests'].pick({ userId: true, customerName: true, orderDetails: true }),
  tasks: schemas.tasks.pick({ description: true, assignedTo: true, dueDate: true, status: true }),
  'daily-orders': schemas['daily-orders'].pick({ orderDetails: true, customerName: true, dateSent: true }),
  laboratories: schemas.laboratories.pick({ name: true, googleMapsLink: true, contacts: true }),
  backorders: schemas.backorders.pick({ userId: true, customerName: true, orderDetails: true }),
  notifications: schemas.notifications.pick({ messages: true }),
} as const;

type Role = typeof userRoles[number];
type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
const allRoles: readonly Role[] = userRoles;
const rolePermissions: Record<CollectionName, Partial<Record<Method, readonly Role[]>>> = {
  users: { GET: ['Owner', 'Manager'], POST: ['Owner', 'Manager'], PATCH: ['Owner', 'Manager'], DELETE: ['Owner', 'Manager'] },
  inventory: { GET: allRoles, POST: ['Owner', 'Manager', 'Technical Service'], PATCH: ['Owner', 'Manager', 'Technical Service'], DELETE: ['Owner', 'Manager'] },
  'order-requests': { GET: allRoles, POST: ['Owner', 'Manager', 'Sales Manager', 'Sales Lead'], PATCH: ['Owner', 'Manager', 'Sales Manager'], DELETE: ['Owner', 'Manager'] },
  tasks: { GET: allRoles, POST: ['Owner', 'Manager', 'Sales Manager', 'Technical Service'], PATCH: ['Owner', 'Manager', 'Sales Manager', 'Technical Service'], DELETE: ['Owner', 'Manager'] },
  'daily-orders': { GET: allRoles, POST: ['Owner', 'Manager', 'Sales Manager', 'Sales Lead'], PATCH: ['Owner', 'Manager', 'Sales Manager'], DELETE: ['Owner', 'Manager'] },
  laboratories: { GET: allRoles, POST: ['Owner', 'Manager', 'Technical Service'], PATCH: ['Owner', 'Manager', 'Technical Service'], DELETE: ['Owner', 'Manager'] },
  backorders: { GET: allRoles, POST: ['Owner', 'Manager', 'Sales Manager', 'Sales Lead'], PATCH: ['Owner', 'Manager', 'Sales Manager'], DELETE: ['Owner', 'Manager'] },
  notifications: { GET: allRoles, POST: allRoles, PATCH: allRoles, PUT: allRoles, DELETE: allRoles },
  'audit-events': { GET: ['Owner', 'Manager'] },
};

type CollectionName = keyof typeof collectionConfig;
type Claims = Record<string, unknown>;
export type ApiEvent = {
  readonly rawPath?: string;
  readonly rawQueryString?: string;
  readonly body?: string | null;
  readonly isBase64Encoded?: boolean;
  readonly requestContext?: {
    readonly http?: { readonly method?: string };
    readonly authorizer?: { readonly jwt?: { readonly claims?: Claims } };
  };
};
type ApiResponse = {
  readonly statusCode: number;
  readonly headers: Record<string, string>;
  readonly body: string;
};

export const response = (statusCode: number, body: unknown): ApiResponse => ({
  statusCode,
  headers: {
    'cache-control': 'no-store',
    'content-type': 'application/json; charset=utf-8',
    'content-security-policy': "default-src 'none'; frame-ancestors 'none'",
    'referrer-policy': 'no-referrer',
    'strict-transport-security': 'max-age=31536000',
    'x-content-type-options': 'nosniff',
  },
  body: JSON.stringify(body),
});

export const getIdentity = (event: ApiEvent) => {
  const claims = event.requestContext?.authorizer?.jwt?.claims;
  const subject = typeof claims?.sub === 'string' ? claims.sub : '';
  const groupClaim = claims?.['cognito:groups'];
  const groups = Array.isArray(groupClaim)
    ? groupClaim.filter((group): group is string => typeof group === 'string')
    : typeof groupClaim === 'string' ? groupClaim.split(',').map(group => group.trim()) : [];
  const roleClaim = typeof claims?.['custom:role'] === 'string' ? claims['custom:role'] : undefined;
  const role = roleClaim ?? groups.find(group => userRoles.includes(group as typeof userRoles[number]));
  return subject && role
    ? { subject, tenant: WORKSPACE_ID, role }
    : null;
};

const isCollection = (value: string): value is CollectionName => value in collectionConfig;

export const isAllowed = (collection: CollectionName, method: string | undefined, role: string) => {
  const roles = method && rolePermissions[collection][method as Method];
  return Boolean(roles?.includes(role as Role));
};

export const parsePath = (event: ApiEvent) => {
  const segments = (event.rawPath ?? '').split('/').filter(Boolean);
  if (segments.length < 1 || segments.length > 2 || !isCollection(segments[0])) return null;
  if (segments[1] && !/^[A-Za-z0-9][A-Za-z0-9._:-]{0,199}$/.test(segments[1])) return null;
  return { collection: segments[0], id: segments[1] };
};

const decodeToken = (token: string | undefined) => {
  if (!token) return undefined;
  try {
    return JSON.parse(Buffer.from(token, 'base64url').toString('utf8')) as Record<string, unknown>;
  } catch {
    throw new ClientError(400, 'Invalid pagination token.');
  }
};

const encodeToken = (key: Record<string, unknown> | undefined) =>
  key ? Buffer.from(JSON.stringify(key)).toString('base64url') : undefined;

class ClientError extends Error {
  public constructor(public readonly statusCode: number, message: string) {
    super(message);
  }
}

const parseBody = (event: ApiEvent): unknown => {
  if (!event.body) throw new ClientError(400, 'A request body is required.');
  const rawBody = event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString('utf8') : event.body;
  if (Buffer.byteLength(rawBody, 'utf8') > MAX_BODY_BYTES) {
    throw new ClientError(413, 'Request body is too large.');
  }
  try {
    return JSON.parse(rawBody) as unknown;
  } catch {
    throw new ClientError(400, 'Request body must be valid JSON.');
  }
};

export const validate = (collection: Exclude<CollectionName, 'audit-events'>, body: unknown, partial = false) => {
  const schema = partial ? updateSchemas[collection].partial() : schemas[collection];
  const result = schema.safeParse(body);
  if (result.success) return result.data;
  throw new ClientError(400, 'Request validation failed.');
};

const keysFor = (tenant: string, entityType: string, id: string) => ({
  PK: `TENANT#${tenant}`,
  SK: `${entityType}#${id}`,
});

const writeAudit = async (tenant: string, subject: string, role: string, action: string, entityType: string, entityId: string) => {
  const createdAt = new Date().toISOString();
  await database.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      ...keysFor(tenant, 'AUDIT', randomUUID()),
      entityType: 'AUDIT',
      GSI1PK: `TENANT#${tenant}#AUDIT`,
      GSI1SK: `${createdAt}#${entityId}`,
      action,
      targetEntityType: entityType,
      targetEntityId: entityId,
      actorId: subject,
      actorRole: role,
      createdAt,
    },
  }));
};

const withoutKeys = (item: Record<string, unknown>) => {
  const { PK: _pk, SK: _sk, GSI1PK: _gsi1pk, GSI1SK: _gsi1sk, entityType: _entityType, ...publicItem } = item;
  return publicItem;
};

const queryCollection = async (tenant: string, collection: CollectionName, nextToken: string | undefined, limit: number) => {
  const { entityType } = collectionConfig[collection];
  const result = await database.send(new QueryCommand({
    TableName: TABLE_NAME,
    IndexName: 'GSI1',
    KeyConditionExpression: 'GSI1PK = :partition',
    ExpressionAttributeValues: { ':partition': `TENANT#${tenant}#${entityType}` },
    ExclusiveStartKey: decodeToken(nextToken),
    Limit: limit,
    ScanIndexForward: false,
  }));
  return {
    items: (result.Items ?? []).map(item => withoutKeys(item as Record<string, unknown>)),
    nextToken: encodeToken(result.LastEvaluatedKey as Record<string, unknown> | undefined),
  };
};

const createItem = async (tenant: string, subject: string, role: string, collection: Exclude<CollectionName, 'audit-events'>, body: unknown) => {
  const data = validate(collection, body);
  const id = randomUUID();
  const now = new Date().toISOString();
  const item = {
    ...keysFor(tenant, collectionConfig[collection].entityType, id),
    ...data,
    id,
    entityType: collectionConfig[collection].entityType,
    createdAt: 'createdAt' in data && data.createdAt ? data.createdAt : now,
    GSI1PK: `TENANT#${tenant}#${collectionConfig[collection].entityType}`,
    GSI1SK: `${'createdAt' in data && data.createdAt ? data.createdAt : now}#${id}`,
  };
  await database.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: item,
    ConditionExpression: 'attribute_not_exists(PK)',
  }));
  await writeAudit(tenant, subject, role, 'CREATE', item.entityType, id);
  return withoutKeys(item);
};

const createCognitoUser = async (username: string, email: string, role: Role) => {
  if (!COGNITO_USER_POOL_ID) throw new Error('Cognito user pool is not configured.');

  await cognito.send(new AdminCreateUserCommand({
    UserPoolId: COGNITO_USER_POOL_ID,
    Username: username,
    UserAttributes: [{ Name: 'email', Value: email }],
  }));

  try {
    try {
      await cognito.send(new AdminAddUserToGroupCommand({
        UserPoolId: COGNITO_USER_POOL_ID,
        Username: username,
        GroupName: role,
      }));
    } catch (error) {
      if (error instanceof Error && error.name === 'ResourceNotFoundException') {
        await cognito.send(new CreateGroupCommand({
          UserPoolId: COGNITO_USER_POOL_ID,
          GroupName: role,
          Description: `Ziva users with the ${role} role`,
        }));
        await cognito.send(new AdminAddUserToGroupCommand({
          UserPoolId: COGNITO_USER_POOL_ID,
          Username: username,
          GroupName: role,
        }));
      } else {
        throw error;
      }
    }
  } catch (error) {
    await cognito.send(new AdminDeleteUserCommand({
      UserPoolId: COGNITO_USER_POOL_ID,
      Username: username,
    }));
    throw error;
  }
};

const createUser = async (tenant: string, subject: string, actorRole: string, body: unknown) => {
  const data = schemas.users.parse(body);
  if (!data.email) throw new ClientError(400, 'An email address is required for the Cognito invitation.');
  if (actorRole !== 'Owner' && data.role === 'Owner') {
    throw new ClientError(403, 'Only an Owner can create another Owner.');
  }

  await createCognitoUser(data.username, data.email, data.role);
  try {
    return await createItem(tenant, subject, actorRole, 'users', {
      ...data,
      hasSetPassword: false,
    });
  } catch (error) {
    if (COGNITO_USER_POOL_ID) {
      await cognito.send(new AdminDeleteUserCommand({
        UserPoolId: COGNITO_USER_POOL_ID,
        Username: data.username,
      }));
    }
    throw error;
  }
};

const putItem = async (tenant: string, subject: string, role: string, collection: Exclude<CollectionName, 'audit-events'>, id: string, body: unknown) => {
  const data = validate(collection, body);
  const now = new Date().toISOString();
  const createdAt = 'createdAt' in data && data.createdAt ? data.createdAt : now;
  const item = {
    ...keysFor(tenant, collectionConfig[collection].entityType, id),
    ...data,
    id,
    entityType: collectionConfig[collection].entityType,
    createdAt,
    GSI1PK: `TENANT#${tenant}#${collectionConfig[collection].entityType}`,
    GSI1SK: `${createdAt}#${id}`,
  };
  await database.send(new PutCommand({ TableName: TABLE_NAME, Item: item }));
  await writeAudit(tenant, subject, role, 'UPSERT', item.entityType, id);
  return withoutKeys(item);
};

const updateItem = async (tenant: string, subject: string, role: string, collection: Exclude<CollectionName, 'audit-events'>, id: string, body: unknown) => {
  const entityType = collectionConfig[collection].entityType;
  const existing = await database.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: keysFor(tenant, entityType, id),
  }));
  if (!existing.Item) throw new ClientError(404, 'Resource not found.');
  const data = validate(collection, body, true);
  const item = {
    ...existing.Item,
    ...data,
    id,
    entityType,
    updatedAt: new Date().toISOString(),
  };
  await database.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: item,
    ConditionExpression: 'attribute_exists(PK)',
  }));
  await writeAudit(tenant, subject, role, 'UPDATE', entityType, id);
  return withoutKeys(item);
};

const deleteItem = async (tenant: string, subject: string, role: string, collection: Exclude<CollectionName, 'audit-events'>, id: string) => {
  const result = await database.send(new DeleteCommand({
    TableName: TABLE_NAME,
    Key: keysFor(tenant, collectionConfig[collection].entityType, id),
    ReturnValues: 'ALL_OLD',
  }));
  if (!result.Attributes) throw new ClientError(404, 'Resource not found.');
  await writeAudit(tenant, subject, role, 'DELETE', collectionConfig[collection].entityType, id);
};

export const handler = async (event: ApiEvent): Promise<ApiResponse> => {
  if (!TABLE_NAME) return response(500, { message: 'API database configuration is missing.' });
  const identity = getIdentity(event);
  if (!identity) return response(401, { message: 'Authentication claims are required.' });
  const route = parsePath(event);
  if (!route) return response(404, { message: 'Route not found.' });
  const method = event.requestContext?.http?.method;
  if (!isAllowed(route.collection, method, identity.role)) {
    return response(403, { message: 'You are not authorized to access this resource.' });
  }
  if (route.collection === 'notifications' && route.id && route.id !== identity.subject) {
    return response(403, { message: 'You are not authorized to access this resource.' });
  }

  try {
    if (method === 'GET' && !route.id) {
      if (route.collection === 'notifications') {
        const result = await database.send(new GetCommand({
          TableName: TABLE_NAME,
          Key: keysFor(identity.tenant, 'NOTIFICATION', identity.subject),
        }));
        return response(200, {
          items: result.Item ? [withoutKeys(result.Item as Record<string, unknown>)] : [],
        });
      }
      const url = new URL(`https://api.invalid${event.rawPath ?? '/'}?${event.rawQueryString ?? ''}`);
      const requestedLimit = Number(url.searchParams.get('limit') ?? '25');
      const limit = Number.isInteger(requestedLimit) && requestedLimit > 0 && requestedLimit <= 100 ? requestedLimit : 25;
      return response(200, await queryCollection(identity.tenant, route.collection, url.searchParams.get('nextToken') ?? undefined, limit));
    }
    if (method === 'GET' && route.id) {
      const { entityType } = collectionConfig[route.collection];
      const result = await database.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keysFor(identity.tenant, entityType, route.id),
      }));
      return result.Item ? response(200, withoutKeys(result.Item as Record<string, unknown>)) : response(404, { message: 'Resource not found.' });
    }
    if (method === 'POST' && !route.id && route.collection !== 'audit-events') {
      const created = route.collection === 'users'
        ? await createUser(identity.tenant, identity.subject, identity.role, parseBody(event))
        : await createItem(identity.tenant, identity.subject, identity.role, route.collection, parseBody(event));
      return response(201, created);
    }
    if (method === 'PATCH' && route.id && route.collection !== 'audit-events') {
      const updated = await updateItem(identity.tenant, identity.subject, identity.role, route.collection, route.id, parseBody(event));
      return response(200, updated);
    }
    if (method === 'PUT' && route.id && route.collection !== 'audit-events') {
      const saved = await putItem(identity.tenant, identity.subject, identity.role, route.collection, route.id, parseBody(event));
      return response(200, saved);
    }
    if (method === 'DELETE' && route.id && route.collection !== 'audit-events') {
      await deleteItem(identity.tenant, identity.subject, identity.role, route.collection, route.id);
      return response(204, null);
    }
    return response(405, { message: 'Method not allowed.' });
  } catch (error) {
    if (error instanceof ClientError) return response(error.statusCode, { message: error.message });
    console.error('Unhandled API error', error);
    return response(500, { message: 'An unexpected server error occurred.' });
  }
};
