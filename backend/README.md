# Backend boundary

The backend owns operational data, authorization, validation, and audit history.
The frontend remains responsible for presentation, local language preferences,
and optimistic loading states.

## Selected architecture

```text
React app
   |
   | Cognito access token
   v
Vercel API function
   |
   v
DynamoDB single table
```

The shared handler is deployed through the Vercel API function in
[`../api/index.ts`](../api/index.ts). Cognito JWT verification happens at the
Vercel boundary, while the handler enforces the user role rules for every
operation. AWS CDK remains available for provisioning the DynamoDB table and
Cognito resources.

## Data model

Use one DynamoDB table with:

- `PK`: the fixed application workspace partition key (`TENANT#default`).
- `SK`: entity type and entity ID.
- `entityType`: `USER`, `INVENTORY`, `ORDER_REQUEST`, `TASK`,
  `DAILY_ORDER`, `LABORATORY`, `BACKORDER`, or `AUDIT`.
- `createdAt` and `updatedAt` on mutable records.
- `GSI1PK` and `GSI1SK` for collection-specific queries and chronological
  activity views.

The first deployment supports one company only. The backend ignores any
workspace or tenant value supplied in Cognito claims and always uses the
fixed `default` workspace.

## Initial API surface

All routes require a valid Cognito access token:

| Route | Purpose |
| --- | --- |
| `GET /users` | List workspace users |
| `POST /users` | Create a Cognito user, send a temporary-password invitation, and create the profile |
| `PATCH /users/{id}` | Update profile or status |
| `GET /inventory` | List inventory with pagination and filters |
| `POST /inventory` | Add an inventory item |
| `PATCH /inventory/{id}` | Update item details or quantity |
| `DELETE /inventory/{id}` | Remove an inventory item |
| `GET /order-requests` | List pending requests |
| `POST /order-requests` | Create a request |
| `PATCH /order-requests/{id}` | Update or move a request |
| `DELETE /order-requests/{id}` | Remove a request |
| `GET /tasks` | List team tasks |
| `POST /tasks` | Create a task |
| `PATCH /tasks/{id}` | Update task status or details |
| `DELETE /tasks/{id}` | Remove a task |
| `GET /daily-orders` | List sent daily orders |
| `POST /daily-orders` | Record a daily order |
| `DELETE /daily-orders/{id}` | Remove a daily order |
| `GET /laboratories` | List laboratories |
| `POST /laboratories` | Add a laboratory |
| `DELETE /laboratories/{id}` | Remove a laboratory |
| `GET /backorders` | List backorders |
| `DELETE /backorders/{id}` | Remove a backorder |
| `GET /notifications` | List workspace notifications |
| `PUT /notifications/{userId}` | Replace a user's notifications |
| `DELETE /notifications/{userId}` | Clear a user's notifications |
| `GET /audit-events` | Read audit history for authorized roles |

Collection responses will use `{ items, nextToken }` so the frontend can move
from local pagination to DynamoDB cursor pagination without changing the UI
contract.

## Adapter boundary

The current frontend keeps operational records in the development-only
`LocalDatabase` adapter under `src/services/database`. The controller depends
on the `Database` contract and receives an adapter through
`createDatabase()`. The production adapter will translate the same collection,
document, batch, and snapshot operations into authenticated API requests.

## Backend responsibilities

- Validate Cognito JWT claims at the API boundary.
- Provision users through Cognito and DynamoDB together; a failed profile write removes the newly created Cognito user.
- Enforce role authorization on every read and write.
- Validate request bodies before writing to DynamoDB.
- Use conditional writes for quantity changes and status transitions.
- Return typed, paginated responses for operational collections.
- Record important mutations in the audit stream.
- Never trust frontend role checks as authorization.

## AWS infrastructure stacks

1. `ZivaDataStack`: DynamoDB table, indexes, backups, encryption, and
   termination protection.
2. `ZivaApiStack`: optional API Gateway/Lambda deployment of the same handler
   for teams that choose AWS-hosted API execution instead of Vercel.
3. `ZivaObservabilityStack`: retained API logs, p99 latency/error/throttle
   alarms, a composite service alarm, an SNS topic, and an 8-hour dashboard.

The SNS topic is intentionally created without an email subscription. Add an
approved operations endpoint after deployment rather than embedding a personal
address in infrastructure code.

Production deployment must run `cdk synth --strict`, `cdk diff`, and security
checks before `cdk deploy`. Hotswap and Express deployments are development-only.

## CDK project

The CDK application lives in [`../infrastructure`](../infrastructure) and is
split into:

- `ZivaDataStack`: encrypted DynamoDB table, GSI, point-in-time recovery, and
  retain-on-destroy protection.
- `ZivaApiStack`: HTTP API, Cognito JWT authorizer, Lambda integration, CORS,
  and least-privilege table access.
- `ZivaObservabilityStack`: retained logs, API alarms, composite alerting,
  SNS notification topic, and CloudWatch dashboard.

Install and validate it locally:

```powershell
cd infrastructure
npm install
npm run build
npm run synth
```

Before deployment, provide the target account and region through the normal
CDK environment (`CDK_DEFAULT_ACCOUNT` and `CDK_DEFAULT_REGION`) plus:

- `COGNITO_USER_POOL_ID`
- `COGNITO_USER_POOL_CLIENT_ID`
- `WEB_ORIGIN`

`WEB_ORIGIN` is required and must be an HTTPS origin outside localhost. The
API responses include no-store caching, HSTS, clickjacking, MIME-sniffing, and
referrer-policy protections and rejects malformed resource identifiers before
they reach DynamoDB.

If Cognito IDs are not supplied, CDK emits CloudFormation parameters so the
values can be provided at deployment time. No deployment is performed by the
local validation commands.

The Lambda entry point at [`handlers/api.ts`](./handlers/api.ts) now provides
the first API slice: authenticated collection reads, validated creates,
updates, deletes, cursor pagination, fixed-workspace partition keys, and audit
records for mutations. It derives the actor from Cognito claims and never
accepts workspace values from request bodies.

The handler requires a `sub` claim and either `custom:role` or a matching
`cognito:groups` value. Requests without those claims are rejected. The
server now applies an operation matrix: Owner and Manager administer users,
Technical Service can manage inventory and laboratories, Sales Manager and
Sales Lead can create operational sales records, and audit history is limited
to Owner and Manager. Every role can read operational collections, while
destructive operations remain restricted to Owner and Manager.
Notification records are additionally scoped to the authenticated Cognito
subject, preventing one user from reading or clearing another user's alerts.

User creation requires an email address so Cognito can send the temporary
password invitation. The API creates the role group when it does not exist and
adds the new user to it. The Lambda execution role therefore requires the
limited `AdminCreateUser`, `AdminAddUserToGroup`, `AdminDeleteUser`, and
`CreateGroup` Cognito actions on the configured user pool.

The browser adapter follows the API cursor until the full collection is loaded,
refreshes active listeners immediately after successful writes, and polls as a
30-second reconciliation fallback. Only idempotent reads are retried after
transient network or server failures; writes are never retried automatically to
avoid duplicate mutations.
