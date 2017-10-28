#!/bin/bash

set -ev

npm install
npm run build
npm run test
#npm run build --report
