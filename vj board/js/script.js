/**
vj baby board
Wawa Li

Proect 1
Primitive visual joker board
*/

"use strict";
// board environment. eventually add instructions
// let bg= 0;
let state = 'dark mode';
let osc, playing, freq, amp;
// queue
let disk1 = {
  x: undefined,
  y: undefined,
  size: undefined,
  h1: 100,
  s1: 100,
  b1: 100,
  rev1: 1,
}

let disk2 = {
  x: undefined,
  y: undefined,
  size: undefined,
  h: 100,
  s: 100,
  b: 100,
  rev: 1,
}


//LIGHT
let lightsOffString = "Dark Mode";
let lightsOnString = "Light Mode";

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(1000, 600);
  osc = new p5.Oscillator('sine');
//   let disk = ellipse (disk2.x,disk2.y,disk2.size);
// disk.mousePressed(playOscillator);
// osc = new p5.Oscillator('sine');


// NOISE BUTTON learned from 2 parts videos https://www.youtube.com/watch?v=7_jNZLu_6H8
let drawButton = createButton('noise');
drawButton.mousePressed(noise(disk2.h));
drawButton.position(2.1*width/12,300);
drawButton.size();


  // bgSlider = createSlider(0, 255, 100);
  // bgSlider.position(500, 500);
  // bgSlider.style('width', '20px');

  // QUEUE NEXT zone size
  disk1.x = width / 12;
  disk1.y = 2 * height / 10;
  disk1.size = 200;
  // HUE-MAIN DISK
  disk2.x = 3 * width / 4;
  disk2.y = height / 2;
  disk2.size = 200;

  noStroke();
  ellipseMode(RADIUS);
  colorMode(HSB, 360, 100, 100);
  frameRate(60);
}


/**
Description of draw()
*/
function draw() {
  // background(bg)
  if (state === 'dark mode') {
    darkMode();
  }
if (keyCode === 16) {
    state === 'light mode';
  }

  switch (state) {
    case 'dark mode':
      darkMode();
      break;

    case 'light mode':
      lightMode();
      break;
  }

  // lightsMode ();

  // careful for order
  displayNextQueue(); // linked w disk1 presettings (to change) + this has to be called before bbLight
  displayDisk2();
  displayNowColor(); // nothing before this cos then will fuck up
  displayNextColor();
  // Main Disk - gradient
  for (let x = 0; x <= width; x += disk1.size) {
    drawGradient(disk1.x, height / 2);
  }
  // allows D.2 to have gradient. if u want this back you'll have to draw an ellipse.
  // for (let x = 0; x <= width; x += disk2.size) {
  //     drawGradient1(disk2.x, height / 2);
  //   }


  // DISPLAY properties;
  // bright();
  colorhue();
  sat();
  // bright1();
  colorhue1();
  sat1();
  // backgroundSlider();
}


function drawGradient1(x, y) {
  let radius = disk1.size;
  let h = disk1.h1;
  for (let r = radius; r > 0; --r) {
    fill(h, disk1.s1, disk1.b1);
    ellipse(disk1.x, disk1.y, r);
    h = (h + 0.6) % 360;
  }
}

function drawGradient(x, y) {
  let radius = disk2.size;
  let h = disk2.h;
  for (let r = radius; r > 0; --r) {
    fill(h, disk2.s, disk2.b);
    ellipse(disk2.x, disk2.y, r);
    h = (h + 0.6) % 360;
  }



// calculators of values for amp freq hue bright
bright = constrain(map(disk2.s,0, 100, 0,100),0,100);
hue= map(disk2.h,0,360,0,360);
freq = constrain(map(mouseX, 0, width,100,500),100, 500);
amp = constrain(map(mouseY,0, height, 0, 1),0, 1);


  displaySettingsTxt();

  //  action to trigger oscillator to play
    if (mouseIsPressed){
      playOscillator();
    }

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
noiseClicked ();

    //
} //fin draw

function noiseClicked (){
  let d = dist(3 * width / 4,height / 2,mouseX,mouseY);
  if (d > 100){
    playOscillator();
  }
  if (d < 200){
    playOscillator();
  }
}

