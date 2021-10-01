/**
Dodge'Em
Wan Hua Li

Better dodge those bad thoughts cos then might as well catch covid-19 init??

Exercice to put in practice mvmt variables, visuals, and conditionals.
*/

"use strict";

let backgroundShade=0;

// player's cursor
let nrj ={
  x:0, // will mouseX
  y:0, // will mouseY
  size: 100,
  vx:0,
  vy:0,
  fill: 255
}
// danger to dodge
let danger ={
  x:0, y:0, size: 100,speed:1, fill: 150
}

/**
maybe medias???
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas (windowWidth,windowHeight);
}


/**
Description of draw()
*/
function draw() {
  background(backgroundShade);

  // danger bouncing
  fill(danger.fill);
  danger.x= danger.x+danger.speed;

  danger.x = random(Width,danger.y);
  danger.y= random(danger.x,Height);

  ellipse (danger.x, danger.y,danger.size);
}
