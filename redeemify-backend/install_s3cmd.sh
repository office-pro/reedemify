#!/bin/bash

# Ensure that pip is installed
if ! command -v pip &> /dev/null; then
  echo "pip is not installed. Please install pip before proceeding."
  exit 1
fi

# Install s3cmd using pip
pip install s3cmd

# Verify the installation
if command -v s3cmd &> /dev/null; then
  echo "s3cmd installed successfully."
else
  echo "s3cmd installation failed. Please check for errors."
fi