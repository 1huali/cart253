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

// let hipBox ={
//   x: 600,
//   y:120,
//   width:150,
//   height:50
// }

let hairstyles = [];
let hairImg =[];
let hairClicked = false;

/**
Description of preload
*/
function preload() {
  // for (let i=0; i< hairstylesNum; i++){
// how to assign an image to a hairstyle? do we call it in the class or script?
hairImg.push (loadImage('assets/images/hair1.png'));
hairImg.push (loadImage('assets/images/hair2.png'));
hairImg.push (loadImage('assets/images/hair3.png'));
hairImg.push (loadImage('assets/images/hair4.png'));
hairImg.push (loadImage('assets/images/hair5.png'));

}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

// for (let i=0; i< hairstylesNum; i++){
// }

// calling the img
hairstyles.push (new Hairstyles(600,100,hairImg[0]));
hairstyles.push (new Hairstyles(600,200,hairImg[1]));
hairstyles.push (new Hairstyles(600,300,hairImg[2]));
hairstyles.push (new Hairstyles(600,400,hairImg[3]));
hairstyles.push (new Hairstyles(600,500,hairImg[4]));

}


/**
Description of draw()
*/
function draw() {
  background(0);
displayModel();
// displayHipBox();

for (let i=0; i< hairstyles.length; i++){
  hairstyles[i].displayHair();
hairstyles[i].drag();
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

function mouseReleased (){
  console.log(this.monoClick);
    for (let i=0; i< hairstyles.length; i++){
      console.log(i,hairstyles[i].monoClick);
      hairstyles[i].monoClick = false;
}
  hairClicked = false;
}

function reset(){
  hairstyles=[];
  hairstyles.push (new Hairstyles(600,100,hairImg[0]));
  hairstyles.push (new Hairstyles(600,200,hairImg[1]));
  hairstyles.push (new Hairstyles(600,300,hairImg[2]));
  hairstyles.push (new Hairstyles(600,400,hairImg[3]));
  hairstyles.push (new Hairstyles(600,500,hairImg[4]));
}

function resetButton(){
  push();
  fill(0);
  noStroke();
  ellipse()
  pop();
}
