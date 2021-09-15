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
  background(242, 7, 47);
  //background (255,192,203);

// Drawing a body
  noStroke();
  //fill(200,200,200);
  fill(252, 141, 160)
  ellipse(320,480,350,200)

// Drawing a head
//  fill(139,139,139);
  fill(255,192,203);
  ellipse(320,240,260,420);

// Drawing the eyes
  fill(0,0,0);
  ellipse(250,220,100,250);
  ellipse(390,220,100,250);

// Drawing the nostrills
  ellipse(315,330,6,9);
  ellipse(330,330,6,9);

// Drawing the mouth
  stroke(1);
  strokeWeight (2);
  noStroke();
  fill(217,80,101);
  rectMode(CENTER);
  rect(320,376,90,15,15);

}


/**
Description of draw()
*/
function draw() {

}
