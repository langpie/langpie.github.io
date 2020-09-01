---
title: Test Camera
---

## Test Camera with OpenCV
- In order to make sure the Official CSI camera has been enabled and it can be
drived by OpenCV library, we need to have a test on it.
1. Enter into virtual environment:
```bash
cd ~/langpie/ 
source bin/activate
vim.tiny camera_test.py
```
2. Create a .py file in virtual environment:
Paste following code into the camera_test.py file.
```python
import cv2 
import numpy as np


cap = cv2.VideoCapture(0)

try:
	while True:
		if cap.isOpen():
			ret, frame = cap.read()
			gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
			if cv2.waitKey(0) == 27 or cv2.waitKey == ord('q'):
				break
			cv2.imshow("frame", frame)
			cv2.imshow("gray_frame", gray_frame)

except KeyboardInterrupt:
	cap.release()
	cv2.destroyAllWindows()
```
3. Run it:
```bash
python camera_test.py
```
you should see a normal image and gray image on your screen.

