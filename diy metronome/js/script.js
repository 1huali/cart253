/**
Bark Metronome
Wawa Li

arrays exercice with sound
*/

"use strict";
let bark;
let bgColor = (20,20,20);
let rates = [-1,-1.5,-2,1,1.5,2];

/**
Description of preload
*/
function preload() {
bark = loadSound(`assets/sounds/bark.wav`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(600,600);
}


/**
Description of draw()
*/
function draw() {
background(bgColor);
// supposed to show the current rate
console.log('dogs are barking at'+rates+"rate");
}

function mousePressed(){
  let barkRate= random(rates);

  bark.rate(barkRate);
  bark.play();
}
