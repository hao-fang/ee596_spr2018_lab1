# EE596 Lab 1 -- Build Alexa Skills with the Alexa Skill Kit

## References
* [Quick Start Tutorial](https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial)
* [Alexa Skill Kit Docs](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html)
* [Alexa Skill Kit SDK for NodeJs](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
* [AWS Command Line Interface](https://aws.amazon.com/cli/)

## Task 1: Build a voice experience in 5 minutes
* Follow the [Quick Start Tutorial](https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial) to create a first Alexa Skill.
* In Step 2.4, first click "Switch to old console" to access the interface in the tutorial. 
* You are also welcome to try the beta console.

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
  $ git clone git@github.com:hao-fang/ee596_spr2018_lab1.git
  ```
  * Install Alexa SDK for Node.js, you will see a folder `node_modules` under the lambdaFunc folder
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
* Test your Alexa Skill using both the Service Simulator and study the response JSON object. 

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
* Run sync.sh
```
$ ./sync.sh YOUR_LAMBDA_FUNC_NAME
```
