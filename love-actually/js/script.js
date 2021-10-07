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
  fill:255,
  speed:0,
  acceleration:0
}

let circle2 ={
  x:480,
  y:320,
  fill:255,
  size:100,
}

let state= `title`;

let titleString= `remember when I told U`
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


if (state=== `title`){
  title();
}

if (state=== `love`){
  display();
  u();
  me();
}

let d= dist(circle1.x,circle1.y,circle2.x,circle2.y)

if (d < circle2/2){
  state=`ending`;
}


}


//components
function display(){
fill(circle1.fill);
noStroke;
ellipse(circle1.x,circle1.y,circle1.size);


fill(circle2.fill);
noStroke;
ellipse(circle2.x,circle2.y,circle2.size);
}

function title(){
  textSize(32);
  fill(255);
  text(titleString,70, 7*height/8)
}

function ending(){
  textSize(32);
  fill(255);
  text(endingString,70, 7*height/8)
}


function u(){
  circle.vx= circle2.speed;
  circle.vy=circle2.speed;

  circle2.x= circle2.x+circle2.vx;
  circle2.y= circle2.y+circle2.vy;

  circle2.x=random(0,width);
  circle2.y=random(0,height);


  //circle2 accelerates when touches the walls
  if (circle2.x>width){
    circle2.speed+=circle2.acceleration;
    circle2.speed= -circle2.speed
  }

  if (circle2.x<0) {
      circle2.speed+=circle2.acceleration;
      circle2.speed= circle2.speed
    }

  if (circle2.y<0) {
        circle2.speed+=circle2.acceleration;
        circle2.speed= circle2.speed
      }

  if (circle2.y>height) {
            circle2.speed+=circle2.acceleration;
            circle2.speed= -circle2.speed
          }
}

function me(){
  circle1.x=mouseX;
  circle1.y=mouseY;
}

function mouseIsPressed(){
  if (state===`title`);
  state=`love`;
}
