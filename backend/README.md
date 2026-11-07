# Backend boundary

The backend will be added behind this directory and will own all operational
data and authorization decisions.

## Target architecture

```text
React app -> API Gateway -> Lambda -> DynamoDB
                  |
               Cognito JWT
```

The current frontend keeps operational records in the development-only
`LocalDatabase` adapter under `src/services/database`. The controller depends
on the `Database` contract and receives an adapter through
`createDatabase()`, so an API client can replace local storage without moving
feature components or changing their data-handling code.

The next adapter should implement the same collection, document, batch, and
snapshot operations while translating them to authenticated API requests.

## Backend responsibilities

- Validate Cognito JWT claims at the API boundary.
- Enforce role and tenant authorization on every read and write.
- Validate request bodies before writing to DynamoDB.
- Return typed, paginated responses for operational collections.
- Never trust frontend role checks as authorization.

The backend runtime and infrastructure tool (CDK, SAM, or Terraform) should be
selected before implementation begins.
