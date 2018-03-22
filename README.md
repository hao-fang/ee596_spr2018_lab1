# EE596 Lab 1 -- Build Alexa Skills with the Alexa Skill Kit

## Readings
* [Quick Start Tutorial](https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial)
* [Alexa Skill Kit Docs](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html)
* [Alexa Skill Kit SDK for NodeJs](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
* (Optional) [AWS Command Line Interface](https://aws.amazon.com/cli/)

## Task 1: Build a voice experience in 5 minutes
* Follow the [Quick Start Tutorial](https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial) to create a first Alexa Skill.

## Task 2: A different way to deploy the AWS Lambda function
* Create another Alexa Lambda function. This time, do not choose pre-defined blueprint.
* Clone the repository
```
$ git clone git@github.com:hao-fang/ee596_spr2018_lab1.git
```
* Update the Intent Schema using `speechAssets/IntentSchema.json` in your Amazon Developer Console.
* Upload the zip file to your Lambda Function.


## Task 3: (Optional) Deploy the AWS Lambda function using command-line

### Requirements:
* Python
* [virtualenv](https://virtualenv.pypa.io/en/stable/)

### Systems:
* Linux
* MacOS
* [UW EE Linux Lab systems](https://www2.ee.washington.edu/computing/faq/labs/linuxlab.html)
* Windows 10 WSL (**W**indows **S**ubsystem for **L**inux)

### Steps
* Create a virtualenv.
```
$ virtualenv ee596
$ source ee596/bin/activate
```
* Install [AWS-CLI](https://aws.amazon.com/cli/).
```
(ee596)
$ pip install awscli
$ aws --version
aws-cli/1.11.53 Python/2.7.6 Linux/3.13.0-105-generic botocore/1.5.16
```
* Setup your AWS credential `~/.aws/config`.
* Run sync.sh
```
$ ./sync.sh YOUR_LAMBDA_FUNC_NAME
```
