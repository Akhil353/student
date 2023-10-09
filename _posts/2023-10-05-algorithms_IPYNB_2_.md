---
toc: false
comments: true
layout: post
title: Student teaching
description: Student teaching
type: plans
courses: { compsci: {week: 2} }
---



```py
#Popcorn hack #1
y_values = []
for x in range(0,11):
    y_values.append(3*(x+2)-4)
for y in y_values:
    print(y)

#2
#5
#8
#11
#14
#17
#20
#23
#26
#29
#32
```



```py
#Popcorn hack 2
num1 = 20
num2 = num1 /2 
num3 = num2 * 10 + 3
print(num3)

#Thought process

#20/2 = 10
# 10 * 10 + 3 = 103

#Output: 103
```


```py
#Popcorn hack 3
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

print(f"{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} * {num2} = {num1 * num2}")
print(f"{num1} * {num2} % {num2} + {num1} // {num2} ** {num1} - {num1} = {num1 * num2 % num2 + num1 // num2 ** num1 - num1}")

#Enter the first number: 55
#Enter the second number: 38

#55 + 38 = 93
#55 - 38 = 17
#55 * 38 = 2090
#55 * 38 % 38 + 55 // 38 ** 55 - 55 = -55
```


```py
#Popcorn hack #4

#Find the number of characters in your last name using len.
length = len("Bharadwaj")
print(length)


# Use concat to merge your first and last name together.
concat = "Aditi" + "Bharadwaj"
print(concat)


# Use Substring to show only the 3rd to 6th characters.
# be sure to start at 2 because it starts counting at 0
substring = concat[2:6]
print(substring)

print("Number of letters in my last name: " + str(len("Singamneni")))
concat2 = "Akhil" + "Singamneni"
sub = concat2[2:6]
print(concat2)
print(sub)

#9
#AditiBharadwaj
#itiB
#Number of letters in my last name: 10
#AkhilSingamneni
#hilS
```

```py
#Robot movement code

#MOVE_FORWARD()
#MOVE_FORWARD()
#MOVE_FORWARD()

#ROTATE_LEFT()

#MOVE_FORWARD()
#MOVE_FORWARD()

#ROTATE_RIGHT()

#MOVE_FORWARD()
#MOVE_FORWARD()
#MOVE_FORWARD()
```


```py
#Homework

fibonacci = []
#Create the fibonacci list
for index in range(0,int(input("Enter how many numbers of the fibonacci sequence you want: ")) + 1):
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
    
```