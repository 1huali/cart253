/**
vj baby board
Wawa Li

Proect 1
Primitive visual joker board
*/

"use strict";
// sound elements
let osc, playing, freq, amp;
// board environment. eventually add instructions
let mode = `DARK MODE`;
let uiForeground = 255;
let uiBackground = 0;

let modeButton = {
  x: 100,
  y: 500,
  w: 200,
  h: 150,
  // text: `DARK/LIGHT MODE`
}

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


// NOISE BUTTON learned from 2 parts videos https://www.youtube.com/watch?v=7_jNZLu_6H8
let drawButton = createButton('noise');
drawButton.mousePressed(noise(disk2.h));
drawButton.position(2.1*width/12,300);
drawButton.size();



// input box
  let inp = createInput('');
  inp.position(2.1*width/12,450);
  inp.size(350,100);
  inp.input(myInputEvent);



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
// bg settings
  background(uiBackground);

   push();
   noStroke();
   stroke(uiForeground);
   // rect(modeButton.x, modeButton.y, modeButton.w, modeButton.h);
   // text(modeButton.text, modeButton.x, modeButton.y + modeButton.h/2);
   pop();

   push();
   fill(uiForeground);
   textStyle(BOLD);
// bouton DARK/LIGHT
   text(mode, 100, 580);
   pop();

  // careful for order
  displayNextQueue(); // linked w disk1 presettings (to change) + this has to be called before bbLight
  displayDisk2();
  displayNowColor(); // nothing before this cos then will fuck up
  // lilCirle();
  // Main Disk - gradient
  for (let x = 0; x <= width; x += disk1.size) {
    drawGradient(disk1.x, height / 2);
  }


  // DISPLAY properties;
  // bright();
  colorhue();
  sat();
  // bright1();
  colorhue1();
  sat1();


//
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
freq = constrain(map(mouseX, disk2.x-disk2.size,disk2.size+disk2.x,100,500),100,500);
amp = constrain(map(mouseY,disk2.y-disk2.size,disk2.y+disk2.size, 0, 1),0, 1);


  displaySettingsTxt();


  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}
} //fin draw

function mousePressed (){
  let d = dist(disk2.x,disk2.y,mouseX,mouseY);
  if (d < disk2.size){
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
//
function lilCirle() {
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
  fill(uiForeground);
  text('PLAYING NOW', width / 12, height / 13)
}

function displaySettingsTxt() {
  push();
  fill(uiForeground);
    text('TAP DISK TO PLAY', width/12, 250);
    text('freq: ' + freq, width/12, 275);
    text('amp: ' + amp,width/12, 300);
    text('bright: ' + bright,width/12, 325);
    text('hue: ' + hue,width/12, 350);
    text('amp/volume min', width / 4*2.9,20 )
    text('amp/volume max', width / 4*2.9, 580)
  pop();

  push();
  fill(uiForeground);
  textSize(20);
  text('+', 960,500)
  text('-', 960,100)
  pop();
}

// upcoming : color queue
function displayNextQueue() {
  fill(disk1.h, disk1.s, disk1.b);
  rect(disk1.x, disk1.y, 400, 30);
  push();
  fill(uiForeground);
  text('NEXT UP', width / 12, 2.3 * height / 12)
  pop();
}
// main disk
function displayDisk2() {
  fill(disk2.h, disk2.s, disk2.b);
  ellipse(disk2.x, disk2.y, disk2.size);
}

// function noiseHue (){
//   if (drawButton.mouseClicked) {
//   noise(disk2.h)
//   }
// }

// rond blanc
function noiseButton(){

}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function mousePressed() {
  if (mouseX > modeButton.x && mouseX < modeButton.x + modeButton.w && mouseY > modeButton.y && mouseY < modeButton.y + modeButton.h) {
    if (mode === `DARK MODE`) {
      mode = `LIGHT MODE`;
      uiForeground = 0;
      uiBackground = 255;
    }
    else if (mode === `LIGHT MODE`) {
      mode = `DARK MODE`;
      uiForeground = 255;
      uiBackground = 0;
    }
  }
}