// // HUE (sound-color concept)
// hue.D1
function colorhue1() {
  constrain(disk1.h1, 0, 360);
  if (disk1.h1 === 360) {
    disk1.h1 = 0;
  }

  if (disk1.h1 === 0) {
    disk1.h1 = 360;
  }
}
// hue.D2
function colorhue() {
  if (keyIsDown(RIGHT_ARROW)) {
    disk2.h += 1;
  } else if (keyIsDown(LEFT_ARROW)) {
    disk2.h -= 1;
  }
  constrain(disk2.h, 0, 360);

  if (disk2.h === 360) {
    disk2.h = 0;
  }

  if (disk2.h === 0) {
    disk2.h = 360;
  }
}

// volume, brightness ---- brightness kinda suck, should replace w speed, and saturation
// bright.D2
function bright() {
  disk2.b = mouseY;
  constrain(disk2.b, 0, 360);
}
// bright.D1
function bright1() {
  disk1.b1 = mouseX;
  constrain(disk1.b1, 0, 360);
}


// // saturation (volume??)
// sat.D1
function sat1() {
  if (keyIsDown(UP_ARROW)) {
    disk1.s1 += 1;
  } else if (keyIsDown(DOWN_ARROW)) {
    disk1.s1 -= 1;
  }
  constrain(disk1.s1, 0, 100);
}
// sat.D2
function sat() {
  if (keyIsDown(UP_ARROW)) {
    disk2.s += 1;
  } else if (keyIsDown(DOWN_ARROW)) {
    disk2.s -= 1;
  }
  constrain(disk2.s, 0, 100);
}


// // BUTTONS functions
// NEXT QUEUE
function displayNextColor() {
  push();
  ellipse(width / 12, 4 * height / 10, 20);
  // noStroke();
  fill(0);
  pop();
}

// play oscillator
function playOscillator() {
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}


//// Display functions

// QUEUE : PLAYING NOW
function displayNowColor() {
  rect(width / 12, height / 10, 400, 30);
  // noStroke();
  fill(255);
  text('PLAYING NOW', width / 12, height / 13)
}

// function lightsMode() {
//   background(bg);
// if (background === 255){
//   push();
//   textStyle (BOLD);
//   textSize (20);
//   text('LIGHT MODE', 300,40)
//   fill(0);
//   pop();
//   }
//   else if (background === 0){
//     push();
//     textStyle (BOLD);
//     textSize(20);
//     text('DARK MODE', 300,40)
//     fill(255);
//     pop();
//   }
// }

// switch state lights
function darkMode() {
  background(0);
  push();
  textStyle (BOLD);
  fill(255);
  text('DARK MODE', 900, 40)
  textSize(10);
  pop();
}

function lightMode() {
  background(255);
  push();
  textStyle (BOLD);
  fill(0);
  text('LIGHT MODE', 900, 40)
  textSize(10);
  pop();
}

function displaySettingsTxt() {
  push();
  fill(255);
    text('tap to play', width/12, 250);
    text('freq: ' + freq, width/12, 275);
    text('amp: ' + amp,width/12, 300);
    text('bright: ' + bright,width/12, 325);
    text('hue: ' + hue,width/12, 350);
    text('amp/volume min', width / 4*2.9,20 )
    text('amp/volume max', width / 4*2.9, 580)
    text('+', 960,500)
    text('-', 960,100)
  pop();
}

// upcoming : color queue
function displayNextQueue() {
  fill(disk1.h, disk1.s, disk1.b);
  rect(disk1.x, disk1.y, 400, 30);
  push();
  fill(255);
  text('NEXT UP', width / 12, 2.3 * height / 12)
  pop();
}
// main disk
function displayDisk2() {
  fill(disk2.h, disk2.s, disk2.b);
  ellipse(disk2.x, disk2.y, disk2.size);
}

function noiseHue (){
  if (drawButton.mouseClicked) {
  noise(disk2.h)
  }
}

function noiseButton(){
push();
  rect(1.7 * height / 12,2*width/12,30,30)
  fill(0);
  stroke(255);
  pop();
}
