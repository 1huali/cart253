/**
Flowers
Wawa Li

This started as an array exercice to end-up as a OOP exercice.
*/

"use strict";

let garden = {
  flowers : [],
  numFlowers: 20,
  grassColor: {
    r:120,
    g:180,
    b:120,
  }
}
// let garden = {
//   flowers : [],
//   numFlowers: 20
//   }
//   // Q:why in the garden variable? and not by itself?
//   // A:
// let grassColor = {
//     r:120,
//     g:180,
//     b:120,
//   }

/**
Description of setup
*/
function setup() {
createCanvas (600,600);
// background(grassColor.r,grassColor.g,grassColor.b);

for (let i=0; i < garden.numFlowers ; i ++){
  let flower= new Flower();
if (i<garden.numFlowers){
  garden.flowers.push(flower);
}
  // flower.display();

}
/**
Description of draw()
*/
function draw() {
  background(garden.grassColor.r,garden.grassColor.g,garden.grassColor.b);
  // background(grassColor.r,grassColor.g,grassColor.b);

// Q: why it wasn't respecting the max numFlower
// A:
for (let i=0; i < garden.numFlowers ; i ++){
  let flower= new Flower();
  flower.display();
}
}
}
