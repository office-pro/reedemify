#!/bin/bash

# Install s3cmd using pip
echo "Installing s3cmd..."
pip install s3cmd

# Verify the installation
if ! command -v s3cmd &> /dev/null; then
    echo "s3cmd installation failed. Please check for errors."
    exit 1
fi

# Determine the directory containing the s3cmd executable
s3cmd_dir=$(dirname $(which s3cmd))

# Check if the s3cmd directory is already in the PATH
if [[ ":$PATH:" != *":$s3cmd_dir:"* ]]; then
    # If not, add it to the PATH
    echo "Adding s3cmd directory to PATH..."
    echo "export PATH=\$PATH:$s3cmd_dir" >> ~/.bashrc
    source ~/.bashrc
    echo "s3cmd directory added to PATH."
else
    echo "s3cmd directory is already in PATH."
fi

# Verify the s3cmd command again
if command -v s3cmd &> /dev/null; then
    echo "s3cmd installed successfully."
    echo "You can now use the 's3cmd' command."
else
    echo "s3cmd installation or PATH configuration encountered issues."
fi
