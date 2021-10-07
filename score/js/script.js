/**
Score code
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let score = 0;

let target= {
  x:undefined,
  y:undefined,
  size:50,
  vx:1,
  vy:1
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
  createCanvas (640,640);

target.x= random (0,width);
target.y=random(0,height);
}


/**
Description of draw()
*/
function draw() {
background(0);

score++;

// target.x=target.x+target.vx;
// target.y=target.y+target.vy;

target.x= mouseX;
target.y=mouseY;

push();
ellipse(target.x,target.y,target.size);
noStroke;
fill(255,0,0)
pop();


push();
fill(255);
textAlign(LEFT, TOP);
textSize(32);
text(score,width/8,height/8)
pop();

}
