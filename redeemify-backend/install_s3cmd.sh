#!/bin/bash

# Ensure that curl is installed
if ! command -v curl &> /dev/null; then
  echo "curl is not installed. Please install curl before proceeding."
  exit 1
fi

# Download the s3cmd installer script
curl -Lo /tmp/s3cmd_installer.sh https://github.com/s3tools/s3cmd/raw/master/S3Cmd.install

# Make the installer script executable
chmod +x /tmp/s3cmd_installer.sh

# Run the installer script with the --force option to automatically install s3cmd
/tmp/s3cmd_installer.sh --force

# Clean up the temporary installer script
rm /tmp/s3cmd_installer.sh

# Verify s3cmd installation
s3cmd --version
