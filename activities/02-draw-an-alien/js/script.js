/**
Draw an alien
Wan Hua Li

Drawing of an alien to exercice basic concepts of lines,
points, shapes, lines, bg, etc.
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas (640,480);
  background (255,192,203);
// Drawing a body
  noStroke();
  fill(200,200,200);
  ellipse(320,480,350,200)
// Drawing a head
  fill(139,139,139);
  ellipse(320,240,230,440);
// Drawing the eyes
  fill(0,0,0);
  ellipse(270,160,50,200);
  ellipse(365,160,50,200);
// Drawing the nostrills
  ellipse(315,260,6,9);
  ellipse(330,260,6,9);
// Drawing the mouth
  stroke(1);
  strokeWeight (2);
  rectMode(CENTER);
  rect(320,350,60,30,15);

}


/**
Description of draw()
*/
function draw() {

}
