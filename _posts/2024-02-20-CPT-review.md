---
toc: False
comments: true
layout: default 
title: CSP Final / CPT Review
type: tangibles
courses: {'timebox': {'week': 23}}
---
## My Feature:
Allowing for users to edit database by creating a database to recieve messages and likes.

# Part A:

## CPT Correlation
| CPT Requirements | My Project |
|------------------|------------------|
| Instructions for input from one of the following: the user, a device, an online data stream, a file | Our project takes input from the user in the format of a message. |
| Use of at least one list (or other collection type) to represent a collection of data that is stored and used to manage program complexity and help fulfill the users purpose. | The messages database used to store messages is an example of collection of data because any new messages are immediately stored on the backend database. This fulfills the purpose of our program as we can use the data from the database to display all the messages that have ever been sent. |
| At least one procedure that contirubted to the program’s intened purpose where you have defined: the name, return type, one or more parameters: | This code has a name (post), a return (the message itself), and parameters such as the message text and uid: ![Image 1](/vscode/student/images/cpt-final-1.png) |
| An algorithm that includes sequencing, selection, and iteration that is in the body of the selected procedure | Function to sequence/select data from database and iterate through it: ![Image 2](/vscode/student/images/cpt-final-2.png) |
| Calls to your student-developed prodcedure: | Calling the function code from above in the read method of CRUD: ![Image 3](/vscode/student/images/cpt-final-3.png) |
| Instructions for output (tactile, audible, visual) based on input and program functionality | Uses read method to get all messages and display messages onto front page for user to see![Image 4](/vscode/student/images/cpt-final-4.png) |

