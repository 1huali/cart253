/**
Title of Project
Wawa Li

Best of both world:  帝女花, the 2021 Remix

*/

"use strict";
let state = 'start';
let doll = {
  x: 600,
  y: 200,
  size: 200,
}

let nextButton = {
  x: 1150,
  y: 350,
  w: 65,
}

let musicButton ={
  x: 200,
  y: 350,
  w: 65,
}

let hairstyles = [];
let hairImg = [];
let hairClicked = false;

/**
Description of preload
*/
function preload() {
  // for (let i=0; i< hairstylesNum; i++){
  // how to assign an image to a hairstyle? do we call it in the class or script?
  hairImg.push(loadImage('assets/images/hair1.png'));
  hairImg.push(loadImage('assets/images/hair2.png'));
  hairImg.push(loadImage('assets/images/hair3.png'));
  hairImg.push(loadImage('assets/images/hair4.png'));
  hairImg.push(loadImage('assets/images/hair5.png'));
song = loadSound('assets/sounds/Nightcore - Angel With A Shotgun.mp3');
}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // for (let i=0; i< hairstylesNum; i++){
  // }

  // calling the img
  hairstyles.push(new Hairstyles(900, 100, hairImg[0]));
  hairstyles.push(new Hairstyles(900, 200, hairImg[1]));
  hairstyles.push(new Hairstyles(900, 300, hairImg[2]));
  hairstyles.push(new Hairstyles(900, 400, hairImg[3]));
  hairstyles.push(new Hairstyles(900, 500, hairImg[4]));
}

function displayModel() {
  push();
  fill(255);
  ellipse(doll.x, doll.y, doll.size);
  pop();
}

function displayMusicButt(){

}

function displayNextButt() {
  let button = createButton('Next : The fit');
  button.position(nextButton.x, nextButton.y, nextButton.w);
  // button.mousePressed(`next`);
  //      state=`next`
}
// }

function mouseReleased() {
  console.log(this.monoClick);
  for (let i = 0; i < hairstyles.length; i++) {
    console.log(i, hairstyles[i].monoClick);
    hairstyles[i].monoClick = false;
  }
  hairClicked = false;
}

function reset() {
  hairstyles = [];
  hairstyles.push(new Hairstyles(600, 100, hairImg[0]));
  hairstyles.push(new Hairstyles(600, 200, hairImg[1]));
  hairstyles.push(new Hairstyles(600, 300, hairImg[2]));
  hairstyles.push(new Hairstyles(600, 400, hairImg[3]));
  hairstyles.push(new Hairstyles(600, 500, hairImg[4]));
}

function resetButton() {
  push();
  fill(0);
  noStroke();
  ellipse()
  pop();
}

// https://library.superhi.com/posts/how-to-paint-with-code-creating-paintbrushes
// why the line is not drawing
function brush() {
  // set the color and weight of the stroke
  stroke(0, 0, 0, 255)
  strokeWeight(2)

  // draw a line from current mouse point to previous mouse point
  line(mouseX, mouseY, pmouseX, pmouseY)
}


function displayText(message) {
  push();
  fill(250, 142, 193);
  textSize(24);
  textAlign(CENTER, CENTER);
  textSize(24);
  text(message, width / 2, height / 2);
  stroke(2);
  pop();
}

function start() {
  displayText("Dont cry princess, u get the best of both world while he is away. PRESS SPACE TO START");
}

function keyPressed() {
  if (keyCode === 32) {
    state = `game`;
  }
}

function checkNext() {
  // should be mouseIsPressed but now there are too many
  //user press Next button)
  displayNextButt();
  // let d = dist(mouseX, mouseY, nextButton.x, nextButton.y);
  function mousePressed() {
    // if mousePressed() {
    // if (d < nextButton.size / 2) {
      console.log(`transition  end state`);
      state === `next`;
    // end();
    }
  }
// }

function end() {
  displayText(`Sorry princess, low funding. Come back after few gigs`);
  push();
  fill(255, 0, 0);
  pop();
  if (keyCode === 32) {
    state = `next`;
  }
}

function game() {
  displayModel();
  console.log(`game state`)
  for (let i = 0; i < hairstyles.length; i++) {
    hairstyles[i].displayHair();
    hairstyles[i].drag();
  }

  // 2 times mouseIsPressed is acting up
  if (mouseIsPressed) {
    brush()
  }
}

/**
Description of draw()
*/
function draw() {
  background(0);

  if (state === `start`) {
    start();
  } else if (state === `game`) {
    game();
    checkNext();

  } else if (state === `next`) {
    end();
  }
} //end draw
