---
toc: false
comments: true
layout: default
title: Simulation Notes
type: tangibles
courses: { timebox: {week: 9} }
---
## Simulations
- A process where you simulate some sort of situation to see the predicted result
- Code can be used to simulate real-life conditions
  - Ex: Rolling dice
  - Coin flip
- Simulations use algorithms

## HW 1
```py
import random

starting_money = 500
jackpot_threshold = 5
winning_sessions = 0

for _ in range(jackpot_threshold):
    dice_roll = random.randint(1, 6) + random.randint(1, 6)

    if dice_roll <= 3:
        starting_money -= 70
    elif dice_roll <= 6:
        starting_money -= 40
    elif dice_roll <= 9:
        starting_money += 20
    else:
        starting_money += 50

    if starting_money <= 0:
        break

    if dice_roll == 12:
        starting_money += 100

    if starting_money >= jackpot_threshold * 100:
        winning_sessions += 1

print(f'Your chances of hitting the jackpot in this scenario were {(winning_sessions * 100) / jackpot_threshold}%.')
```

## HW 2
```py
# Initial parameters
speed = 0  # Initial speed
acceleration = 2  # Acceleration rate in m/s^2
deceleration = 1  # Deceleration rate in m/s^2
max_speed = 60  # Maximum speed in m/s
distance = 0  # Initial distance
time = 0  # Initial time

while distance < 1000:
    if speed > max_speed:
        speed -= deceleration
        distance += speed
    else:
        speed += acceleration
        distance += speed
    time += 1

print(f"Time (seconds): {time}, Distance traveled: {distance}, Final speed: {speed}mps")
```