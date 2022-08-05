import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as SimpleEc2 from '../lib/simple-ec2-stack';


// example test. To run these tests
// example resource in lib/simple-ec2-stack.ts
test('Check InstanceType and SSH KeyName', () => {
  const app   = new cdk.App();
  const stack = new SimpleEc2.SimpleEc2Stack(app, 'MyTestStack');

  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::EC2::Instance', {
    InstanceType: 't2.micro',
    KeyName: 'mykey'
  });

});

