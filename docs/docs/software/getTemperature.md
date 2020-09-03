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
	float systemp, millideg;
	FILE *thermal;
	int n;

	thermal = fopen("/sys/class/thermal/thermal_zone0/temp","r");
	n = fscanf(thermal,"%f",&milldeg);
	fclose(thermal);
	systemp = millideg / 1000;

	printf("CPU temperature is %f degrees C\n",systemp);
	return 0;
}
```
2.Compile it and run it.
```bash
gcc -o mytemp  mytemp.c
./mytemp
```
## Check Disk Usage
```bash
df -Th 
```

