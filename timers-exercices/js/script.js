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

  for (let i = circle; i < numCircle; i++) {
    let circle = createCircle();
    circles.push(circle);
  }

  function createCircle() {
    let x=random(0,width);
    let y= random(0, height);
    let size= random(50,100);
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

function game(){
  displayCircle()
}

function displayCircle(){
  push();
  fill(255,0,0);
  noStroke();
  ellipse(circle.x,circle.y,circle.size);
  pop();
}

function mousePressed(){
if (state=== `title`){
  state = `game`;
}
if (state=== `game`){
  displayCircle();
  checkCircleClick();
}
}

function checkCircleClick(){
  for (let circle = i; i < circles.lenght ; i ++){
    let d = dist (circle.x, circle.y, mouseX,mouseY)
    if (d < circle.size/2){
      circle.splice(i,1);
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
