---
toc: True
comments: False
layout: default
title: TBD
description: TBD
type: hacks
courses: {'timebox': {'week': 3}}
---

```python
import numpy as np
import pandas as pd
def titanic():
    #all the relevant variables for the survival rate of people on the titanic
    pclass = int(input("Ticket Class (1: 1st, 2: 2nd, 3: 3rd): "))
    sex = input("Male or Female: ").lower()
    age = int(input("Age: "))
    sibsp = int(input("Number of Siblings/Spouses aboard the Titanic: "))
    parch = int(input("Number of Parents/Children aboard the Titanic: "))
    fare = int(input("Passengar Fare: "))
    cabin = int(input("Cabin Number: "))

    #put all data into one array
    info = [pclass, sex, age, sibsp, parch, fare, cabin]

```