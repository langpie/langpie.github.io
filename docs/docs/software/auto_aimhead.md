---
title: Auto aim head 
---

## Environment
You need to build an OpenCV virutal Environment for this demo code.
```bash 
sudo apt-get update 
sudo apt-get -y install virualenv 
virtualenv -p python3 venv
cd ~/venv/
source bin/activate
```
## Demo code 
```python
import cv2
import numpy as np
import dlib


cap = cv2.VideoCapture(0)

resolution = cap.set(3, 320)
resolution = cap.set(4, 240)
print("width={}".format(cap.get(3)))
print("Height={}".format(cap.get(4)))

detector = dlib.get_frontal_face_detector()
predict_dataset = "/home/pi/venv/OpenCV-dlib/shape_predictor_68_face_landmarks.dat"

try: 
    while True:
        ret, frame = cap.read()
        if ret:
            # gray_img = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            b, g, r = cv2.split(frame)
            img = cv2.merge([r,g,b])
            detector = dlib.get_frontal_face_detector()
            detector_number = detector(img, 1)
            print("Number of faces detected:{}".format(len(detector_number)))
            for index, face in enumerate(detector_number):
                print("face{}; left{}; top:{}; right:{}; bottom:{}".format(index, face.left(), face.top(), face.right(), face.bottom()))
                left = face.left()
                top = face.top()
                right = face.right()
                bottom = face.bottom()
                cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 3)
                # cv2.line(frame, (int((right+left)/2),int(top/2)), (int((right+left)/2),int(bottom/2)), (0,0,255), 2, 4)
                cv2.drawMarker(frame, (int((right+left)/2), int((bottom-top)/2)),(0,0,255), cv2.MARKER_CROSS, 20, 1, 8)
                cv2.imshow("window", frame)

            key = cv2.waitKey(1)
            if key == 27 or key == ord('q'):
                break
except KeyboardInterrupt:
    cap.release()
    cv2.destoryAllWindows()
```
## Save it and run it.
```bash
python auto_aim_head.py
```
## Demo Result
![auto_aim_head]()
