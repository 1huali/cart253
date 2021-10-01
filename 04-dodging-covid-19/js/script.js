/**
Dodge'Em : Venus Fly
Wan Hua Li

Better dodge those bad thoughts cos then might as well catch covid-19 init??

Exercice to put in practice mvmt variables, visuals, and conditionals.
*/

"use strict";

let backgroundShade=0;
let numStatic = 5000;

let butterflyImage;
let sundewImage;


// called covid-19 - to dodge
let covid19 ={
  x:0, y:250, size: 60, vx:0, vy:0, speed:3,
  fill: {
    r:240,
    g:29,
    b:85
// 240, 29, 85
  }
};

// player's cursor
let user ={
  x:0, // will mouseX
  y:0, // will mouseY
  size: 10,
  fill: 255
}


/**
maybe medias???
*/
function preload() {
  sundewImage = loadImage("assets/images/sundew.jpeg");
  // sundewImage = loadImage("assets/images/sundews.gif.crdownload");
  butterflyImage= loadImage("assets/images/butterflies.gif");


  }



/**
Description of setup
*/
function setup() {
  createCanvas (windowWidth,windowHeight);

  covid19.y = random(0,height);
  covid19.vx=covid19.speed;

  noCursor();
}


/**
Description of draw()
*/
function draw() {
  background(sundewImage);

imageMode(CENTER);
image(butterflyImage,mouseX,mouseY);

  // // pippin wanted 2add some static
  // for (let i=0 ; i < numStatic ; i++){
  //   let x=random(0,width);
  //   let y=random(0,height);
  //   stroke(255);
  //   point(x,y);
  // }

// covid19 mvmt - would be lvl 1
// if(covid19.x > width){
//   covid19.x=-covid19.speed;
//   covid19.y= random(0,height);
// }

// trying bounce back - would b lvl 2
if(covid19.x > width){
  covid19.vx=-covid19.speed;
  covid19.y=random(0,height);
}

if(covid19.x < 0){
  covid19.vx=covid19.speed;
  covid19.y= random(0,height);
}


  covid19.x=covid19.x+covid19.vx;
  covid19.y= covid19.y+covid19.vy;


// user movement
  user.x=mouseX;
  user.y=mouseY;

//check for covid19. declared here cos no need b4
let d= dist(user.x, user.y,covid19.x,covid19.y);

if (d < covid19.size/2 + user.size/2){ //help need explain
  noLoop();
}

// display covid19
push();
  fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
  ellipse (covid19.x, covid19.y, covid19.size);
pop();

//display user
fill(user.fill);
ellipse(user.x,user.y,user.size);

  }
