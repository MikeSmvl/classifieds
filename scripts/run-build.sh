#!/bin/bash

set -ev

npm install
npm install zxcvbn
npm run build
npm run test
#npm run build --report
