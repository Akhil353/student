---
toc: false
comments: true
layout: default
title: Libraries Notes
type: tangibles
courses: { timebox: {week: 9} }
---
## Libraries
- A file that contains procedures that can be run
  - Pandas
  - NumPy
  - MatPlotLib
- Use the import statement to import libraries to use
  - Ex: from PIL import Image
- You can use shortened words to represent libraries
  - Ex: import numpy as np
  - To access numpy, you would use np.function()
- Libraries are similar to classes, but not the same

## HW
```py
import numpy as np
import matplotlib.pyplot as plt


angles_degrees = np.linspace(0, 360, 361)  


angles_radians = np.radians(angles_degrees)

sine_values = np.sin(angles_radians)
cosine_values = np.cos(angles_radians)


plt.figure(figsize=(8, 6))
plt.plot(angles_degrees, sine_values, label='Sine', color='blue')
plt.plot(angles_degrees, cosine_values, label='Cosine', color='red')
plt.title('Sine and Cosine Functions')
plt.xlabel('Angle (degrees)')
plt.ylabel('Value')
plt.grid(True)
plt.legend()
plt.show()
```