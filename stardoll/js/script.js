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

let hair1 ={
  x:900,
  y:200,
  width:150,
  height:50,
  fill: {
    r:255,
    g:0,
    b:0
  }
}

let hair2 ={
  x:900,
  y:100,
  width:150,
  height:50,
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
displayHair2();
// mousePressed();
if(mouseIsPressed){
  let d= dist(mouseX, mouseY, hair1.x,hair1.y)
  console.log("mouse is being pressed")
  if (d < hair1.width){
  console.log("hair1 is being pressed")
    hair1.x= mouseX;
    hair1.y= mouseY;
  }
  let f= dist(mouseX, mouseY, hair2.x,hair2.y)
  console.log("mouse is being pressed")
  if (d < hair2.width){
  console.log("hair2 is being pressed")
    hair2.x= mouseX;
    hair2.y= mouseY;
  }
}

} //end draw

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
  fill(hair1.fill.r,hair1.fill.g,hair1.fill.b);
  strokeWeight(4)
  rectMode(CENTER);
  rect(hair1.x,hair1.y,hair1.width,hair1.height);
  pop();
}

function displayHair2 (){
  push();
  fill(hair2.fill.r,hair2.fill.g,hair2.fill.b);
  strokeWeight(4)
  rectMode(CENTER);
  rect(hair2.x,hair2.y,hair2.width,hair2.height);
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
