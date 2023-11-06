---
toc: false
comments: true
layout: default
title: Data Abstraction Notes
type: tangibles
courses: { timebox: {week: 7} }
---
## What I learned
- Data Abstraction
  - Variables: Key Words used to assign values to a certain key
  - Types of Variables: String, Integer, Float, Boolean, Array (Use type() function to get the type of a variable)
  - Mathematical Functions: Can be used for integers, floats, strings, and sometimes arrays too!
  - Variables can be used to define other variables
  - Lists can have multiple positions, each seperated by a ','
  - Use square brackets to get an index (Index starts at 0)
  - Classes
    - Classes are essentially a group of functions that are callable

## HW
- Create a class called Person
  - Create functions for the class to print all people/the oldest person
- Print the type of a variable
- Compare variables to values

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

#Add as many ppl as you want
keep_going = 'Y'
while keep_going == 'Y':
    person = input('Enter person name: ')
    people[person] = int(input('Input person age: '))
    keep_going = input('Add another person [Y/N]? ').upper()

#print the order of dictionary based on both age and alphabetical order
def print_ordered(people):
    names = list(people.keys())
    ages = list(people.values())
    names.sort()
    ages.sort()

    print(f'Ordered names list: {names}')
    print(f'Ordered ages list: {ages}')


#Menu to choose what output you want
while True:
    choice = input("Choose an option:\n1. Print info on everyone\n2. Find oldest person\n3. Order info on everyone into names and ages\n4. Exit\n")
    
    if choice == '1':
        print_people(people)
    elif choice == '2':
        print_oldest(people)
    elif choice == '3':
        print_ordered(people)
    else:
        break
```