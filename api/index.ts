import { CognitoJwtVerifier } from 'aws-jwt-verify';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handler, type ApiEvent } from '../backend/handlers/api';

type VerifiedClaims = Record<string, unknown>;

const userPoolId = process.env.COGNITO_USER_POOL_ID;
const clientId = process.env.COGNITO_USER_POOL_CLIENT_ID;
const allowedOrigin = process.env.WEB_ORIGIN?.replace(/\/+$/, '');

const verifier = userPoolId && clientId
  ? CognitoJwtVerifier.create({
      userPoolId,
      clientId,
      tokenUse: 'access',
    })
  : null;

const getBearerToken = (authorization: string | string[] | undefined) => {
  const value = Array.isArray(authorization) ? authorization[0] : authorization;
  if (!value?.startsWith('Bearer ')) return undefined;
  const token = value.slice('Bearer '.length).trim();
  return token || undefined;
};

const getApiPath = (url: string) => {
  const path = url.split('?')[0] || '/';
  return path === '/api' ? '/' : path.startsWith('/api/') ? path.slice('/api'.length) : path;
};

const setCorsHeaders = (request: VercelRequest, response: VercelResponse) => {
  const origin = request.headers.origin;
  if (allowedOrigin && origin === allowedOrigin) {
    response.setHeader('access-control-allow-origin', allowedOrigin);
    response.setHeader('vary', 'Origin');
  }
  response.setHeader('access-control-allow-headers', 'authorization, content-type');
  response.setHeader('access-control-allow-methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
};

const sendApiResponse = (response: VercelResponse, statusCode: number, headers: Record<string, string>, body: string) => {
  for (const [name, value] of Object.entries(headers)) response.setHeader(name, value);
  if (statusCode === 204) {
    response.status(statusCode).end();
    return;
  }
  response.status(statusCode).send(body);
};

export default async function api(request: VercelRequest, response: VercelResponse) {
  setCorsHeaders(request, response);
  if (request.method === 'OPTIONS') {
    response.status(204).end();
    return;
  }

  if (!verifier) {
    response.status(500).json({ message: 'API authentication configuration is missing.' });
    return;
  }

  const token = getBearerToken(request.headers.authorization);
  if (!token) {
    response.status(401).json({ message: 'Authentication is required.' });
    return;
  }

  let claims: VerifiedClaims;
  try {
    claims = await verifier.verify(token) as VerifiedClaims;
  } catch {
    response.status(401).json({ message: 'Authentication is invalid or expired.' });
    return;
  }

  const url = request.url ?? '/';
  const queryIndex = url.indexOf('?');
  const event: ApiEvent = {
    rawPath: getApiPath(url),
    rawQueryString: queryIndex >= 0 ? url.slice(queryIndex + 1) : '',
    body: request.body === undefined ? undefined : typeof request.body === 'string' ? request.body : JSON.stringify(request.body),
    requestContext: {
      http: { method: request.method },
      authorizer: { jwt: { claims } },
    },
  };

  const apiResponse = await handler(event);
  sendApiResponse(response, apiResponse.statusCode, apiResponse.headers, apiResponse.body);
}
