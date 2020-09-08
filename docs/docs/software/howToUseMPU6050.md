---
title: MPU6050 
---
## Concept 
This is the demo code for using MPU6050 on Raspberry Pi. The specific wiring steps and the part of enabling I2C will be organized into the chapter of primary use.
The gyroscope has many functions. We can use the gyroscope to obtain the running posture of the car, the forward direction and acceleration, including the moving speed.
## Demo Code
```python
#!/usr/bin/env python
import smbus
import math

# Register
power_mgmt_1 = 0x6b
power_mgmt_2 = 0x6c

def read_byte(reg):
    return bus.read_byte_data(address, reg)

def read_word(reg):
    h = bus.read_byte_data(address, reg)
    l = bus.read_byte_data(address, reg+1)
    value = (h << 8) + l
    return value

def read_word_2c(reg):
    val = read_word(reg)
    if (val >= 0x8000):
        return -((65535 - val) +1)
    else:
        return val

def dist(a,b):
    return math.sqrt((a*a)+(b*b))

def get_y_rotation(x,y,z):
    radians = math.atan2(x, dist(y,z))
    return -math.degrees(radians)

def get_x_rotation(x,y,z):
    radians = math.atan2(y, dist(x,z))
    return math.degrees(radians)

bus = smbus.SMBus(1)
address = 0x68

bus.write_byte_data(address, power_mgmt_1, 0)

print("GYROSKOP")
print("-"*30)

gyroskop_xout = read_word_2c(0x43)
gyroskop_yout = read_word_2c(0x45)
gyroskop_zout = read_word_2c(0x47)

print "gyroskop_xout: ",("%5d" % gyroskop_xout), " skaliert: ", (gyroskop_xout /131)
print "gyroskop_yout: ",("%5d" % gyroskop_yout), " skaliert: ", (gyroskop_yout /131)
print "gyroskop_zout: ",("%5d" % gyroskop_zout), " skaliert: ", (gyroskop_zout /131)

print("#"*30)
print("Baschleunigungssensor")
print("-"*30)

bes_xout = read_word_2c(0x3b)
bes_yout = read_word_2c(0x3d)
bes_zout = read_word_2c(0x3f)

bes_xout_ska = bes_xout / 16384.0
bes_yout_ska = bes_yout / 16384.0
bes_zout_ska = bes_zout / 16384.0

print "beschleunigung_xout: ",("%6d" % bes_xout)," skaliert: ", bes_xout_ska
print "beschleunigung_yout: ",("%6d" % bes_yout)," skaliert: ", bes_yout_ska
print "beschleunigung_zout: ",("%6d" % bes_zout)," skaliert: ", bes_zout_ska

print "X Rotation: ", get_x_rotation(bes_xout_ska, bes_yout_ska, bes_zout_ska)
print "Y Rotation: ", get_y_rotation(bes_xout_ska, bes_yout_ska, bes_zout_ska)
```
## Run & test it.
```bash
python mpu6050_test.py 
```
## Done.
