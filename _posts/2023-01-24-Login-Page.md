---
toc: True
comments: False
layout: default
title: Login Page
type: hacks
courses: {'timebox': {'week': 17}}
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #292b2f;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        .login-container {
            background-color: #292b2f;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 300px;
            text-align: center;
        }
        h1 {
            color: #333;
        }
        label {
            display: block;
            margin: 10px 0;
            color: #555;
        }
        input {
            width: 100%;
            padding: 8px;
            margin: 5px 0 15px;
            box-sizing: border-box;
        }
        button {
            background-color: #4caf50;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit" onclick="login()">Login</button>
        </form>
    </div>
    <script>
        import { url, options } from '{{site.baseurl}}/config.js';
        function login() {
            const uid = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const url = url + '/api/users/authenticate'
            // Example data to send to the backend (adjust according to your backend requirements)
            const data = {
                username: uid,
                password: password
            };
            // Fetch API to send data to the backend
            fetch('url';, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if required
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(responseData => {
                // Handle the response from the backend
                console.log(responseData);
                // You can implement further actions based on the backend response
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors, such as network issues or backend errors
            });
        }
    </script>
</body>
</html>
