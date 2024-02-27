---
toc: False
comments: true
layout: default 
title: CSP Final / CPT Review
type: tangibles
courses: {'timebox': {'week': 23}}
---
## Project
Our group created a chatting page. Because of the growth in the amount of people who have electronic devices, messaging platforms have become a necessity, so we decided to provide others with a messaging platforms where you can see what other users have sent.

## My Feature:
Allowing for users to edit database by creating a database to recieve messages and likes.

# Part A:

## CPT Correlation

| CPT Requirements | My Project |
|------------------|------------------|
| Instructions for input from one of the following: the user, a device, an online data stream, a file | Our project takes input from the user in the format of a message. |
| Use of at least one list (or other collection type) to represent a collection of data that is stored and used to manage program complexity and help fulfill the users purpose. | The messages database used to store messages is an example of collection of data because any new messages are immediately stored on the backend database. This fulfills the purpose of our program as we can use the data from the database to display all the messages that have ever been sent. |
| At least one procedure that contirubted to the program’s intened purpose where you have defined: the name, return type, one or more parameters: | This code has a name (post), a return (the message itself), and parameters such as the message text and uid: ![Image 1](/student/images/cpt-final-1.png) |
| An algorithm that includes sequencing, selection, and iteration that is in the body of the selected procedure | Function to sequence/select data from database and iterate through it: ![Image 2](/student/images/cpt-final-2.png) |
| Calls to your student-developed prodcedure: | Calling the function code from above in the read method of CRUD: ![Image 3](/student/images/cpt-final-3.png) |
| Instructions for output (tactile, audible, visual) based on input and program functionality | Uses read method to get all messages and display messages onto front page for user to see![Image 4](/student/images/cpt-final-4.png) |

## Part B: Video
[Video](https://drive.google.com/file/d/1kFGzLO6gLRhiHDb6hm57EX7dUyWYtk6t/view?usp=sharing)


| Collegboard Requirements | Video |
|------------------|------------------|
| Input to program  | Sending a message using a text box (Shown in video)  |
| At least one aspect of the functionality of your program | The messages page that shows all the messages that have been sent so far  |
| Output produced by program:  | After the message is sent, it is automatically added to both the database and the messages page |
| My video does not have: | personal information or audio  |
| My video is | a .webmb, less than 1 minute in length, less than 30MB in file size.  |