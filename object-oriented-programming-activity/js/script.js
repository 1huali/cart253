/**
Paddle board game
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let paddle;
// let ball= {
//   balls= [],
//   ballAmount=7,
// }
/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);

let paddle = new Paddle(300,20);
}

/**
Description of draw()
*/
function draw() {
background(0);
console.log("bg created");

  paddle.move();
  console.log("paddle moving")
  paddle.display();
  console.log("paddle created")
}
