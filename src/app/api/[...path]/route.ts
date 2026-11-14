import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/src/lib/auth';
import { handler, type ApiEvent } from '@/backend/handlers/api';

export const dynamic = 'force-dynamic';

const toClaims = (session: Awaited<ReturnType<typeof getSession>>) => {
  if (!session?.user?.id || !session.user.role) return undefined;
  return {
    sub: session.user.id,
    'cognito:groups': [session.user.role],
  };
};

const run = async (request: NextRequest) => {
  const session = await getSession();
  const claims = toClaims(session);
  const body = request.method === 'GET' || request.method === 'HEAD'
    ? undefined
    : await request.text();
  const url = new URL(request.url);
  const event: ApiEvent = {
    rawPath: url.pathname.replace(/^\/api/, '') || '/',
    rawQueryString: url.search.slice(1),
    body,
    requestContext: {
      http: { method: request.method },
      authorizer: { jwt: { claims } },
    },
  };
  const result = await handler(event);
  return new NextResponse(result.body, {
    status: result.statusCode,
    headers: result.headers,
  });
};

export const GET = run;
export const POST = run;
export const PUT = run;
export const PATCH = run;
export const DELETE = run;
