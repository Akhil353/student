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
me  = input("What is your name?")
age = 354

print(f"I am {me} and I am {age} years old!!! ☢︎")

I am Akhil and I am 354 years old!!! ☢︎
```

```py
#Popcorn Hack 2
boolean = True
print(type(boolean))
print(type(me))
print(type(age))

<class 'bool'>
<class 'str'>
<class 'int'>
```

```py
#Popcorn Hack 3
def get_z(x, y):
    z = (y + x) / 2
    z = z + (x^2) - (y^2)
    return z

get_z(10,20)

-285
```


```py
#Popcorn Hack 4
my_interests = ['Coding', 'Gaming', 'Piano', 'Reading']
my_interests.append('Exercising')

for interest in my_interests:
    print(interest)

Coding
Gaming
Piano
Reading
Exercising
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

#Create a dictionary of people
people = {}

keep_going = 'Y'
while keep_going == 'Y':
    person = input('Enter person name: ')
    people[person] = int(input('Input person age: '))
    keep_going = input('Add another person [Y/N]? ').upper()

def print_ordered(people):
    names = list(people.keys())
    ages = list(people.values())

    print(f'Ordered names: {[name for name in names.sort()]}')
    print(f'Ordered ages: {[age for age in ages.sort()]}')

#print functions
print_people(people)
print('\n')
print_oldest(people)
print('\n')
print_ordered(people)

Name: Akhil
Age: 15
Name: Advik
Age: 27
Name: Srijan
Age: 18
Name: Aashray
Age: 6

The oldest person is Advik
```

