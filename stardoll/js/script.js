/**
Title of Project
Wawa Li

Dressing-up simulator
*/

"use strict";
let doll ={
  x:600,
  y:200,
  size:150,
}

let hipBox ={
  x: 600,
  y:120,
  width:150,
  height:50
}

let hair ={
  x:900,
  y:200,
  width:30,
  height:150,
  fill: {
    r:255,
    g:0,
    b:0
  }
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
  createCanvas(windowWidth, windowHeight);
}


/**
Description of draw()
*/
function draw() {
  background(0);
displayModel();
displayHipBox();
displayHair();
// mousePressed();
if(mouseIsPressed){
  let d= dist(mouseX, mouseY, hair.x,hair.y)
  console.log("mouse is being pressed")
  if (d < hair.width){
  console.log("hair is being pressed")
    hair.x= mouseX;
    hair.y= mouseY;
  }
}

}

function displayModel (){
  push();
  fill(255);
  ellipse(doll.x,doll.y,doll.size);
  pop();
}

function displayHipBox(){
  push();
  rectMode(CENTER);
  noFill();
  stroke(255,0,0);
  strokeWeight(4)
  rect(hipBox.x,hipBox.y,hipBox.width,hipBox.height);
  pop();
}

function displayHair (){
  push();
  fill(hair.fill.r,hair.fill.g,hair.fill.b);
  strokeWeight(4)
  rectMode(CENTER);
  rect(hair.x,hair.y,hair.width,hair.height);
  pop();
}
//
// function mousePressed() {
//   let d= dist(mouseX, mouseY, hair.x,hair.y)
//   if (d < hair.size){
//     hair.x= mouseX;
//     hair.y= mouseY;
//   }
// }

/*function mouseReleased() {
  let d= dist(mouseX, mouseY, hair.x,hair.y)
  console.log("mouse is being pressed")
  if (d < hair.width){
  console.log("hair is being pressed")
    hair.x= mouseX;
    hair.y= mouseY;
  }
}*/

function checkHairPosition(){

}
