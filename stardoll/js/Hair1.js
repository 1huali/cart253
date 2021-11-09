class Hairstyles

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

function displayHipBox(){
// tbd
}

function displayHair (){
// tbd
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
} //end superclass
