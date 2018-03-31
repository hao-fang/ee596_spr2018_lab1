# EE596 Lab 1 -- Build Alexa Skills with the Alexa Skill Kit

Course Webpage: [EE596 -- Conversational Artificial Intelligence](https://hao-fang.github.io/ee596_spr2018/)

## Task 1: Build your first Alexa Skill
* Please follow the [walkthrough](https://hao-fang.github.io/ee596_spr2018/slides/lab_1-walkthrough.pdf).

## Task 2: Create an AWS Lambda function from scratch
### Requirements:
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

### Steps:
* This time we will use the [Alexa Skills Kit SDK for Node.js](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
  * We will still use the same Alexa Skill you created for `Color Picker`.
* Create another Alexa Lambda function. This time please choose "Author from scratch".
  * Name: ee596_spr2018_lab1
  * Runtime: Nodejs 6.10 (default)
  * Role: you can use the previously created role, or you can create a new role as you did in Step 2.10 in the [walkthrough](https://hao-fang.github.io/ee596_spr2018/slides/lab_1-walkthrough.pdf).
  * Click "Create function"
* Configuration
  * Add triggers under the "Designer": choose "Alexa Skill Kit"
  * Configure triggers: enter your skill ID (check "End Point" page in your Amazon Developer account) and click "Add"
  * Click "Save" 
* You will see a "Function code" section, where you can directly edit your codes.
  * We will upload a .ZIP file instead.
* On your laptop
  * Clone the repository
  ```
  $ git clone https://github.com/hao-fang/ee596_spr2018_lab1.git
  ```
  * Install Alexa SDK for Node.js. You will see a folder `node_modules` under the lambdaFunc folder.
  ```
  $ cd lambdaFunc
  $ npm install --save alexa-sdk
  ```
  * Edit the `lambdaFunc/index.js` file, replace the `APP_ID` in line 8 with your Skill ID. See Step 2.22 in the [walkthrough](https://hao-fang.github.io/ee596_spr2018/slides/lab_1-walkthrough.pdf).
  * Zip the `lambdaFunc` folder
  ```
  $ cd lambdaFunc
  $ zip -r ../lambdaFunc.zip *
  ```
* Upload the zip file to your Lambda Function.
  * Look for `Function code` section. Use the drop-down menu `Code entry type`.
  * Choose `Upload a ZIP file`.
  * Click `Save` at the top-right corner.
* Change your Alexa Skill's Endpoint ARN to this new Lambda Function.
	* See Step 1.13 and Step 2.21 in the [walkthrough](https://hao-fang.github.io/ee596_spr2018/slides/lab_1-walkthrough.pdf).
* Repeat Step 3 in the [walkthrough](https://hao-fang.github.io/ee596_spr2018/slides/lab_1-walkthrough.pdf).


## Task 3: (Optional) Deploy the AWS Lambda function using command-line

### Requirements:
* [Python](https://www.python.org/)
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

## Lab Checkoff
* Task 1:
  * Illustrate the sample dialog of Step 3.3 in the [walkthrough](https://hao-fang.github.io/ee596_spr2018/slides/lab_1-walkthrough.pdf).
  * In Step 3.4 of in the [walkthrough](https://hao-fang.github.io/ee596_spr2018/slides/lab_1-walkthrough.pdf), what is the detected intent when you say `how are you`?
  * Do you know when you are talking to your bot vs. Alexa?
* Task 2:
  * Show the configuration of your Alexa Skill Endpoint and the Lambda function `ee596_spr2018_lab1`.
  * Repeat the sample dialog as you have done in Task 1.
* Task 3 (Optional):
  * Show the output of your sync.sh command.

## Lab Report
* Please attach the JSON object of your Interaction Model definition. See Step
  2.19 in the [walkthrough](https://hao-fang.github.io/ee596_spr2018/slides/lab_1-walkthrough.pdf). 
  Describe individual fields in the JSON object.
* Please attach the JSON input and output in Alexa Simulator in the Developer
  Console. See Step 3.4 in the [walkthrough](https://hao-fang.github.io/ee596_spr2018/slides/lab_1-walkthrough.pdf).
  Describe individual fields in these JSON objects.
* Find the functions in the Python codes `lambda_function.py` in Task 1 that
  correspond the following handlers in NodeJS codes `lambdaFunc/index.js` in Task 2.
    * NewSession
    * LaunchRequest
    * SessionEndedRequest
    * MyColorIsIntent
    * WhatsMyColorIntent
    * AMAZON.HelpIntent
    * AMAZON.CancelIntent
    * AMAZON.StopIntent
    * Unhandled
* Discuss other findings and issues.

## References
* [Alexa Skill Kit Docs](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html)
* [Alexa Skill Kit SDK for NodeJs](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
* [AWS Command Line Interface](https://aws.amazon.com/cli/)
* [AWS Command Line Interface Docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
* [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)
