/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let rectWidth = 100;
let rectHeight = 100;
let rectCorner = 10;

/**
Description of preload
*/
function preload() {

}


/**
face
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}


/**
Description of draw()
*/
function draw() {
  // Make the background red
  background(mouseX,200,mouseY);
// Draw a square in the centre of the canvas
  rectMode(CENTER);
  rect(width/2,height/2,rectWidth,rectHeight,rectCorner);
}
