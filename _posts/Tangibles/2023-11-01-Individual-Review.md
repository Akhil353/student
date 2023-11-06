---
toc: true
comments: true
layout: default
title: Individual Review
type: tangibles
courses: { timebox: {week: 11} }
---
# Trimester Reflection
## Memories
- Me finding a partner to work with for this trimester (Srijan)
- Learning to work with friends to understand/accomplish tasks
- Coming up with the idea to make our passion project about breaking bad
- Creating funny Canva documents [Image](/images/agile_manifesto.png)
## What I learned
- How to collaborate on code w/ others
- How to use ChatGPT
- How to debug code 
- Python/JS/HTML/Markdown syntax
## Goals for the future
In the next 2 trimesters, I want to learn how to use API's more. I'm also interested in how API's work, and if I can make my own API. Some ways I can grow personally is to learn more about pseudo code and syntax for JS. 

# Project Recap

## Issues Review
### <a href="https://github.com/APCSP-RAGS/pp-frontend/issues/1">Issue Week 1</a>
In this first week, I designed the frontend to look like the blueprint: <a href = "https://www.canva.com/design/DAFwy_4sba8/hiUKhROCfCaWV4VkUUk_jw/edit">See Canva blueprint here.</a> We got the two pages for music generation/recommendation up. The main challenge was getting the input box to work, as that had a lot of bugs to it. Here is the input box code below:
```py
<label for="genreInput" class="green-text">Favorite Songs:</label>
            <textarea id="genreInput" class="green-text"></textarea>
            <button onclick="saveInput('genreInput', 'genreOutput')"><a>Save Input</a></button>
        </div>
        <div class="pair">
            <label for="tempoInput" class="green-text">Favorite Genres:</label>
            <textarea id="tempoInput" class="green-text"></textarea>
            <button onclick="saveInput('tempoInput', 'tempoOutput')"><a>Save Input</a></button>
        </div>
        <div class="pair">
            <label for="lengthInput" class="green-text">Enter preferred length of songs:</label>
            <textarea id="lengthInput" class="green-text"></textarea>
            <button onclick="saveInput('lengthInput', 'lengthOutput')"><a>Save Input</a></button>
        </div>
        <div class="pair">
            <label for="artistsInput" class="green-text">Favorite Artists:</label>
            <textarea id="artistsInput" class="green-text"></textarea>
            <button onclick="saveInput('artistsInput', 'artistsOutput')"><a>Save Input</a></button>
```

### <a href="https://github.com/APCSP-RAGS/pp-frontend/issues/3">Issue Week 2</a>
In the second week, we got the data table working for the jokes and songs API. I ran into a lot of problem, the main problem being the file format. I also updated the frontend design to include the alien world page. Here is the layer class that moves the background image:

```py
export class Layer {
    constructor(image, speedRatio, WIDTH, HEIGHT, gameSpeed) {
        this.x = 0;
        this.y = 0;
        this.width = WIDTH;
        this.height = HEIGHT;
        this.image = image;
        this.speedRatio = speedRatio;
        this.speed = gameSpeed * this.speedRatio;
        this.frame = 0;
    }
    update() {
        this.x = (this.x - this.speed) % this.width;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y);
        ctx.drawImage(this.image, this.x + this.width, this.y);
    }
}
```

### <a href="https://github.com/APCSP-RAGS/pp-frontend/issues/5">Issue Week 3</a>
In the 3rd week, I made major changes to the page with the moving character. I fixed many problems with the page with the moving character because of how the code was built. To fix this, I had to remake the code so that the character would rotate and not go through frames like a sprite. Here is the code to rotate and move the sprite:

```py
# Code to move the sprite
function updateCharacter() {
  character.x += character.speed; // Move character horizontally
  character.rotation += character.rotationSpeed; // Rotate character
  // Wrap character to the other side of the canvas when it goes off-screen
  if (character.x > canvas.width + character.width / 2) {
  character.x = -character.width / 2;
}
```

