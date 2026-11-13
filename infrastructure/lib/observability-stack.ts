import * as cdk from 'aws-cdk-lib';
import {
  Alarm,
  AlarmRule,
  AlarmState,
  AlarmWidget,
  ComparisonOperator,
  CompositeAlarm,
  Dashboard,
  GraphWidget,
  MathExpression,
  PeriodOverride,
  TreatMissingData,
} from 'aws-cdk-lib/aws-cloudwatch';
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface ObservabilityStackProps extends cdk.StackProps {
  readonly apiHandler: IFunction;
}

export class ObservabilityStack extends cdk.Stack {
  public constructor(scope: Construct, id: string, props: ObservabilityStackProps) {
    super(scope, id, props);

    this.terminationProtection = true;
    new LogGroup(this, 'ApiLogGroup', {
      logGroupName: `/ziva/api/${props.apiHandler.functionName}`,
      retention: RetentionDays.ONE_MONTH,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const alertTopic = new Topic(this, 'AlertTopic', {
      displayName: 'Ziva operational alerts',
    });
    const errors = props.apiHandler.metricErrors({ period: cdk.Duration.minutes(1) });
    const invocations = props.apiHandler.metricInvocations({ period: cdk.Duration.minutes(1) });
    const errorRate = new MathExpression({
      expression: 'IF(invocations > 0, errors * 100 / invocations, 0)',
      usingMetrics: { errors, invocations },
      period: cdk.Duration.minutes(1),
    });

    const errorRateAlarm = new Alarm(this, 'ApiErrorRateAlarm', {
      metric: errorRate,
      threshold: 5,
      evaluationPeriods: 3,
      datapointsToAlarm: 2,
      comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      treatMissingData: TreatMissingData.NOT_BREACHING,
    });
    const durationAlarm = new Alarm(this, 'ApiDurationP99Alarm', {
      metric: props.apiHandler.metricDuration({
        statistic: 'p99',
        period: cdk.Duration.minutes(1),
      }),
      threshold: 3000,
      evaluationPeriods: 3,
      datapointsToAlarm: 2,
      comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      treatMissingData: TreatMissingData.NOT_BREACHING,
    });
    const throttleAlarm = new Alarm(this, 'ApiThrottleAlarm', {
      metric: props.apiHandler.metricThrottles({ period: cdk.Duration.minutes(1) }),
      threshold: 1,
      evaluationPeriods: 3,
      datapointsToAlarm: 2,
      comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      treatMissingData: TreatMissingData.NOT_BREACHING,
    });
    const serviceAlarm = new CompositeAlarm(this, 'ApiServiceAlarm', {
      alarmRule: AlarmRule.anyOf(
        AlarmRule.fromAlarm(errorRateAlarm, AlarmState.ALARM),
        AlarmRule.fromAlarm(durationAlarm, AlarmState.ALARM),
        AlarmRule.fromAlarm(throttleAlarm, AlarmState.ALARM),
      ),
    });
    serviceAlarm.addAlarmAction(new SnsAction(alertTopic));

    const dashboard = new Dashboard(this, 'ApiDashboard', {
      dashboardName: 'ziva-api',
      start: '-PT8H',
      periodOverride: PeriodOverride.INHERIT,
    });
    dashboard.addWidgets(
      new AlarmWidget({ width: 8, height: 6, title: 'API error rate', alarm: errorRateAlarm }),
      new AlarmWidget({ width: 8, height: 6, title: 'API p99 duration', alarm: durationAlarm }),
      new AlarmWidget({ width: 8, height: 6, title: 'API throttles', alarm: throttleAlarm }),
      new GraphWidget({
        width: 24,
        height: 6,
        title: 'API requests and errors',
        left: [invocations],
        right: [errors],
      }),
    );

    new cdk.CfnOutput(this, 'AlertTopicArn', {
      value: alertTopic.topicArn,
      description: 'Subscribe an operations channel to receive Ziva alarms',
    });
    new cdk.CfnOutput(this, 'DashboardName', {
      value: dashboard.dashboardName,
      description: 'CloudWatch dashboard for the Ziva API',
    });
  }
}
