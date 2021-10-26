/**
Flowers
Wawa Li

This started as an array exercice to end-up as a OOP exercice.
*/

"use strict";

let garden = {
  flowers : [],
  numFlowers: 20,
  grassColor={
    r:120,
    g:180,
    b:120,
  }
};
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
background(grassColor.r,grassColor.g,grassColor.b);

for (i=0; i < garden.numFlowers ; i ++){
  let flower= createFlower;
  garden.flowers.push(flower);
}
}

function createFlower(){
  let flower ={
    x: random(0,width),
    y: random(0,height),
    size:50,
    petalThickness: 10,
    stemLength:75,
    stemThickness:10,
    stemColor: {
      r:50,
      g:150,
      b:50
    }
    petalColor = {
      r:200,
      g:50,
      b:50,
    }
    centerColor = {
      r:50,
      g:0,
      b:0
    }
    }
    }
