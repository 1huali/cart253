/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let typing = ``; // Empty string to begin with

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // Display our cumulative typing variable on the canvas...
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(typing, width / 2, height / 2);
}

function keyTyped() {
  // Whenever a "typeable" key is pressed, add the most recent key to our typing string
  // (Using + with two strings like this is called concatenation, adding them together)
  typing = typing + key;
}
