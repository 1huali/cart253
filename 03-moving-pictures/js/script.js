/**
Moving pictures
Wawa Li

22nd of september 2021
Simple animation project :
"Two circles, the left one bigger and more transparent than the right,
come in from either side of the screen, growing as they do so.
They stop in the centre while still growing. The background goes
from black to red."
*/

"use strict";

  let bg = {
  r:252,
  g:3,
  v: 44
  }
let circle1= {
  x:250,
  y:350,
  size: 250,
  // fill: (255,179,207),
  // speed:1
}
let circle2= {
  x: 750,
  y:350,
  size: 100,
  // fill: (255, 183, 163),
  // opacity: 0.5,
  // speed: 1



  // console.log(circle1X,circle1Y);
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
  createCanvas(1000, 700);
  noStroke();
  // background(252,3,44); // can't work in setup cos it has to loop

}

/**
Description of draw()
*/
function draw() {
  background();

  // circle 1
  ellipse(circle1.x,circle1.y,circle1.size);
  noStroke();
  fill(255,179,207);


  circle1.x= circle1.x+circle1.speed;
  // circle1.speed=() //speed of x
  circle1.x= map(circle1.x,0,250,-5,250);// range of mvmt

  // circle 2
  ellipse(circle2.x,circle2.y,circle2.size);
  noStroke();
  fill(255, 183, 163);


}
