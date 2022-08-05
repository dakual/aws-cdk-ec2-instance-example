# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template


## EC2 Instance Example in AWS CDK


## Install the AWS CDK globally
```sh
npm install --location=global aws-cdk
```

## Install the AWS CDK executable
```sh
npx cdk init app --language=typescript
```
```sh
cdk --version
```

### create a new directory
```sh
mkdir simple-ec2 && cd simple-ec2
```

### Bootstrap a new cdk project template that uses Typescript
```sh
cdk init --language=typescript
```
> Run npm update to ensure you're using the latest version of the CDK.

```sh
npm install @aws-cdk/aws-ec2 @aws-cdk/aws-iam dotenv
```
### This command will synthesize our stack.
I will be deploying to my default profile which is linked to my personal AWS account with the region us-west-2.

If you have another profile you want to use then in the commands below use that profile name instead of default.
```sh
cdk synth --profile default
cdk synth
cdk synth <cdk-stack-dev> <cdk-stack-prod>
cdk synth --quiet
```

### we need to provision the resources required for deployment. 
```sh
cdk bootstrap
cdk bootstrap --profile my-default

cdk deploy
cdk deploy --profile default
cdk deploy --outputs-file ./cdk-outputs.json
```
### compare deployed stack with current state
```sh
cdk diff
```
```sh
cdk list --long
```
```sh
cdk destroy
cdk destroy <cdk-stack-dev> <cdk-stack-prod>
```
### Accessing the instance
```sh
ssh -i ~/.aws/pems/mykey.pem ec2-user@34.220.79.175
```