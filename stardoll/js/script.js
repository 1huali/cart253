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

let hairstyles = [];
let hairstylesNum=2;
let hair1 = new Hair1(x,y,r,g,b);
let hair2 = new Hair2(x,y,r,g,b);
// let hair3 = new Hair3(x,y,r,g,b);
// let hair4 = new Hair4(x,y,r,g,b);
// let hair5 = new Hair5(x,y,r,g,b);


/**
Description of preload
*/
function preload() {
  for (let i=0; i< hairstylesNum; i++){
// how to assign an image to a hairstyle? do we call it in the class or script?
hair1img = loadImage('assets/images/hair1.jpg');
hair2img = loadImage('assets/images/hair2.jpeg');
hair3img = loadImage('assets/images/hair3.png');
hair4img = loadImage('assets/images/hair4.png');
hair5img = loadImage('assets/images/hair5.png');
}
}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

for (let i=0; i< hairstylesNum; i++){
}

}


/**
Description of draw()
*/
function draw() {
  background(0);
displayModel();
displayHipBox();
// then how do we activate the functions like display, etc?
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
