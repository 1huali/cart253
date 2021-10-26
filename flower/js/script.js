/**
Flowers
Wawa Li

This started as an array exercice to end-up as a OOP exercice.
*/

"use strict";

let garden = {
  flowers : [],
  numFlowers: 20,
grassColor : {
    r:120,
    g:180,
    b:120,
  }
}
/**
Description of setup
*/
function setup() {
createCanvas (600,600);

}
/**
Description of draw()
*/
function draw() {
background(garden.grassColor.r,garden.grassColor.g,garden.grassColor.b);

for (let i=0; i < garden.numFlowers ; i ++){
  let flower= new Flower();
    let flower = garden.flowers[i];

  flower.display();
}
}
// its not working lol
