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
#assign variable "names" to an empty list
names = []

#Add three input names to the names list
for i in range(3):
    names.append(input(f"Add Name {i+1}: "))

#Sorting names based on length
names.sort(key=lambda x: len(x))

#Iterating through names and printing in order of length
print("Names in order of length: ")
for name in names:
    print(name)
```
