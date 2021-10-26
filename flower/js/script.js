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
    b:120
  }
}
// let garden = {
//   flowers : [],
//   numFlowers: 20
//   }
//   // Q:why in the garden variable? and not by itself?
//   // A: Couldn't be in setup because we need to push
// let grassColor = {
//     r:120,
//     g:180,
//     b:120,
//   }

/**
Description of setup
*/
function setup() {
createCanvas(600,600);
console.log("canvas created")

for (let i=0; i < garden.numFlowers ; i ++){
  let flower= new Flower();
  garden.flowers.push(flower);
  console.log("flowers created")
}
/**
Description of draw()
*/
function draw() {
  // Q: bg not creating
  // A: 
  // background(garden.grassColor.r,garden.grassColor.g,garden.grassColor.b);
  background(120,180,120);
  console.log("bg created");

// Q: why it wasn't respecting the max numFlower
// A:cos U created flowers in draw whereas it should be in setup (created once, behaving multiple times)
for (let i=0; i < garden.numFlowers ; i ++){
  let flower= new Flower();
  flower.display();
  // garden.flowers.push(flower);

}
}
}
