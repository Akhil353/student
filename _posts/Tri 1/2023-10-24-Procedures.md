---
toc: false
comments: true
layout: default
title: Developing Procedures Notes
type: tangibles
courses: { timebox: {week: 9} }
---
## Developing Procedures
- Procedures are a named group of code that can return values 
- Also known as methods or functions
- Procedures use the return command to return some output and exit the function
- Procedures help with
  - Shortening repeat code 
  - Making files more readable
- Parts of a function
  - Define the function (def function_name)
  - Add code to the function to perform a task
  - Call the function outside to run the code
- Classes
  - A set outline for functions and variables
  - How to set up:
    - Define the class (class class_name:)
    - Constructor method to make the variables callable in the code
    - Functions that each have specific functions
    - Create an object by calling the class (var = class_name(inputs))
    - To run the functions, use the command var.function_name()

## HW 1
```py
def get_distinct_values(arr):
    distinct_values = []
    for item in arr:
        if item not in distinct_values:
            distinct_values.append(item)
    return distinct_values

# Test the function with the provided array
arr1 = [2,1,3,2,0,2,0,0,4,2,0,0,0,2,0,0,1,2,3,0,7,4,5,2,1,2,3,4,6]
distinct_arr = get_distinct_values(arr1)
print(distinct_arr)
```

## HW 2
```py
class Student:
    def __init__(self, email, name, grade):
        self.email = email
        self.name = name
        self.grade = grade

    def get_email(self):
        return self.email

    def get_name(self):
        return self.name

    def get_grade(self):
        return self.grade

    def set_email(self, email):
        self.email = email

    def set_name(self, name):
        self.name = name

    def set_grade(self, grade):
        self.grade = grade

    def to_string(self):
        return f"My name is {self.name}, my email is {self.email}, and I am in {self.grade} grade."

your_student = Student("akhils25090@stu.powayusd.com", "Akhil Singamneni", "10th")
print(your_student.to_string())
```