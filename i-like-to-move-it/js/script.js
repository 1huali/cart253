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
let backgroundColor={
  r:155,
  g:155,
  b:155
};

// dust/foam - moves quick like a heart-beat
// ellipse(500,125,70);
// ellipse(250,525,70);

let foam1={
  x:500,
  y:125,
  size:70,
  speed:10,
  fill:1
}

let foam2={
  x:250,
  y:525,
  size:70,
  speed:10,
  fill:1
}

// novas, grow and shrinks. size of big circles r mapped with mouseX
// ellipse(140,150,100);
// ellipse(140,150,50);
//
// ellipse(500,400,100);
// ellipse(500,400,70);

// ellipse(500,400,100);
// ellipse(500,400,50);

// ellipse(120,520,100);
// ellipse(120,520,60);
//
// ellipse(810,350,100);
// ellipse(810,350,50);

let core1={
  x:500,
  y:400,
  size:70,
  alpha:100,
  fill:2
}

let nova2={
  x:120,
  y:520,
  size:100,
  fill:1
}
let core2={
  x:120,
  y:520,
  size:60,
  alpha:200,
  fill:255
}
let nova3={
  x:810,
  y:350,
  size:100,
  fill:1
}
let core3={
  x:810,
  y:350,
  size:50,
  fill:255,
  alpha:200
}
let nova4={
  x:500,
  y:400,
  size:100,
  fill:1
}
let core4={
  x:500,
  y:400,
  size:50,
  fill:255,
  alpha:200
}

// stars, turn. color variation mapped w mouseY
// // stars, turn. color variation mapped w mouseY
// ellipse(300,200,100);
// ellipse(700,612,200);
// ellipse(750,175,200);
// ellipse(140,612,60);
//
// fill(247, 10, 210);

let star1={
  x:300,
  y:200,
  size:100,
  fill:1
}
let star2={
  x:700,
  y:612,
  size:200,
  fill:1
}
let star3={
  x:750,
  y:175,
  size:200,
  fill:(252, 189, 227)
}
let star4={
  x:140,
  y:612,
  size:60,
  fill:1
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
  createCanvas(1000,700);
  noStroke();
}


/**
Description of draw()
*/

function draw() {
  backgroundColor.r= map(mouseX,0,width,255,247);
  backgroundColor.g= map(mouseX,0,width,255,62);
  backgroundColor.b= map(mouseX,0,width,255,117);


  background(backgroundColor.r,backgroundColor.g,backgroundColor.b);

// stars appears
  ellipse(star1.x,star1.y,star1.size);
  ellipse(star2.x,star2.y,star2.size);
  ellipse(star3.x,star3.y,star3.size);
  ellipse(star4.x,star4.y,star4.size);
  noStroke();
  ellipse(foam1.x,foam1.y,foam1.size);
  ellipse(foam2.x,foam2.y,foam2.size);

  let nova1={
  x:500,
  y:400,
  size:0,
  fill:0
  }

  nova1.size= nova1.size+mouseX;
  nova1.size= constrain(nova1.size, 0,width);
  ellipse(nova1.x,nova1.y,nova1.size);
  ellipse(nova2.x,nova2.y,nova2.size);
  ellipse(nova3.x,nova3.y,nova3.size);
  ellipse(nova4.x,nova4.y,nova4.size);
  // push();
  fill(251,11,234,core1.alpha);
  ellipse(core1.x,core1.y,core1.size);
  // pop();
  ellipse(core2.x,core2.y,core2.size);
  ellipse(core3.x,core3.y,core3.size);
  ellipse(core4.x,core4.y,core4.size);
  // color appears
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


code for foam heartbeat mvmt
foam1.speed= random (-2,2);
foam1.x = foam1.x+ foam1.speed;

foam2.speed= random (-2,2);
foam2.x = foam2.x+ foam2.speed;


}
