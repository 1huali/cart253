/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let backgroundShade = 0;
let circle = {
  x: 250,
  y: 250,
  size: 100,
  fill: 100,
  speed:1
}

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(backgroundShade);
  ellipse(circle.x, circle.y, circle.size);

// fill setups
  circle.fill = map(mouseY,0,width,100,255); // Set the circle size based on the mouse's y position
  fill(circle.fill);
// speed setups
  circle.size += circle.speed;
  circle.size = constrain(mouseX, 0,width);
// size setups

  console.log(`circleX: ${circle.x}, circleY: ${circle.y}, circleSize: ${circle.size}, circleSpeed: ${circle.speed}`);
}