```py
# Code to rotate sprite
function drawCharacter() {
  ctx.save(); // Save the current canvas state
  ctx.translate(character.x, character.y); // Translate to character's position
  ctx.rotate(character.rotation); // Rotate
  ctx.drawImage(characterImg, -character.width / 2, -character.height / 2, character.width, character.height); // Draw character
  ctx.restore(); // Restore the canvas state
}
```

## Projects Page
Contains 2 main images: The music recommender and the moving background page.

## Recommender Page
Contains an integrated table of data of songs breaking bad characters would like. The table also has a button to see the lyrics of the songs and has a cool RGB look for ambience.
Styling code for the table below:
```py
<html>
<head>
  <style>
    /* Style for the table */
    body {
      background-color: #000;
      color: #0f0;
      font-family: 'Courier New', monospace;
      overflow: hidden;
      margin: 0;
      transition: background-color 0.5s;
    }

    /* Center the table horizontally */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: auto;
      padding: 10px;
      transition: background-color 0.5s;
    }

    .table-container {
      background-color: #000;
      padding: 20px;
      overflow: auto;
      border-radius: 10px;
      box-shadow: 0 0 15px #0f0, 0 0 30px #0f0, 0 0 45px #0f0;
      animation: ring-light 3s ease-in-out infinite, music 1s linear alternate;
      transition: background-color 0.5s, box-shadow 0.5s;
    }

    @keyframes ring-light {
      0%, 100% {
        box-shadow: 0 0 15px #0f0, 0 0 30px #0f0, 0 0 45px #0f0;
      }
      25% {
        box-shadow: 0 0 20px #f00, 0 0 35px #0f0, 0 0 45px #00f;
      }
      50% {
        box-shadow: 0 0 25px #00f, 0 0 30px #f00, 0 0 45px #0f0;
      }
      75% {
        box-shadow: 0 0 20px #0f0, 0 0 35px #00f, 0 0 45px #f00;
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;
      white-space: pre-line;
      border-radius: 10px;
    }

    table th {
      background-color: #000;
      color: #0f0;
      font-weight: bold;
      white-space: pre-line;
    }

    table th, table td {
      border: 1px solid #333;
      padding: 8px;
      text-align: left;
      border-radius: 10px;
      white-space: pre-line;
    }

    .lyrics {
      display: none;
      max-height: 200px;
      overflow: auto;
      border-radius: 10px;
    }

    /* Add a hacker-inspired style */
    .hacker-theme {
      background-color: #000;
      color: #0f0;
    }

    .hacker-theme a {
      color: #0f0;
    }

    /* YouTube ambient mode style */
    .ambient-mode {
      background-color: #212121;
    }
```

