---
title: Object Detection
---
## Following demo code is an example for CV2 user to try some object-detection experiment on Raspberry Pi.
### Create a new file and copy & paste it.
```python
import cv2
import numpy as np

cap = cv2.VideoCapture(0)
es = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 4))
kernel = np.ones((5, 5), np.uint8)
background = None

try:
    while True:
        ret, frame = cap.read()
        if background is None:
            background = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            background = cv2.GaussianBlur(background, (21, 21), 0)
            continue
        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        gray_frame = cv2.GaussianBlur(gray_frame, (21, 21), 0)

        diff = cv2.absdiff(background, gray_frame)
        diff = cv2.threshold(diff, 25, 255, cv2.THRESH_BINARY)[1]
        diff = cv2.dilate(diff, es, iterations=2)

        contours, _ = cv2.findContours(diff.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        freq = cv2.getTickFrequency() / 1000

        for c in contours:
            if cv2.contourArea(c) < 1500:
                continue

            (x, y, w, h) = cv2.boundingRect(c)
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
            cv2.putText(frame, "X:%d,Y:%d" %(x, y), (x, y), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 1, cv2.LINE_AA)

        cv2.imshow("contours", frame)
        cv2.imshow("Diff", diff)

        if cv2.waitKey(1) & 0xff == ord('q'):
            break
except KeyboardInterrupt:
    print("暴力终止")
finally:
    cap.release()
    cv2.destroyAllWindows()
```
## Run and test.
```bash
python object_detection.py
```
## Done
