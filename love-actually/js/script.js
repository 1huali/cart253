/**
Love, Actually
Wawa Li

Writing your own if-statements
Working with loops for drawing

- Allow the user to control one of the circles
Anything goes, from clicking to position it, to having it follow the mouse, to using the arrow keys, to something else
- Make the non-user circle move differently
Use random movement or Perlin noise or teleportation or something else!
- Add at least one extra function
Not including functions any built-in p5 functions like keyPressed()
Maybe you could add a function that checks if one circle has grown too large (if they grow) or shrunk too small (if they shrink), or faded too much (if their alpha fades)
- Add at least one extra ending
Maybe it could be an “easter egg” and hard to discover? (Moving the mouse to a really specific location?)
Maybe it offers a different dimension of thinking about love and loss?
Maybe it’s connected to the new function in the previous step?
*/

"use strict";

let circle1={
  x:160,
  y:320,
  size:100,
  vx:1,
  vy:1,
  speed:0,
  acceleration:0
}

let circle2 ={
  x:480,
  y:320,
  size:100,
}

let state= `title`;

let titleString= `remember what I told U`
let endingString= `I stickwitchu`

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(640,640);
}


/**
Description of draw()
*/
function draw() {
background(0);



}
