#!/usr/bin/env node
// import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SimpleEc2Stack } from '../lib/simple-ec2-stack';


const app = new cdk.App();
new SimpleEc2Stack(app, 'SimpleEc2Stack', {
  stackName: 'cdk-stack-dev',
  description: 'This is a simple EC2 stack',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});