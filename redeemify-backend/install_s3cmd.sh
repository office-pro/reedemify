#!/bin/bash

# Ensure that pip is installed
if ! command -v pip &> /dev/null; then
  echo "pip is not installed. Please install pip before proceeding."
  exit 1
fi

# Install s3cmd using pip
pip install s3cmd

# Verify the installation
s3cmd --version
