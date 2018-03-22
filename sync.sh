#!/usr/bin/env bash
#===============================================================================
#
#          FILE: sync.sh
# 
#         USAGE: ./sync.sh 
# 
#   DESCRIPTION: 
# 
#         NOTES: ---
#        AUTHOR: Hao Fang, hfang@uw.edu
#       CREATED: 03/01/2017 17:19
#      REVISION:  ---
#===============================================================================

set -o nounset                              # Treat unset variables as an error
set -e

lambda_funcname=$1

if [[ -f lambdaFunc.zip ]]; then
  echo "lambdaFunc.zip already exists!"
  exit 1
fi

cd lambdaFunc/
zip -r ../lambdaFunc.zip *
cd ..

# NOTE: aws --version should be aws-cli/1.11.53 
/usr/local/bin/aws lambda update-function-code \
  --function-name ${lambda_funcname} \
  --zip-file fileb://lambdaFunc.zip
