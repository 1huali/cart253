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
let food1;
let food2;
let food3;
let food4;
let food5;
let food6;
let eaten;


function setup() {
  createCanvas(600, 600);

  // Why a function to create food rather than defining it in presets?
  let food1 = createFood(50, 300);
  let food2 = createFood(100, -300);
  let food3 = createFood(250, 300);
  let food4 = createFood(350, 300);
  let food5 = createFood(450);
  let food6 = createFood(550, 300);
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
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);
  displayFood(food5);
  displayFood(food6);
  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either food
  checkFood(food1);
  checkFood(food2);
  checkFood(food3);
  checkFood(food4);
  checkFood(food5);
}


function createFood(x, y) {
  let food = {
    x: x,
    y: y,
    size: 50,
  }
  // moved to
  // if food.eaten = false {
  //     return food;
}

// Checks if the user overlaps the food object and eats it if so
function checkFood(food) {
  let d = dist(user.x, user.x, food.x, food.y);
  if (d < user.userSize / 2 + food.size / 2) {
    eaten = true;
  }
  if (eaten = false) {
    return food;
  }

}


// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

// Draw the food as a circle
function displayFood(x,y) {
  // // Check if the food is still available to be eaten - wrong function
  // if (eaten = false) {
  // Display the food as its position and with its size
  push();
  fill(255, 100, 100);
  // what's x?y? how to generate food w diff. number?
  ellipse(food.x, food.y, food.size);
  pop();

}
