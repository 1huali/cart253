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
    x:random(0,width),
    y: random(0, height),
    size: random(50,100),
  };
  return circle;
  // what does return means?
}

/**
Call all the states
*/
function draw() {
  background(0);
if (state === `title`){
  title();
}
else if (state === `game`){
  game();
}
else if (state === `win`){
  win();
}
else if (state === `lose`){
  lose();
}
}

function title(){
  displayText(`Title`);
}

// dont understand this for loop here, and the display purpose
function game(){
for (let i=0; i < circles.length; i++) {
// calling circles individually to be "circle" temporarly
  let circle = circles[i];
  // display them called-temporarly "circle"
  displayCircle(circle);
}
}

// where in the program did we assign circle to be a circle in the array?
// A: line 68. the variable is teleported and can change name but still hold properties.
function displayCircle(circle){
  push();
  fill(255,0,0);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
  console.log(circle.x)
  pop();
}

function mousePressed(){
if (state=== `title`){
  state = `game`;
}
if (state=== `game`){
  checkCircleClick();
}
}

function checkCircleClick(){
  for (let i = 0; i < circles.length ; i ++){
    //Q:what does that do? Do we need this part to make splice work?
    let circle = circles[i];
    // Q: order matters or not?
    let d = dist ( mouseX,mouseY,circle.x, circle.y)
    if (d < circle.size/2){
      circle.splice(i,1);
      // Q: breaks what?
      break;
    }
  }
}

function win(){
  displayText(`Yay win`);
}

function lose(){
  displayText(`U lose`);
}

function displayText(message){
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(32);
  text(message,width/2, height/2);
  pop();
}
