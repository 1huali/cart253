/**
Dodge'Em : Venus Fly
Wan Hua Li

Better dodge those bad thoughts cos then might as well catch covid-19 init??

Exercice to put in practice mvmt variables, visuals, and conditionals.
*/

"use strict";

let backgroundShade=0;

// called covid-19 - to dodge
let flower ={
  x:0, y:250, size: 100, vx:0, vy:0, speed:3,
  fill: (){
    r:255,
    g:0,
    b:0
  }
}

// player's cursor
let fly ={
  x:0, // will mouseX
  y:0, // will mouseY
  size: 100,
  vx:0,
  vy:0,
  fill: 255
}


/**
maybe medias???
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas (windowWidth,windowHeight);
}


/**
Description of draw()
*/
function draw() {
  background(backgroundShade);

}
