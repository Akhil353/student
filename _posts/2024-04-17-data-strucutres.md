---
toc: False
comments: True
layout: post 
title: Data Structures
type: tangibles
courses: {'timebox': {'week': 30}}
---
# Data Structures Write Up

***

## Blog Python Model code and SQLite Database.
- From VSCode using SQLite3 Editor, show your unique collection/table in database, display rows and columns in the table of the SQLite database.
  - ![Image 1](/student/images/data-2.png)
    - There are multiple rows for each entry, and each column is a different data point (name, uid, join date, etc.). First 4 entries are preset by DB, and the others are added users
- From VSCode model, show your unique code that was created to initialize table and create test data.
  - ![Image 2](/student/images/data-1.png)
    - Adds test information to the database to make sure the main file has run properly. The users added can be seen in the first 4 rows of the DB

***

## Lists and Dictionaries
- In VSCode using Debugger, show a list as extracted from database as Python objects.
  - ![Image 20](/student/images/data-20.png)
    - Shows all the messages using the GET function as a dictionary (date added, likes, message body, etc.)
- In VSCode use Debugger and list, show two distinct example examples of dictionaries, show Keys/Values using debugger.
  - ![Image 21](/student/images/data-21.png)
  - ![Image 22](/student/images/data-22.png)
    - Shows the information from the GET function as dictionaries in a big list

***

## Blog Python API code and use of Postman to request and respond with JSON.
- In VSCode, show Python API code definition for request and response using GET, POST, UPDATE methods. Discuss algorithmic condition used to direct request to appropriate Python method based on request method.
  - ![Image 3](/student/images/data-3.png)
    - Shows POST, GET, and PUT functions in the python API file. POST function adds info, GET function returns info from DB, PUT function updates existing data
- In VSCode, show algorithmic conditions used to validate data on a POST condition.
  - ![Image 4](/student/images/data-4.png)
    - Uses an algorithmic condition (if message content not missing) to check if data was sent, else return 400 error
- In Postman, show URL request and Body requirements for GET, POST, and UPDATE methods.
  - ![Image 5](/student/images/data-5.png)
    - Message, likes, and cookies required for POST request
  - ![Image 11](/student/images/data-11.png)
    - Cookies required for GET request
  - ![Image 12](/student/images/data-12.png)
    - Message required for update method so the original message can be found
- In Postman, show the JSON response data for 200 success conditions on GET, POST, and UPDATE methods.
  - ![Image 6](/student/images/data-6.png)
    - New message from POST function is returned to display on frontend as a new message
  - ![Image 9](/student/images/data-9.png)
    - All messages are returned to display in the messages page on frontend
  - ![Image 10](/student/images/data-10.png)
    - The new value of the changed object is returned to update the display
- In Postman, show the JSON response for error for 400 when missing body on a POST request.
  - ![Image 7](/student/images/data-7.png)
    - There is a format error sent because there is no info given for the required field
- In Postman, show the JSON response for error for 404 when providing an unknown user ID to a UPDATE request.
  - ![Image 8](/student/images/data-8.png)
    - NoneType error because the message doesn't exist

***

## Blog JavaScript API fetch code and formatting code to display JSON.
- In Chrome inspect, show response of JSON objects from fetch of GET, POST, and UPDATE methods.
  - GET response
    - ![Image 13](/student/images/data-13.png)
      - All the previous posts from the database are shown as a collection of dictionaries from the GET request
  - POST response
    - ![Image 14](/student/images/data-14.png)
      - The message that was posted using POST function is returned so the frontend can display the newly shown message
  - UPDATE response
    - ![Image 15](/student/images/data-15.png)
      - The new value for the updated value is shown so the frontend can update the display counter.
- In the Chrome browser, show a demo (GET) of obtaining an Array of JSON objects that are formatted into the browsers screen.
  - ![Image 16](/student/images/data-16.png)
    - Shows the different entries from the database as seperate messages as seen above
  - In JavaScript code, describe fetch and method that obtained the Array of JSON objects.
    - By getting the hostname of the browser and adding '/api/messages/send', the data inputted in frontend is sent to backend, and the message in the database is returned back to frontend
  - In JavaScript code, show code that performs iteration and formatting of data into HTML.
    - ![Image 17](/student/images/data-17.png)
      - For each post in posts, a new box is added. Each box displays the user's name, message, and like counter
- In the Chrome browser, show a demo (POST or UPDATE) gathering and sending input and receiving a response that show update. Repeat this demo showing both success and failure.
  - ![Image 23](/student/images/data-23.png)
    - Via the text box, the users can send a POST request in the form of a new message to be added to the DB/displayed on the messages page
  - In JavaScript code, show and describe code that handles success. Describe how code shows success to the user in the Chrome Browser screen.
    - ![Image 18](/student/images/data-18.png)
      - Upon the success of the fetch function, the posts display container will be updated to show the new container
  - In JavaScript code, show and describe code that handles failure. Describe how the code shows failure to the user in the Chrome Browser screen.
    - ![Image 19](/student/images/data-19.png)
      - If the data isn't sent properly/an error occurs, the message is aborted and nothing new is shown to the user.