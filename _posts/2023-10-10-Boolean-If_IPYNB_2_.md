---
toc: false
comments: true
layout: default
title: Boolean HW
type: hacks
courses: { timebox: {week: 8} }
---

## Popcorn Hack 1
```py
num1 = int(input("Enter Number 1: "))
num2 = int(input("Enter Number 2: "))

if num1 == num2:
    print("Both are equal")
elif num1 > num2:
    print("Number 1 is greater")
else:
    print("Number 2 is greater")

inp1 = input("Enter word 1")
inp2 = input("Enter word 2")

if inp1 > inp2:
    print("Word 2")
elif inp1 < inp2:
    print("Word 1")
else:
    print("Equal")

#Number 2 is greater
#Word 2
```

## Popcorn Hack 2

```py
hungry = bool(input("Hungry or not? [0/1]"))
sad = bool(input("Sad or not? [0/1]"))

if hungry and sad:
    print("Very bad")
else:
   print("ITS POG")

#ITS POG
```

## Popcorn Hack 3
```py
A = False
a = True

if not A: # No equivalent bitwise syntax in python
    print("It's true!")
elif not a and not A:
    print("Its true!")
elif a and not A:
    print("Its true!")
elif not((a and A) or (not A and a)):
    print("Its true!")
else:
    print("Its false")
```


## Popcorn Hack 4
```py
A = False
B = True

if A ^ B: 
    print("It's true!")
elif not A ^ B:
    print("Its false")

A = int(A)
B = int(B)

if A + B == 1:
    print("Its true")
else:
    print("its false")
```


## Homework Hacks

1. There is one more logic gate, known as an XNOR, or exclusive-NOR gate. It is a combination of an XOR and a NOT gate. Create a table like the ones above to demonstrate input and output values of this gate.

- Table for XNOR
  
| A | B | A XNOR B |
|---|---|---------|
| 0 | 0 |    1    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

1. Create python functions for three of the above logic gates. Implement two of them in an interactive program (with input) with a purpose.

2. Bob is grading homework from a peer teaching project. He needs to mark a student's homework as incomplete if they did NOT complete all the problems, OR did NOT submit it on time. Unfortunately, his teammate Cob did not give him any other information, and is now on vacation. Bob needs to do this using only TWO logic gates (don't ask why). Help Bob write a program to grade his class's homework!


```py
isComplete = {'Student 1': 1, 'Student 2': 1, 'Student 3': 0, 'Student 4': 1, 'Student 5': 0, 'Student 6': 1}
isOnTime = {'Student 1': 1, 'Student 2': 0, 'Student 3': 0, 'Student 4': 1, 'Student 5': 1, 'Student 6': 1}
## Program Here
#Code for Bob
values_complete = list(isComplete.values())
values_time = list(isOnTime.values())
students = {'Student 1': '', 'Student 2': '', 'Student 3': '', 'Student 4': '', 'Student 5': '', 'Student 6': ''}

for student in range(len(values_complete)):
    if values_complete[student] and values_time[student]:
        students[student] = 'Complete'
    elif not(values_complete[student] and values_time[student]):
        students[student] = 'Incomplete'


for stu in students:
    print(f"{stu}: {students[stu]}")
    print('\n')

#Interactive code that uses logic gates
def ready_for_school():
    brushed = [True if input("Did you brush your teeth [Y/N]").upper() == "Y" else False][0]
    changed = [True if input("Did you change to school-appropriate clothes [Y/N]").upper() == "Y" else False][0]
    ate = [True if input("Did you eat breakfast [Y/N]").upper() == "Y" else False][0]
    packed = [True if input("Did you pack all your homework and notebooks [Y/N]").upper() == "Y" else False][0]
    time = [True if input("Do you have more than 10 minutes to spare [Y/N]").upper() == "Y" else False][0]
    sick = [True if input("Are you sick? [Y/N]").upper() == "Y" else False][0]
        
    ready = 0

    if (brushed and changed) or ate:
        ready += 1
    else:
        ready -= 1
    
    if not packed:
        ready -= 1
    else:
        ready += 1

    if time and not sick:
        ready += 2
    else:
        if not time:
            ready -= 2
        else:
            print("Don't go to school today!")

    if ready < 0 and not sick:
        print("You'll get to school on time")
    else:
        print("You'll be late to school today")

ready_for_school()
#BOB Code
#Student 1: Complete


#Student 2: Incomplete


#Student 3: Incomplete


#Student 4: Complete


#Student 5: Incomplete


#Student 6: Complete

#Problem 1 Output
#You'll get to school on time
```