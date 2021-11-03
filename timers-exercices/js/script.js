/**
Timer exercices
Wawa Li

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state = `title`;

let circles = [];
let numCircle = 10;
let alive = true; // added on?

let gameOverTimer = 0;
let gameLenght = 10 * 60; //10 secondes by 60 frames per second

let newCircleTimer = 0;
let newCircleDelay = 2 * 60;

let gameOverStartTime = 0;
let newCircleStartTime = 0;

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numCircle; i++) {
    let circle = createCircle();
    circles.push(circle);
  }
  console.log(circles);
}

function createCircle() {
  let circle = {
    x: random(0, width),
    y: random(0, height),
    size: random(50, 100),
  };
  return circle;
  // what does return means?
}

/**
Call all the states
*/
function draw() {
  background(0);
  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }
}

function title() {
  displayText(`PS: ADULT ACNE IS A THING!
    Pop them zits - it's pandemic!!!`);
}

// dont understand this for loop here, and the display purpose
function game() {
  for (let i = 0; i < circles.length; i++) {
    // console.log(`circle#: `, i, circles.alive);
    // calling circles individually to be "circle" temporarly
    let circle = circles[i];
    // display them called-temporarly "circle"
    displayCircle(circle);
  }
  gameOverTimer++;
  if (gameOverTimer >= gameLenght) {
  // if (frameCount - gameOverTimer >= gameLenght) {
    gameOver();
    // how can I console.log the gameLength?
  }
  if (circles.length === 0) {
    win();
  }

  newCircleTimer++;
  if (newCircleTimer >= newCircleDelay) {
  // if (frameCount - newCircleStartTime >= newCircleDelay) {
    let circle = createCircle();
    circles.push(circle);
    // console.log(`circle#: `, circle, circles.alive);
    newCircleTimer = 0;
  }
} //end game function

// where in the program did we assign circle to be a circle in the array?
// A: line 68. the variable is teleported and can change name but still hold properties.
function displayCircle(circle) {
  if ((circles.alive = true)) {
    push();
    fill(255);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
    // console.log(circle.x)
    pop();
  }
}

function mousePressed() {
  if (state === `title`) {
    gameOverStartTime = frameCount;
    newCircleStartTime = frameCount;
    state = `game`;
  }
  if (state === `game`) {
    checkCircleClick();
  }
}

function checkCircleClick() {
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    // Q: order matters in dist or not?
    // A: non
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < circle.size / 2) {
      // how can I console log if the circles are clicked/left or not?
      circles.splice(i, 1);
      circles.alive = false; // added on?
      // Q: breaks what?
      // A: the loop
      break;
    }
  }
}

function win() {
  displayText(`Yay win`);
}

function lose() {
  displayText(`U lose`);
}

function gameOver() {
  if (circles.lenght === 0) {
    state = `win`;
  } else {
    state = `lose`;
  }
}

function displayText(message) {
  push();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text(message, width / 2, height / 2);
  pop();
}
