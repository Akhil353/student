---
toc: false
comments: true
layout: default
title: Algorithms Notes
type: tangibles
courses: { timebox: {week: 7} }
---
## What I learned
- Algorithms
  - Algorithms are a way to perform a set of instructions to achieve a task
  - For loop
    - Iterates through every item in a range
    - Ex: for item in list:
  - If statement
    - Used to perform algorithms based off conditions

## HW
- Use an algorithm to print the fibonacci sequence
  - Bonus: Use multiple methods to get the #

```py
#Homework

fibonacci = []
#Create the fibonacci list
user = int(input("Enter how many numbers of the fibonacci sequence you want: "))

#Use iteration to get all numbers of the fibonacci sequence up to a specified upper bound
def fibonacci_iter(num):
    for index in range(0, user + 1):
        if index == 0:
            fibonacci.append(0)
        elif index == 1:
            fibonacci.append(1)
        else:
            fibonacci.append(fibonacci[index-2]+fibonacci[index-1])
    #Set an upper bound for the number value
    user_input = int(input("Input a number you want to set as the highest level: "))
    for num in fibonacci:
        if num < user_input:
            print(num)

#Mathematically determine fibonacci's number at the input num
def get_fibonacci(user):
    print(f"\nThe final number of the fibonacci sequence is around {(1.618**user - (1-1.618) ** user) / 5**1/2}")

#Use recursion to recurse through function until we get the num desired by user :0
def fibonacci_recursive(num):
    if num <= 0:
        return 0
    elif num == 1:
        return 1
    else:
        return fibonacci_recursive(num - 1) + fibonacci_recursive(num - 2)


#Print output by callin da functions
fibonacci_iter(user)
get_fibonacci(user)
fibonacci_recursive(user)
```