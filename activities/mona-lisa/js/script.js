/**
Mona Lisa in less than 30 minutes.
Wan Hua Li

This exercice is an attempt to create Mona Lisa
in less than 30 minutes.
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
  createCanvas(400,600);
  background(123, 163, 121);

  //eyes
  fill(56, 31, 13)
  ellipse(140,150,20,10)


  //hair
  fill(56, 31, 13);
  noStroke();
  ellipse(210,155,180,210);


  //draw face
  fill(222, 216, 171);
  noStroke();
  ellipse(200,150,120,180);
  rectMode(CENTER);
  rect(200,180,50,20,15);
  //
  //visage elements

  //

  // mouth
    // fill(222, 216, 171);
    // noStroke();
    // rectMode(CENTER);
    // rect(200,180,50,20,15);

//mouth arc
noFill()
stroke(1)
arc(200, 155, 70, 70, radians(70), radians(100));


}


/**
Description of draw()
*/
function draw() {

}
