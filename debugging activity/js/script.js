/**
Debuggin activity
Wawa Li

4fun lol
This program is a game where there the user can eat food (up to 6). The food disappear when the mouse hover over.
*/
"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  userSize: 100
}

// Food objects
let foodGroup = [];
  // A: Cos of return
// foodGroup[0] = (50, 300);
// foodGroup[1] = (100, -300);
// foodGroup[2] = (250, 300);
// foodGroup[3] = (350, 300);
// foodGroup[4] = (450);
// foodGroup[5] = (550, 300);



function setup() {
  createCanvas(600, 600);

  // Q: Why a function to create food rather than defining it in presets?
  // A: Cos its defining the list
  foodGroup[0] = createFood(50, 300);
  foodGroup[1] = createFood(100, -300);
  foodGroup[2] = createFood(250, 300);
  foodGroup[3] = createFood(350, 300);
  foodGroup[4] = createFood(450);
  foodGroup[5] = createFood(550, 300);
}

function createFood(x, y) {
  console.log("food is created")
  let food = {
    x: x,
    y: y,
    eaten: false,
    size: 50,
  }
  // Q:what does Return means actually?
  // A: It outputs the variable Food
    return food;
}
function draw() {
  background(0);

  // Sets the user position to the mouse position
  function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
    ellipse(user.x, user.y, user.userSize)
  }

  // Display the user and foods
  displayUser();

  for (let i=0; i < foodGroup.length;i++){
    displayFood(foodGroup[i]);
  }

  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either food
  for (let i=0; i < foodGroup.length;i++){
    checkFood(foodGroup[i]);
  }

// Checks if the user overlaps the food object and eats it if so
// Q: WHY NOT EATING EXTREMITIES
// A:
function checkFood(food) {
  let d = dist(user.x, user.y, food.x, food.y);
  if (d < user.userSize / 2 + food.size / 2) {
    food.eaten = true;
  console.log("dist between food+user checked properly")
  }
}


// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.userSize);
  pop();
}

// Draw the food as a circle
function displayFood(food) {
  if (!food.eaten) {
  // Display the food as its position and with its size
  push();
  fill(255, 100, 100);
  ellipse(food.x, food.y, food.size);
  pop();
  console.log("food is displayed")
}
}
}
