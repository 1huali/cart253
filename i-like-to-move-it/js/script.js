/**
I like to move it
Wan Hua Li

Exercice including (décrire les mvtmts)
representation of a close-up of cellulosis of
This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
// SETTING OBJECTS N STARSZSZSZSZSZSZSZSZSZS

// bg
let backgroundColor = {
  r: 155,
  g: 155,
  b: 155
};

// dust/foam - moves quick like a heart-beat
let foam1 = {
  x: 500,
  y: 125,
  size: 70,
  speed: 10,
  fill: 1
}

let foam2 = {
  x: 350,
  y: 525,
  size: 70,
  speed: 10,
  fill: 1
}

// novas, grow and shrinks. size of big circles r mapped with mouseX
let nova1 = {
  x: 500,
  y: 400,
  size: 0,
  fill: 0
}
let core1 = {
  x: 500,
  y: 400,
  size: 70,
  alpha: 100,
  fill: 2
}

let nova2 = {
  x: 120,
  y: 520,
  size: 100,
  fill: 1
}
let core2 = {
  x: 120,
  y: 520,
  size: 60,
  alpha: 200,
  fill: 255
}
let nova3 = {
  x: 810,
  y: 350,
  size: 100,
  fill: 1
}
let core3 = {
  x: 810,
  y: 350,
  size: 50,
  fill: 255,
  alpha: 200
}
let nova4 = {
  x: 500,
  y: 400,
  size: 100,
  fill: 1
}
let core4 = {
  x: 500,
  y: 400,
  size: 50,
  fill: 255,
  alpha: 200
}

// stars, turn. color variation mapped w mouseY
let star1 = {
  x: 300,
  y: 200,
  size: 100,
  fill: 1
}
let star2 = {
  x: 700,
  y: 612,
  size: 200,
  fill: 1
}
let star3 = {
  x: 750,
  y: 115,
  size: 200,
  fill: (252, 189, 227)
}
let star4 = {
  x: 140,
  y: 652,
  size: 60,
  fill: 1,
  r: 0
}
let genesis;
/**
Description of preload
*/
function preload() {
  genesis = loadSound('assets/sounds/Grimes _ Genesis.mp3');
}



function setup() {
  createCanvas(1000, 700);
  noStroke();
  canvasPressed();
}

//to activate music
function canvasPressed() {
  genesis.loop();
}



function draw() {
  backgroundColor.r = map(mouseX, 0, width, 255, 247);
  backgroundColor.g = map(mouseX, 0, width, 255, 62);
  backgroundColor.b = map(mouseX, 0, width, 255, 117);


  background(backgroundColor.r, backgroundColor.g, backgroundColor.b);

  // stars appearing
  ellipse(star1.x, star1.y, star1.size);
  ellipse(star2.x, star2.y, star2.size);
  ellipse(star3.x, star3.y, star3.size);

  push();
  star4.r = map(mouseX, 0, width, 200, 32);
  fill(star4.r, 32, 100);
  ellipse(star4.x, star4.y, star4.size);
  pop();

  ellipse(foam1.x, foam1.y, foam1.size);
  ellipse(foam2.x, foam2.y, foam2.size);


  nova1.size = nova1.size + mouseX;
  nova1.size = constrain(nova1.size, 0, 200);
  ellipse(nova1.x, nova1.y, nova1.size);

  nova2.size = nova2.size + mouseX;
  nova2.size = constrain(nova2.size, 0, 200);
  ellipse(nova2.x, nova2.y, nova2.size);

  nova3.size = nova3.size + mouseX;
  nova3.size = constrain(nova3.size, 0, 200);
  ellipse(nova3.x, nova3.y, nova3.size);
  ellipse(nova4.x, nova4.y, nova4.size);
  // push();
  fill(251, 11, 234, core1.alpha);
  ellipse(core1.x, core1.y, core1.size);
  // pop();
  ellipse(core2.x, core2.y, core2.size);
  ellipse(core3.x, core3.y, core3.size);
  ellipse(core4.x, core4.y, core4.size);
  // color appears

  //
  fill(star1.fill);
  fill(star2.fill);
  fill(star3.fill);
  fill(star4.fill);

  fill(core1.fill);
  fill(core2.fill);
  fill(core3.fill);
  fill(core4.fill);

  fill(nova1.fill);
  fill(nova2.fill);
  fill(nova3.fill);
  fill(nova4.fill);

  fill(foam1.fill);
  fill(foam2.fill);


// code for foam heartbeat mvmt
  foam1.speed = random(-2, 2);
  foam1.x = foam1.x + foam1.speed;

  foam2.speed = random(-2, 2);
  foam2.x = foam2.x + foam2.speed;


}
