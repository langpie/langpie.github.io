---
title: preConfig
---

## Pre-Config
- In this section, you are going to pre-set your Raspberry Pi so that it can
work properly.
- Know about Raspi-config tool.
Raspberry pi software configuration tool (raspi-config) allows you to configure
your pi via command line.
- just typing this command in a terminal:
```bash
sudo raspi-config 
```
and then navigate the selection to "Interfacing Options" to enable Camera and
other functions such as "I2C","SPI", "Serial" and so on.

## Install New wiringPi liberary
* The old wiringPi liberary may not work properly.
* Open a terminal and typing this command to remove the old package from
   system, and then download the deb package and install it.
```bash
sudo apt -y purge wiringpi 
sudo hash -r
cd /tmp
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
```

