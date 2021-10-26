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

// Here we are using numFlower cos we don't want to refer 2the whole list,
// just the amount of flower in the garden.
for (let i=0; i < garden.numFlowers ; i ++){
  let flower= new Flower();
  garden.flowers.push(flower);
  console.log("flowers created")
}
}
/**
Description of draw()
*/
function draw() {
  // Q: bg not creating
  // A: missed at setup's closing bracket
  background(garden.grassColor.r,garden.grassColor.g,garden.grassColor.b);
  console.log("bg created");

// Loop thru all the array and display them

// Q: why it wasn't respecting the max numFlower
// A:cos U created flowers in draw whereas it should be in setup (created once, behaving multiple times)

// Here we are refering to the list cos we,
// want to refer to the objects in this list and its amount as maximum - we are creating.
for (let i=0; i < garden.flowers.length ; i ++){
  let flower = garden.flowers[i];
  flower.display();
  console.log("flower displayed");
}
}
