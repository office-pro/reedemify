#!/bin/bash

# Navigate to a temporary directory for the installation
cd /tmp

# Download Python 3.9.0 source code
wget https://www.python.org/ftp/python/3.9.0/Python-3.9.0.tgz

# Extract the source code
tar -xf Python-3.9.0.tgz

# Navigate into the Python source code directory
cd Python-3.9.0

# Configure the build (you can customize the configuration if needed)
./configure

# Compile and install Python
make
sudo make install

# Clean up the temporary files
cd ..
rm -rf Python-3.9.0 Python-3.9.0.tgz

# Verify Python installation
python --version
