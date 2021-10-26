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

for (i=0; i < numFlowers ; i ++){
  random()
}
}
