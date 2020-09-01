---
title: preConfig
---

## Know about the Pi hardware
- Following Picture shows the label of the conponent.
![Pi-label](https://raw.githubusercontent.com/langpie/langpie.github.io/sources/docs/software/imgs/pi-labelled.png)

## Assemble Pi 
- Connect the HDMI cable, ethernet cable[optional], USB keyboard, USB mouse, CSI
camera and power supply.
![Assemble pi](https://raw.githubusercontent.com/langpie/langpie.github.io/sources/docs/software/imgs/pi-plug-in.gif)

## Pi desktop
- This is the desktop of the pi if booting normal.
![desktop](https://raw.githubusercontent.com/langpie/langpie.github.io/sources/docs/software/imgs/pi-desktop.png)

## Initialized System
- At first booting up, the system will ask you to setting up the region, keymap,
	and wifi-country and so on.
![Piwizard](https://raw.githubusercontent.com/langpie/langpie.github.io/sources/docs/software/imgs/piwiz.gif)

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
![raspi-config](https://raw.githubusercontent.com/langpie/langpie.github.io/sources/docs/software/imgs/raspiconfig.jpg)

## Install New wiringPi library
* The old wiringPi library may not work properly.
* Open a terminal and typing this command to remove the old package from
   system, and then download the deb package and install it.
```bash
sudo apt -y purge wiringpi 
sudo hash -r
cd /tmp
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
```
- Check it out:
```bash
gpio -v 
gpio readall
```
If you see this picture means that you have already finished the wiringPi
library's installation.
![raspi-config](https://raw.githubusercontent.com/langpie/langpie.github.io/sources/docs/software/imgs/gpio.jpg)
