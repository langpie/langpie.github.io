---
title: virtualenv 
---

## virtualenv installation
- we strongly recommend you to install virtualenv environment to protect your
native python environment.
- Method:
1. Open a terminal and typing following commands:
```bash
sudo apt-get update 
sudo apt-get -y upgrade 
sudo apt-get -y install virtualenv 
sudo apt-get -y install python3-virtualenv
```
- Check it out:
```bash
sudo dpkg -l |grep virtualenv 
```
you will see something like this:
```bash
pi@rpi8g:~ $ dpkg -l |grep virtualenv
ii  python3-virtualenv       15.1.0+ds-2        all          Python virtual environment                 creator
ii  virtualenv               15.1.0+ds-2        all          Python virtual environment                 creator
pi@rpi8g:~ $
```
## Create new virtual environment 
Create a new virtual environment to isolate the host machine from your actual operating environment, 
	   so that even if the python library conflicts, it will not affect the operation of the system. 
```bash
virtualenv -p python3 langpie
cd langpie/
source bin/activate
```
Your prompt will have some changes, you are now enter into a virtual environment
and you can install library by using "pip install packageName".
and if you want to jump out of the virtual environment,you can just typing
"deactivate". 
- Picuture as following:
![Create new virtualenv environment]()
## Install OpenCV
- OpenCV is a free and opensource Computer vision library. We are going to use
it as a CV frame, so that we can let the langpie move around via camera vision.
such as motion detection or following people to walk around, or take a photo
when detect some movments, and so on.
```bash
pip install numpy
pip install opencv-python 
```
- Snapshot:
here is the link.
