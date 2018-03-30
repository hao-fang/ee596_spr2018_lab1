# EE596 Lab 1 -- Build Alexa Skills with the Alexa Skill Kit

Course Webpage: [EE596 -- Conversational Artificial Intelligence](https://hao-fang.github.io/ee596_spr2018/)

## Task 1: Build a voice experience in 5 minutes
* Follow the [Quick Start Tutorial](https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial) to create a first Alexa Skill.
* NOTE: The instruction uses the old Amazon Developer Console. Starting from March 27th, 2018, the old console is no longer available.
* For step 2.4--2.14, please configure the skill using the new developer console.

## Task 2: Create AWS Lambda function from scratch
* This time we will use the [Alexa Skills Kit SDK for Node.js](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
* Create another Alexa Lambda function. This time please choose "Author from scratch".
  * Runtime: Nodejs 6.10 (default)
  * Role: you can use the previously created role, or you can create a new role as you did in Step 2.10 in the [Quick Start Tutorial](https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial)
  * Click "Next"
* Configuration
  * Add triggers under the "Designer": choose "Alexa Skill Kit"
  * Configure triggers: enter your skill ID (check "Skill Information" page in your Amazon Developer account) and click "Add"
  * Click "Save" 
* Go back to your Lambda dashboard and re-enter the Lambda function
  * You will see a "Function code" section, where you can directly edit your codes.
  * We will upload a .ZIP file instead.
* On your laptop
  * Clone the repository
  ```
  $ git clone https://github.com/hao-fang/ee596_spr2018_lab1.git
  ```
  * Install Alexa SDK for Node.js. You will see a folder `node_modules` under the lambdaFunc folder. (You need to make sure [npm](https://www.npmjs.com/) is installed on your computer.
  ```
  $ cd lambdaFunc
  $ npm install --save alexa-sdk
  ```
  * Edit the lambdaFunc/index.js file following the "Getting Started" section in [Alexa Skills Kit SDK for Node.js](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
  * Zip the lambdaFunc folder
  ```
  $ cd lambdaFunc
  $ zip -r ../lambdaFunc.zip *
  ```
* Upload the zip file to your Lambda Function.
* If you want to change the Interaction Model, you can edit files under the folder `interactionModel` and paste them to the Developer Console.
* Test your Alexa Skill using the Alexa Simulator in your Developer Console and study the JSON input and output objects.

## Task 3: (Optional) Deploy the AWS Lambda function using command-line

### Requirements:
* Python
* [virtualenv](https://virtualenv.pypa.io/en/stable/)

### Systems:
* Linux
* MacOS
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
  * [Manage Access Keys for your AWS Account](https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html)
  * [Configuration and Credential Files](https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html)
* Run sync.sh
```
$ ./sync.sh YOUR_LAMBDA_FUNC_NAME
```

## Lab Report
* Upload your `ee596_spr2018_lab1` repository for Task 2.
* Study the JSON input and JSON output in Alexa Simulator in the Developer Console. Describe individual fields in these JSON objects.
* Compare the different ways to create and deploy the Lambda function.
* Discuss findings and issues.

## References
* [Quick Start Tutorial](https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial)
* [Alexa Skill Kit Docs](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html)
* [Alexa Skill Kit SDK for NodeJs](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
* [AWS Command Line Interface](https://aws.amazon.com/cli/)
* [AWS Command Line Interface Docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
* [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)
