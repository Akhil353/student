---
toc: True
comments: False
layout: default
title: Login Page
type: hacks
courses: {'timebox': {'week': 18}}
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
            background-color: #575757;
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
    <div class="styled-box">
        <div class="login-container">
            <h1>Login</h1>
            <form action="javascript:login_user()">
                <label for="uid"><b>Username</b></label>
                <input type="text" id="uid" placeholder="Enter Username" name="uid" required>
                <label for="password"><b>Password</b></label>
                <input type="password" id="password" placeholder="Enter Password" name="password" required>
                <button class='button'>Log in</button>
                <div>
                    <span class="psw">Need an account? <a href="{{site.baseurl}}/2024/01/31/sign-up.html"> Sign Up</a></span>
                </div>
            </form>
        </div>
    </div>
    <script type="module">
        import { uri, options } from '{{site.baseurl}}/config.js';
        function login_user() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const url = uri + '/api/users/authenticate';
            const body = {
                uid: document.getElementById("uid").value,
                password: document.getElementById("password").value,
            };
            const authOptions = {
                method: 'POST',
                cache: 'no-cache',
                headers: myHeaders,
                body: JSON.stringify(body)
            };
            fetch(url, authOptions)
            .then(response => {
                if (!response.ok) {
                    const errorMsg = 'Login error: ' + response.status;
                    console.log(errorMsg);
                    return null;
                }
                const contentType = response.headers.get('Content-Type');
                if (contentType && contentType.includes('application/json')) {
                    return response.json();
                } else {
                    return response.text();
                }
            })
            .then(data => {
                if (data !== null) {
                    console.log('Response:', data);
                }
                // window.location.href = "{{site.baseurl}}/";
            })
            .catch(err => {
                console.error('Fetch error:', err);
            });
        }
        window.login_user = login_user;
    </script>
</body>
</html>
