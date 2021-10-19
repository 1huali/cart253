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
  h1:100,
  s1:100,
  b1:100,
  rev1:1,
}

let disk2 = {
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


  disk1.x= width/4;
  disk1.y=height/2;
  disk1.size= 200;
  background(bg);
  noStroke();
  ellipseMode(RADIUS);
  colorMode(HSB, 360, 100, 100);
  frameRate (60);


push()
disk2.x= 3*width/4;
disk2.y=height/2;
disk2.size= 200;
noStroke();
// ellipseMode(RADIUS);
// colorMode(HSB, 360, 100, 100);
pop();

}


/**
Description of draw()
*/
function draw() {
  displayDisk1();
  displayDisk2();

  for (let x = 0; x <= width; x += disk1.size) {
      drawGradient(disk1.x, height / 2);
    }

    for (let x = 0; x <= width; x += disk2.size) {
        drawGradient1(disk2.x, height / 2);
      }
  // properties();
  bright();
  colorhue();
  sat();

  bright1();
  colorhue1();
  sat1();

}



function drawGradient1(x, y) {
  let radius = disk1.size;
  let h = disk1.h1;
  for (let r = radius; r > 0; --r) {
    fill(h, disk1.s1, disk1.b1);
    ellipse(disk1.x, disk1.y, r);
    h = (h + 0.6) % 360;
  }
}

  function drawGradient(x, y) {
    let radius = disk2.size;
    let h = disk2.h;
    for (let r = radius; r > 0; --r) {
      fill(h, disk2.s, disk2.b);
      ellipse(disk2.x, disk2.y, r);
      h = (h + 0.6) % 360;
    }
}



// VARIATIONS

//DISK1
// sound, color
function colorhue1(){
  if (keyIsDown(65)){
    disk1.h1+=1;
  }
  else if (keyIsDown(68)){
    disk1.h1-=1;
  }
  constrain(disk1.h1,0,360);
  }
// volume, brightness ---- brightness kidna suck, should replace w speed, and saturation
function bright1(){
  disk1.b1= mouseX;
  constrain(disk1.b1,0,360);
}
// saturation,volume??
function sat1() {
  if (keyIsDown(UP_ARROW)){
    disk2.s1+=1;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    disk2.s1-=1;
  }
  constrain(disk2.s1,0,100);
}

// DISK2

function colorhue(){
  if (keyIsDown(RIGHT_ARROW)){
    disk2.h+=1;
  }
  else if (keyIsDown(LEFT_ARROW)){
    disk2.h-=1;
  }
  constrain(disk2.h,0,360);

  if (disk2.h === 360){
    disk2.h=0;
}

if (disk2.h === 0){
  disk2.h=360;
}

  }


//


// volume, brightness ---- brightness kidna suck, should replace w speed, and saturation
function bright(){
  disk2.b= mouseY;
  constrain(disk2.b,0,360);
}

// saturation,volume??
function sat() {
  if (keyIsDown(UP_ARROW)){
    disk2.s+=1;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    disk2.s-=1;
  }
  constrain(disk2.s,0,100);
}






function displayDisk1() {
  fill(disk1.h,disk1.s,disk1.b);
  ellipse(disk1.x, disk1.y, disk1.size);
}

function displayDisk2() {
  fill(disk2.h,disk2.s,disk2.b);
  ellipse(disk2.x, disk2.y, disk2.size);
}
