@echo off
echo Installing Python...

REM Specify the Python version you want to install (e.g., Python 3.9)
set PYTHON_VERSION=3.9

REM Specify the installation directory (e.g., C:\Python39)
set PYTHON_INSTALL_DIR=C:\Python%PYTHON_VERSION%

REM Specify the download URL for Python
set PYTHON_DOWNLOAD_URL=https://www.python.org/ftp/python/%PYTHON_VERSION%/python-%PYTHON_VERSION%-amd64.exe

REM Download the Python installer
curl -o python-installer.exe %PYTHON_DOWNLOAD_URL%

REM Install Python
python-installer.exe /quiet InstallAllUsers=1 PrependPath=1 Include_test=0

REM Clean up the installer
del python-installer.exe

echo Python installation complete.


@echo off
echo Installing s3cmd...

REM Install pip if not already installed
python -m ensurepip --default-pip

REM Upgrade pip
python -m pip install --upgrade pip

REM Install s3cmd using pip
pip install s3cmd

echo s3cmd installation complete.