## Breaking Bad Desert Page
Contains a still image in the background with a tumbleweed rolling across the screen to replicate the breaking bad desert. Uses OOP to create the tumbleweed rolling, and uses the page screen ratio for dimensions. 
Code to make the tumbleweed roll below:
```py
        const characterImg = new Image();
        characterImg.src = '{{characterImage}}'; // Load the character image
        const playerImg = new Image();
        playerImg.src = '{{playerImage}}'; // Load the player image
        characterImg.onload = function () {
            playerImg.onload = function () {
                function drawCharacter() {
                    ctx.save(); // Save the current canvas state
                    ctx.translate(character.x, character.y); // Translate to character's position
                    ctx.rotate(character.rotation); // Rotate
                    ctx.drawImage(characterImg, -character.width / 2, -character.height / 2, character.width, character.height); // Draw character
                    ctx.restore(); // Restore the canvas state
                }
                function updateCharacter() {
                    character.x += character.speed; // Move character horizontally
                    character.rotation += character.rotationSpeed; // Rotate character
                    // Wrap character to the other side of the canvas when it goes off-screen
                    if (character.x > canvas.width + character.width / 2) {
                        character.x = -character.width / 2;
                    }
                }
```
This page also has 2 different characters from breaking bad: Walter White and Jesse Pinkman. Jesse Pinkman is a still character in the page, and Walter is a moveable character (uses a/d). When the two characters touch each others, a dialogue bubble pops up between the two characters.
Code for movement:
```py
function updateCharacter() {
  character.x += character.speed; // Move character horizontally
  character.rotation += character.rotationSpeed; // Rotate character
  // Wrap character to the other side of the canvas when it goes off-screen
  if (character.x > canvas.width + character.width / 2) {
    character.x = -character.width / 2;
    }
  }
  function drawPlayer() {
  ctx.drawImage(playerImg, player.x - player.width / 2, player.y - player.height / 2, player.width, player.height); // Draw player
  }
  function updatePlayer() {
  // Move player horizontally based on input (a and d keys)
    if (keys['a']) {
    layer.x -= player.speed;
                        }
    if (keys['d']) {
      player.x += player.speed;
                        }
    // Wrap player to the other side of the canvas when it goes off-screen
    if (player.x > canvas.width + player.width / 2) {
      player.x = -player.width / 2;
      }     
    }
```
And here is the code for the dialogue:
```py
function checkCollision() {
    // Calculate the distance between player and interactive
    const distance = Math.sqrt((player.x - interactive.x) ** 2 + (player.y - interactive.y) ** 2);
    if (distance < player.width / 2 + interactive.width / 2) {
        // If they touch, set the dialogue to be visible
        dialogueVisible = true;
    } else {
        // If they are not touching, hide the dialogue
        dialogueVisible = false;
    }
}

function drawDialogue() {
    if (dialogueVisible) {
        // Display a dialogue bubble when dialogue is visible
        const interactiveX = interactive.x;
        const interactiveY = interactive.y - interactive.height / 2 - 60; // Adjusted the vertical position
        ctx.fillStyle = 'white';
        ctx.fillRect(interactiveX, interactiveY, interactive.width, 60); // Adjusted the height of the white box
        ctx.fillStyle = 'black';
        ctx.fillText('This stuff is the bomb, Mr. White!', interactiveX + 10, interactiveY + 40); // Adjusted the vertical position
    }
}
```


## 404 Page
Users will get a 404 error when they try to access a page that doesn't exist. Instead of giving them a github error, I made a page that it would send users to when they tried to access an unknown location. This also uses the code to rotate the character from my moving background page
```py
## 404 Error

Nothing to look at here!
{% assign characterImage = site.baseurl | append: page.character %}
<html>
<head>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas"></canvas>
    <script>
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");
        // Get window width and height
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight - 200;
        // Character (tumbleweed)
        const character = {
            x: 50,
            y: canvas.height - 200,
            width: 100,
            height: 100,
            speed: 2, // Speed of movement
            rotation: 0, // Initial rotation angle in radians
            rotationSpeed: (Math.PI / 180) * 2, // Rotation speed in radians per frame (adjust the value for desired speed)
        };
        const characterImg = new Image();
        characterImg.src = '{{characterImage}}'; // Load the character image
        characterImg.onload = function () {
            function drawCharacter() {
                ctx.save(); // Save the current canvas state
                ctx.translate(character.x + character.width / 2, character.y + character.height / 2); // Translate to character's center
                ctx.rotate(character.rotation); // Rotate
                ctx.drawImage(characterImg, -character.width / 2, -character.height / 2, character.width, character.height); // Draw character
                ctx.restore(); // Restore the canvas state
            }
            function updateCharacter() {
                character.x += character.speed; // Move character horizontally
                character.rotation += character.rotationSpeed; // Rotate character
                // Wrap character to the other side of the canvas when it goes off-screen
                if (character.x > canvas.width) {
                    character.x = -character.width;
                }
            }
            function gameLoop() {
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
                drawCharacter();
                updateCharacter();
                requestAnimationFrame(gameLoop); // Call the loop again
            }
            gameLoop(); // Start the game loop
        };
    </script>
</body>
</html>
```