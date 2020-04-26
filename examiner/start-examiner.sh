#!/bin/bash

NODE_PATH=/opt/gateway/node_modules
export NODE_PATH

exec node /home/eduk8s/examiner/examiner.js
