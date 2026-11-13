import * as cdk from 'aws-cdk-lib';
import { HttpJwtAuthorizer } from 'aws-cdk-lib/aws-apigatewayv2-authorizers';
import { CorsHttpMethod, HttpApi, HttpMethod } from 'aws-cdk-lib/aws-apigatewayv2';
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import * as path from 'node:path';

export interface ApiStackProps extends cdk.StackProps {
  readonly dataTable: Table;
  readonly userPoolId?: string;
  readonly userPoolClientId?: string;
  readonly webOrigin: string;
}

export class ApiStack extends cdk.Stack {
  public readonly handler: NodejsFunction;

  public constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    const userPoolId = props.userPoolId ?? new cdk.CfnParameter(this, 'CognitoUserPoolId', {
      type: 'String',
      description: 'Cognito user pool ID for the HTTP API JWT issuer',
    }).valueAsString;
    const userPoolClientId = props.userPoolClientId ?? new cdk.CfnParameter(this, 'CognitoUserPoolClientId', {
      type: 'String',
      description: 'Cognito app client ID accepted by the HTTP API JWT authorizer',
    }).valueAsString;
    const region = cdk.Stack.of(this).region;
    const issuer = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`;

    this.handler = new NodejsFunction(this, 'ApiHandler', {
      runtime: Runtime.NODEJS_22_X,
      entry: path.join(__dirname, '../../backend/handlers/api.ts'),
      handler: 'handler',
      environment: {
        TABLE_NAME: props.dataTable.tableName,
        COGNITO_USER_POOL_ID: userPoolId,
      },
      projectRoot: path.join(__dirname, '../..'),
      bundling: {
        minify: true,
        sourceMap: true,
      },
    });
    props.dataTable.grantReadWriteData(this.handler);
    this.handler.addToRolePolicy(new cdk.aws_iam.PolicyStatement({
      actions: [
        'cognito-idp:AdminCreateUser',
        'cognito-idp:AdminAddUserToGroup',
        'cognito-idp:AdminDeleteUser',
        'cognito-idp:CreateGroup',
      ],
      resources: [`arn:${cdk.Aws.PARTITION}:cognito-idp:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:userpool/${userPoolId}`],
    }));

    const api = new HttpApi(this, 'HttpApi', {
      apiName: 'ziva-api',
      corsPreflight: {
        allowHeaders: ['authorization', 'content-type'],
        allowMethods: [
          CorsHttpMethod.DELETE,
          CorsHttpMethod.GET,
          CorsHttpMethod.PATCH,
          CorsHttpMethod.POST,
          CorsHttpMethod.PUT,
        ],
        allowOrigins: [props.webOrigin],
        maxAge: cdk.Duration.hours(1),
      },
    });
    const authorizer = new HttpJwtAuthorizer('CognitoAuthorizer', issuer, {
      jwtAudience: [userPoolClientId],
    });
    const integration = new HttpLambdaIntegration('ApiIntegration', this.handler);

    api.addRoutes({
      path: '/{proxy+}',
      methods: [HttpMethod.DELETE, HttpMethod.GET, HttpMethod.PATCH, HttpMethod.POST, HttpMethod.PUT],
      integration,
      authorizer,
    });

    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url ?? ' unavailable',
      description: 'Base URL for the Ziva HTTP API',
    });
  }
}
