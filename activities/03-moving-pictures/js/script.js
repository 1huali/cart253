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
  r:0,
  g:0,
  b:0
  }
let circle1= {
  x:0,
  y:350,
  size: 250,
  fill: 0,
  alpha: 200,
  speed:1,
  growthRate:0.9
}
let circle2= {
  x: 1000,
  y:350,
  size: 100,
  fill: 0,
  alpha: 100,
  speed: -1,
  growthRate:0.9
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
// bg
  background(bg.r,bg.b,bg.g);
  bg.r = bg.r+1;
  bg.r = map(bg.r,100, width,100,255);

  // circle 1
  ellipse(circle1.x,circle1.y,circle1.size);
  fill(circle1.fill, circle1.alpha);
  noStroke();
  circle1.x= circle1.x+circle1.speed;
  circle1.x= constrain(circle1.x,0,500);
  circle1.size= circle1.size+circle2.growthRate;
  circle1.size= constrain(circle1.size,0,height);
  //
  // circle1.x= circle1.x+circle1.speed;
  // // circle1.speed=() //speed of x
  // circle1.x= map(circle1.x,0,250,-5,250);// range of mvmt

  // circle 2
  ellipse(circle2.x,circle2.y,circle2.size);
  noStroke();
  fill(circle2.fill, circle2.alpha);
  circle2.x= circle2.x+circle2.speed;
  circle2.x= constrain(circle2.x,500,1000);
  circle2.size= circle2.size+circle2.growthRate;
  circle2.size= constrain(circle2.size,0,circle1.size*0.75);

  // fill(255, 183, 163);


}
