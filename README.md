# Ziva Manager

Ziva Manager is a bilingual React/Vite inventory management system for
tracking inventory, tasks, orders, laboratories, backorders, users, and audit
history.

## Project structure

```text
src/                  React application, localization, auth, and data adapters
api/                  Vercel API function entrypoint
backend/              Shared API and DynamoDB handlers
infrastructure/        AWS CDK TypeScript application
```

The frontend is separated from backend concerns. LocalStorage is available
for development, while the production adapter connects to the
Cognito-authorized Vercel API, which accesses DynamoDB server-side. See
[`backend/README.md`](./backend/README.md) for the API contract and data model.

## Production configuration

The browser app uses AWS Cognito for authentication and does not support a
local password fallback. Create a Cognito public app client without a client
secret, then configure the values at build time:

```env
VITE_AWS_REGION=your-aws-region
VITE_COGNITO_USER_POOL_ID=your-user-pool-id
VITE_COGNITO_USER_POOL_CLIENT_ID=your-public-app-client-id
VITE_API_BASE_URL=https://your-vercel-domain.vercel.app/api
```

The Vercel API also requires these server-only environment variables:

```env
AWS_REGION=your-aws-region
TABLE_NAME=ziva-operational-data
COGNITO_USER_POOL_ID=your-user-pool-id
COGNITO_USER_POOL_CLIENT_ID=your-public-app-client-id
WEB_ORIGIN=https://your-vercel-domain.vercel.app
AWS_ACCESS_KEY_ID=server-only-least-privilege-key
AWS_SECRET_ACCESS_KEY=server-only-secret
```

Do not commit `.env` or put an AWS credential, Cognito client secret, or other
private secret in the browser application. Configure the AWS credentials only
as encrypted Vercel server-side variables, restrict them to the required
DynamoDB and Cognito actions, and rotate them. LocalStorage is used only when
`VITE_API_BASE_URL` is absent during Vite development. A production build
without `VITE_API_BASE_URL` fails explicitly instead of silently storing
operational data in the browser; production must point to `/api` on the
deployed Vercel project.

Keep these values in the local `.env` file and in Vercel Environment Variables.
The `.env` file is ignored by Git and must never be committed.

## Local validation

```powershell
npm run build
npm test
npx tsc --noEmit
```

## Production release checklist

The frontend and API are deployed from this repository to Vercel. DynamoDB
remains in AWS, and the Vercel server-side function uses its AWS credentials
to access the table. The browser never receives AWS database credentials.

### Before deployment

- [ ] Confirm the AWS account, region, CDK bootstrap, and deployment operator.
- [ ] Create or verify the Cognito user pool and public app client.
- [ ] Ensure Cognito users receive `custom:role` or a matching group claim.
- [ ] Set the Vercel server-only variables listed above.
- [ ] Set the Vercel build-time `VITE_*` variables, including the `/api` base
      URL.
- [ ] Add an approved operations subscription to the emitted SNS alert topic.
- [ ] Review audit retention and DynamoDB backup requirements.
- [ ] Confirm `.env` and AWS credentials are not committed.

### Validate the shared backend and infrastructure

```powershell
cd infrastructure
npm install
$env:COGNITO_USER_POOL_ID="your-user-pool-id"
$env:COGNITO_USER_POOL_CLIENT_ID="your-public-app-client-id"
$env:WEB_ORIGIN="https://app.example.com"
npm run build
npm run synth
npx cdk diff
npx cdk synth --strict
```

Review the CloudFormation output before changing AWS resources. The Vercel
deployment runs `api/index.ts`; no API Gateway deployment is required for this
hosting model.

### Build and deploy on Vercel

Set the production values before building:

```powershell
$env:VITE_AWS_REGION="your-aws-region"
$env:VITE_COGNITO_USER_POOL_ID="your-user-pool-id"
$env:VITE_COGNITO_USER_POOL_CLIENT_ID="your-public-app-client-id"
$env:VITE_API_BASE_URL="https://your-vercel-domain.vercel.app/api"
npm run build
```

Configure the same values in the Vercel project, deploy the repository, and
verify that the host origin exactly matches `WEB_ORIGIN`.

The Vercel project should use:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Vercel CLI is optional; deployment can be started by importing this GitHub
repository into Vercel. The API function is discovered automatically from
[`api/index.ts`](./api/index.ts).

### After deployment

- [ ] Sign in with a test user from each required role.
- [ ] Verify reads, writes, destructive actions, notifications, and audit access.
- [ ] Confirm a user cannot access another user's notifications.
- [ ] Confirm the Vercel function logs contain no secrets or tokens.
- [ ] Check the browser network panel for the production API origin and HTTPS.
- [ ] Keep the previous frontend build available for rollback.
- [ ] Do not delete the retained DynamoDB table during an application rollback.

No deployment is performed by repository validation commands.
