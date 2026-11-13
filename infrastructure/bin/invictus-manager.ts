import * as cdk from 'aws-cdk-lib';
import { ApiStack } from '../lib/api-stack.js';
import { DataStack } from '../lib/data-stack.js';
import { ObservabilityStack } from '../lib/observability-stack.js';

const app = new cdk.App();
const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION ?? process.env.AWS_REGION ?? 'us-east-1';
const webOrigin = process.env.WEB_ORIGIN;

if (!webOrigin) {
  throw new Error('WEB_ORIGIN is required. Set it to the deployed frontend origin.');
}

const parsedWebOrigin = new URL(webOrigin);
if (parsedWebOrigin.protocol !== 'https:' && parsedWebOrigin.hostname !== 'localhost') {
  throw new Error('WEB_ORIGIN must use HTTPS outside localhost.');
}

const env = { account, region };

const dataStack = new DataStack(app, 'ZivaDataStack', { env });

const apiStack = new ApiStack(app, 'ZivaApiStack', {
  env,
  dataTable: dataStack.table,
  userPoolId: process.env.COGNITO_USER_POOL_ID,
  userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID,
  webOrigin,
});

new ObservabilityStack(app, 'ZivaObservabilityStack', {
  env,
  apiHandler: apiStack.handler,
});

app.synth();
