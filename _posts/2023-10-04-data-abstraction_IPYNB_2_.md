---
toc: True
comments: False
layout: default
title: Data Abstraction
description: Popcorn Hacks + HW on Data Abstraction
type: hacks
courses: {'timebox': {'week': 7}}
---

```py
#Popcorn Hack 1
me  = 'Akhil'
age = 354

print(f"I am {me} and I am {age} years old!!! ☢︎")

#I am Akhil and I am 354 years old!!! ☢︎
```

```py
#Popcorn Hack 2
boolean = True
print(type(boolean))
print(type(me))
print(type(age))

#<class 'bool'>
#<class 'str'>
#<class 'int'>
```

```py
#Popcorn Hack 3
def get_z(x, y):
    z = (y + x) / 2
    z = z + (x^2) - (y^2)
    return z

get_z(10,20)

#-285
```


```py
#Popcorn Hack 4
my_interests = ['Coding', 'Gaming', 'Piano', 'Reading']
my_interests.append('Exercising')

for interest in my_interests:
    print(interest)

#Coding
#Gaming
#Piano
#Reading
#Exercising
```

```py
# Homework

#Create class called person
class person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

#Get a list of people and print the info of each person
def print_people(list_of_people):
    for person in list_of_people:
        print(f"Name: {person}\nAge: {list_of_people[person]}")

#Get the oldest person
def print_oldest(list_of_people):
    x = list(list_of_people.values())
    x = x.index(max(x))
    print(f"The oldest person is {list(list_of_people.keys())[x]}.")

#Create a list of people
people = {
    "Akhil": 15,
    "Advik": 27,
    "Srijan": 18,
    "Aashray": 6
}

#print functions
print_people(people)
print('\n')
print_oldest(people)

#Name: John
#Age: 32
#Name: Rob
#Age: 23
#Name: Amanda
#Age: 19

#The oldest person is John
```

