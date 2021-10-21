/**
vj baby board
Wawa Li

Proect 1
visual sound toy prototype 1
*/

"use strict";
// sound elements
let osc, playing, freq, amp;
let metronome;
// board environment. eventually add instructions
let mode = `DARK MODE`;
let uiForeground = 255;
let uiBackground = 0;

let modeButton = {
  x: 100,
  y: 500,
  w: 200,
  h: 150,
}

let queue = {
  x: undefined,
  y: undefined,
  size: undefined,
  h1: 100,
  s1: 100,
  b1: 100,
  rev1: 1,
}

let disk = {
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
  // code inspired from https://p5js.org/reference/#/p5.Oscillator
  osc = new p5.Oscillator('sine');

// NOISE BUTTON learned from 2 parts videos https://www.youtube.com/watch?v=7_jNZLu_6H8
let drawButton = createButton('release noise');
drawButton.position(3.6*width/12,580);
drawButton.size();


  // QUEUE NEXT zone size
  queue.x = width / 12;
  queue.y = 2 * height / 10;
  queue.size = 200;

  // HUE-MAIN DISK
  disk.x = 3 * width / 4;
  disk.y = height / 2;
  disk.size = 200;

  noStroke();
  ellipseMode(RADIUS);
  colorMode(HSB, 360, 100, 100);
  frameRate(60);


  // box
    let textBox = createInput(``);
    textBox.position(180,530);
    textBox.size(380,40);
    textBox.input(myInputEvent);
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
   pop();

   push();
   fill(uiForeground);
   textStyle(BOLD);
// bouton DARK/LIGHT
   text(mode, 100, 580);
   pop();


   oscPressed ();


  displayNextQueue();
  displayDisk();
  displayNowColor();

  // Disk - gradient
  for (let x = 0; x <= width; x += queue.size) {
    drawGradient(queue.x, height / 2);
  }

  colorhue();
  sat();
  colorNext();
  sat1();


// change for queue bar function
function drawGradient(x, y) {
  let radius = disk.size;
  let h = disk.h;
  for (let r = radius; r > 0; --r) {
    fill(h, disk.s, disk.b);
    ellipse(disk.x, disk.y, r);
    h = (h + 0.6) % 360;
  }



//values for amp freq hue bright
bright = constrain(map(disk.s,0, 100, 0,100),0,100);
hue= map(disk.h,0,360,0,360);
freq = constrain(map(mouseX, disk.x-disk.size,disk.size+disk.x,100,500),100,500);
amp = constrain(map(mouseY,disk.y-disk.size,disk.y+disk.size, 0, 1),0, 1);


  displaySettingsTxt();


  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

} //draw end

function oscPressed (){
  let d = dist(disk.x,disk.y,mouseX,mouseY);
  if (d < disk.size){
    playOscillator();
  }
}

// hue.queue bar
function colorNext() {
  constrain(queue.h1, 0, 360);
  if (queue.h1 === 360) {
    queue.h1 = 0;
  }

  if (queue.h1 === 0) {
    queue.h1 = 360;
  }
}
// hue.Disk
function colorhue() {
  if (keyIsDown(RIGHT_ARROW)) {
    disk.h += 1;
  } else if (keyIsDown(LEFT_ARROW)) {
    disk.h -= 1;
  }
  constrain(disk.h, 0, 360);

  if (disk.h === 360) {
    disk.h = 0;
  }

  if (disk.h === 0) {
    disk.h = 360;
  }
}


// lame functionality
function bright() {
  disk.b = mouseY;
  constrain(disk.b, 0, 360);
}
 function bright1() {
  queue.b1 = mouseX;
  constrain(queue.b1, 0, 360);
}


// Adjust brightness
function sat1() {
  if (keyIsDown(UP_ARROW)) {
    queue.s1 += 1;
  } else if (keyIsDown(DOWN_ARROW)) {
    queue.s1 -= 1;
  }
  constrain(queue.s1, 0, 100);
}
// sat.Disk
function sat() {
  if (keyIsDown(UP_ARROW)) {
    disk.s += 1;
  } else if (keyIsDown(DOWN_ARROW)) {
    disk.s -= 1;
  }
  constrain(disk.s, 0, 100);
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


// QUEUE : PLAYING NOW
function displayNowColor() {
  rect(width / 12, height / 10, 400, 30);
  fill(uiForeground);
  text('PLAYING NOW', width / 12, height / 13)
}

function displaySettingsTxt() {
  push();
  fill(uiForeground);
  text('STRESSFUL SOUNDS', width/12, 175);
  text('This was supposed to be a therapeutic project', width/12, 190);
  text('but as we all know what emerge when we chase', width/12, 205);
  text('peace?                                           chaos.', width/12, 220);


    text('REAL-TIME STRESS DATA', width/12, 250);
    text('Hz: ' + freq, width/12, 275);
    text('amp: ' + amp,width/12, 300);
    text('bright: ' + bright,width/12, 325);
    text('press Up/Down to adjust',4*width/12, 325);

    text('hue: ' + hue,width/12, 350);
    text('press lKey/rKey to adjust', 4*width/12, 350);

    text("x: "+mouseX, width/12, 375);
    text("y: "+mouseY, width/12, 400);
    text("Real-time Inputs : ", width/12, 425);
    text('amp/volume min', width / 4*2.9,20 )
    text('amp/volume max', width / 4*2.9, 580)
    text("SCRATCH", disk.x-29, disk.y)
  pop();

  push();
  fill(uiForeground);
  textSize(20);
  text('+', 960,500)
  text('-', 960,100)
  text('0', 540,100)
  text('1', 540,500)
  pop();
}

// upcoming : color queue
function displayNextQueue() {
  fill(queue.h, queue.s, queue.b);
  rect(queue.x, queue.y, 400, 30);
  push();
  fill(uiForeground);
  text('NEXT UP', width / 12, 2.3 * height / 12)
  pop();
}
// main disk
function displayDisk() {
  fill(disk.h, disk.s, disk.b);
  ellipse(disk.x, disk.y, disk.size);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
   textBox.position(30, 60)
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
