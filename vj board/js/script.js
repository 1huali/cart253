/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
// board environment. eventually add instructions
let bg= 0;

// disk1
let disk1 = {
  x:undefined,
  y:undefined,
  size:undefined,
  h:100,
  s:100,
  b:100,
  rev:1,
}


// // properties
// // sliders
// let hueSlider;
// let satSlider;
// brightSlider;
// reverbSlider;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(1000, 600);
  disk1.x= width/2;
  disk1.y=height/2;
  disk1.size= 200;
  background(bg);
  noStroke();
  ellipseMode(RADIUS);
  colorMode(HSB, 360, 100, 100);


}


/**
Description of draw()
*/
function draw() {
  displayDisk1();

  for (let x = 0; x <= width; x += disk1.size) {
      drawGradient(disk1.x, height / 2);
    }

  // properties();
  bright();
  colorhue();
  sat();
}

function drawGradient(x, y) {
  let radius = disk1.size;
  let h = disk1.h;
  for (let r = radius; r > 0; --r) {
    fill(h, disk1.s, disk1.b);
    ellipse(disk1.x, disk1.y, r);
    h = (h + 0.6) % 360;
  }
}


// VARIATIONS

// sound, color
function colorhue(){
  if (keyIsDown(RIGHT_ARROW)){
    disk1.h+=1;
  }
  else if (keyIsDown(LEFT_ARROW)){
    disk1.h-=1;
  }
  constrain(disk1.h,0,360);
  }
// volume, brightness ---- brightness kidna suck, should replace w speed, and saturation
function bright(){
  disk1.b= mouseX;
  constrain(disk1.b,0,360);
}
// saturation,volume??
function sat() {
  if (keyIsDown(UP_ARROW)){
    disk1.s+=1;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    disk1.s-=1;
  }
  constrain(disk1.s,0,100);
}






function displayDisk1() {
  fill(disk1.h,disk1.s,disk1.b);
  ellipse(disk1.x, disk1.y, disk1.size);
}
