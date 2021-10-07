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

//Player circle1//
let circle1={
  x:160,
  y:320,
  size:100,
  vx:0.05,
  vy:0.05,
  fill:255,
  // speed:0,
  // acceleration:0
}

//Enemy circle2//
let circle2 ={
  x:0,
  y:0,
  fill:255,
  size:100,
  vx:5,
  vy:5,
  speed:0,
  acceleration:0
}

//Game State//
let state= `title`;

//String Variables//
let titleString= `remember what I told U?`;
let subtitleString= `PRESS '♡' TO START `;
let endingString= `i stickwitchu`;
let meString=`me`;
let uString=`U`;

//Preloaded assets//
function preload() {

}

//Controls which section the game is currently in//
function gameState() {

  if (state === `title`){
    title();
    subtitle();
  }

  if (state === `love`){
    enemy();
    player();
    collisionDetection();
  }

  if (state === `ending`) {
    ending();
  }
}

//Detects if player and enemy cicles collide//
function collisionDetection() {
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y)

  //If collision occurs, go to ending screen//
  if (d < circle2.size / 2){
    state = `ending`;
  }
}

//Title state visual assets//
function title(){

  textSize(32);
  fill(255);
  text(titleString,70, 7*height/8);
}

function subtitle(){

  textSize(25);
  fill(255);
  text(subtitleString,70, 600);
}

//Ending state visual assets//
function ending(){

  textSize(32);
  fill(255);
  text(endingString,70, 7*height/8);
}

//Enemy Circle//
function enemy(){

  push();
  fill(circle2.fill);
  noStroke();
  // ellipse(circle2.x,circle2.y,circle2.size);
  text(uString,circle2.x,circle2.y);
  pop();

  circle2.x += circle2.vx;
  circle2.y += circle2.vy;



   if (circle2.x > width) {
     circle2.x= random(0,width);
    circle2.vx = -circle2.vx;
    }

    if (circle2.x < 0) {
      circle2.x= random(0,width);
      circle2.vx = -circle2.vx;
    }

  if (circle2.y > height) {
    circle2.y= random(0,height);
    circle2.vy = -circle2.vy;
    }

  if (circle2.y < 0) {
    circle2.y= random(0,height);
    circle2.vy = -circle2.vy;
    }

}

//Player Circle//
function player(){

  //Draws circle at mouse//
  circle1.x=mouseX;
  circle1.y=mouseY;

  //Draws player circle//
  push();
  fill(circle1.fill);
  noStroke();
  text(meString,circle1.x,circle1.y);
  // ellipse(circle1.x,circle1.y,circle1.size);
  pop();
}

//Checks to see if mousePressed//
function mousePressed(){
  if (state===`title`){
      state=`love`;
  }
  if (state===`ending`){
    state=`title`
  }
}

//Called only once at beginning of program//
function setup() {
  createCanvas(640,640);
}

//Called every frame//
function draw() {
  background(0);

  gameState();
}
