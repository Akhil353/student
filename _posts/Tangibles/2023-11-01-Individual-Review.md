---
toc: true
comments: true
layout: default
title: Individual Review
type: tangibles
courses: { timebox: {week: 9} }
---

# Project Recap

## Issues Review
<a href="https://github.com/APCSP-RAGS/pp-frontend/issues/1">Issue Week 1</a>
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

<a href="https://github.com/APCSP-RAGS/pp-frontend/issues/3">Issue Week 2</a>
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

<a href="https://github.com/APCSP-RAGS/pp-frontend/issues/5">Issue Week 3</a>
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

## Moving Background Page
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

# Student Teaching

- Algorithms
  - Algorithms are a way to perform a set of instructions to achieve a task
  - For loop
    - Iterates through every item in a range
    - Ex: for item in list:
  - If statement
    - Used to perform algorithms based off conditions
- Boolean/If
  - Boolean can have 2 values: True or False
  - Logic gates use binary to give a boolean value (Ex: and(0,0) = True)
  - There are many different types of logic gates:
    - And gate
    - Or gate
    - Not gate
    - Xor gate
    - Nand gate
    - Nor gate
- Iteration
  - A way to iterate through ranges and items
  - For loop
    - Goes through every item in a range
  - While loop
    - Goes through a block of code until a certain condition is met