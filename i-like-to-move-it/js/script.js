/**
I like to move it
Wan Hua Li

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let rectangle={
  x:0,
  y:250,
  size: 25,
  vx:10,
  vy:10
}

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
  background(0);

  random()
}


/**
Description of draw()
*/
function draw() {
rectangle.x= rectangle.x+rectangle.vx;
rectangle.y= rectangle.x+rectangle.vy;


rectMode(CENTER);
noFill();
stroke(255)
rectangle(rectangle.x,project.y,rectangle.size, rectangle.size);

}
