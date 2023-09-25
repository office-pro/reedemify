# #!/bin/bash

# # Function to install s3cmd
# install_s3cmd() {
#     # Ensure that pip is installed
#     if ! command -v pip &> /dev/null; then
#         echo "pip is not installed. Please install pip before proceeding."
#         exit 1
#     fi

#     # Install s3cmd using pip
#     pip install s3cmd

#     # Verify the installation
#     if command -v s3cmd &> /dev/null; then
#         echo "s3cmd installed successfully."
#     else
#         echo "s3cmd installation failed. Please check for errors."
#     fi
# }

# # Function to add s3cmd to PATH
# add_s3cmd_to_path() {
#     # Locate the s3cmd executable
#     local s3cmd_path
#     s3cmd_path=$(which s3cmd)

#     if [ -n "$s3cmd_path" ]; then
#         # Add s3cmd to PATH
#         export PATH="$PATH:$s3cmd_path"
#         echo "s3cmd added to PATH."
#     else
#         echo "s3cmd executable not found. Please install s3cmd first."
#     fi
# }

# # Install s3cmd
# install_s3cmd

# # Add s3cmd to PATH
# add_s3cmd_to_path


sudo apt-get install s3cmd

s3cmd ls
