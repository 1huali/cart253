/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let score = 0;

let startCircle ={
  x:undefined,
  y:undefined,
  size:100,
}

let target ={
  x:250,
  y:250,
  size:100,
  vx:1,
  vy:1,
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
}


/**
Description of draw()
*/
function draw() {
if(state ===`title`){
  title();
} else if (state === `game`) {
  game();
}
}

function title(){
  background(255,255,0);

  let d = dist(mouseX,mouseY,startCircle.x,startCircle.y);
  if (d< startCircle.size/2);{
    state = `game`;
  }

push();
Nostroke();
fill(0);


}
