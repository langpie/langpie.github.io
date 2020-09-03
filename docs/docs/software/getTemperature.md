---
title: Get CPU Temperature
---

## Get CPU Temperature
* CPU thermal configuration file: 
```bash 
/sys/class/thermal/thermal_zone0/temp
```
## Read temerature in C.
1.Create a new file named "mytemp.c", and paste following demo code.
```bash
#include<stdio.h>
#include<string.h>

int main(void)
{
	float systemp, milideg;
	FILE fd;
	thermal = fopen("/sys/class/thermal/thermal_zone0/temp", "r");
	n = fscanf(fd, "%f", &milideg);
	realtemp = milideg / 1000;
	printf("CPU temp: %f", realtemp);
	return 0;
}
```
2.Compile it and run it.
```bash
gcc -o mytemp  mytemp.c
./mytemp
```
## Have fun.
