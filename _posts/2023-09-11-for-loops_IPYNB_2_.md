---
toc: True
comments: False
layout: default
title: For Loops
type: hacks
courses: {'timebox': {'week': 4}}
---

## Creating a list based off input and sorting the list based on name length

```py
names = []

for i in range(3):
    names.append(input(f"Add Name {i+1}: "))
names.sort(key=lambda x: len(x))

print("Names in order of length: ")
for name in names:
    print(name)
```
