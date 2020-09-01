---
title: Installation
---

## Install OS
- 1. Flash your TF card with the latest Raspbian image.
- 2. Pull off the TF card and connect it to you PC via microSD card reader.
- 3. Add new file named "ssh" to your /boot folder on this TF card.
This "ssh" file is to help you enable sshd service so that you can access your Raspberry Pi remotely.

```bash
ssh - secure shell, using TCP protocol and via 22 port to communicate with your terminal.
Terminal - Putty or mobaxterm or secureCRT both are ok for this scenario.
```

- 4. Add new file named "wpa_supplicant.conf" with following parameters inside.

```bash
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=CN

network={
	ssid="YOUR ROUTER'S SSID"
	psk="Your Password"
	key_mgmt=WPA-PSK
}
```

- 5. Insert TF card into your Raspberry Pi card slot and connect the power
   supply(5V@3A at least)
- 6. Waiting for several seconds and then check out the IP address from you
	router's dhcp clients information.

