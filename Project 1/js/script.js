/**
HS simulation board
Wawa Li

Hyper-Sensibility simulation prototype01
An attempt to explain the effect light
has on hypersensitive people in comparison with sound
*/

"use strict";
// sound elements
let osc, playing, freq, vol;
let textBox;
// board environment. eventually add instructions
let mode = `QUIET MODE`;
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
obj: switch button, queue color, playing color, text box
code inspired from https://p5js.org/reference/#/p5.Oscillator,
2 parts videos https://www.youtube.com/watch?v=7_jNZLu_6H8,
*/
function setup() {
  createCanvas(1000, 600);
  osc = new p5.Oscillator('sine');


  let drawButton = createButton('ALTERNATIVE');
  drawButton.position(295, 580);
  drawButton.size();


  // QUEUE NEXT
  queue.x = width / 12;
  queue.y = 2 * height / 10;
  queue.size = 200;

  // MAIN DISK
  disk.x = 3 * width / 4;
  disk.y = height / 2;
  disk.size = 200;

  noStroke();
  ellipseMode(RADIUS);
  colorMode(HSB, 360, 100, 100);
  frameRate(60);


  // BOX
  textBox = createInput(``);
  textBox.position(295, 480);
  textBox.size(380, 40);
  textBox.input(displayText);
}



/**
gradient disk, text elements (vol, freq)
codes inspired by inspired by https://p5js.org/examples/color-radial-gradient.html
*/
function draw() {
  background(uiBackground);

  push();
  noStroke();
  stroke(uiForeground);
  pop();

  push();
  fill(uiForeground);
  textStyle(BOLD);

  // bouton QUIET/LOUD
  text(mode, 100, 580);
  pop();

  oscPressed();
  displayNextQueue();
  displayDisk();
  displayNowColor();

  // Disk
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

    bright = constrain(map(disk.s, 0, 100, 0, 100), 0, 100);
    hue = map(disk.h, 0, 360, 0, 360);
    freq = map(mouseX, disk.x - disk.size, disk.size + disk.x, 100, 500);
    vol = constrain(map(mouseY, disk.y - disk.size, disk.y + disk.size, 0, 1), 0, 1);

    displaySettingsTxt();
    displayText()

    if (playing) {
      osc.freq(freq, 0.1);
      osc.amp(vol, 0.1);
    }
  }
}

function oscPressed() {
  let d = dist(disk.x, disk.y, mouseX, mouseY);
  if (d < disk.size) {
    playOscillator();
  }
}

function colorNext() {
  constrain(queue.h1, 0, 360);
  if (queue.h1 === 360) {
    queue.h1 === 0;
  }

  if (queue.h1 === 0) {
    queue.h1 === 360;
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
    disk.h === 0;
  }
  if (disk.h === 0) {
    disk.h === 360;
  }
  if (queue.h1 > 360) {
    push();
    fill(uiForeground);
    text("go back", 90, 350);
    pop();
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
  osc.amp(0, 0.5);
  playing = false;
}


// PLAYING NOW
function displayNowColor() {
  rect(80, height / 10, 400, 30);
  fill(uiForeground);
  text('PLAYING NOW', 80, height / 13)
}

function displaySettingsTxt() {
  textInstructions();
  textData();

  text('volume mute', width / 4 * 2.9, 20);
  text('volume max', width / 4 * 2.9, 580);
  text("OVERLOAD", disk.x - 32, disk.y);
  text("TOUCH DISK TO START",  4*80, 300)

  pop();

  push();
  fill(uiForeground);
  textSize(20);
  text('+', 960, 500)
  text('-', 960, 100)
  text('0', 540, 100)
  text('1', 540, 500)
  pop();
}

// upcoming : color queue
function displayNextQueue() {
  fill(queue.h, queue.s, queue.b);
  rect(queue.x, queue.y, 400, 30);
  push();
  fill(uiForeground);
  text('NEXT UP', 80, 2.3 * height / 12)
  pop();
}
// main disk
function displayDisk() {
  fill(disk.h, disk.s, disk.b);
  ellipse(disk.x, disk.y, disk.size);
}

function displayText() {
  console.log('you are typing: ', textBox.value());

  push();
  // clear();
  fill(uiForeground);
  noStroke();
  textSize(20);
  text(textBox.value(), 600, 400);
  pop();
}

function mousePressed() {
  if (mouseX > modeButton.x && mouseX < modeButton.x + modeButton.w && mouseY > modeButton.y && mouseY < modeButton.y + modeButton.h) {
    if (mode === `QUIET MODE`) {
      mode = `LOUD MODE`;
      uiForeground = 0;
      uiBackground = 255;
    } else if (mode === `LOUD MODE`) {
      mode = `QUIET MODE`;
      uiForeground = 255;
      uiBackground = 0;
    }
  }
}

function textInstructions() {
  push();
  fill(uiForeground);
  text('PROTOTYPE 01: attempt to simulate', 80, 175);
  text('visual hypersensibility', 80, 190);
  text('(light = sound)', 80, 205);
  // text('PROTOTYPE01', 80, 220);
  text('click anywhere around the disk to mute', width / 4 * 2.65, 570);
  text('press Left/Right Key', 4 * 80, 350);
  text('press Up/Down Key', 4 * 80, 325);
  text("Input meta noise : ", 80, 425);
}

function textData() {
  text('REAL-TIME DATA', 80, 250);
  text('Hz: ' + freq, 80, 275);
  text('vol: ' + vol, 80, 300);
  text('sat: ' + bright, 80, 325);
  text('hue: ' + hue, 80, 350);
  text("x: " + mouseX, 80, 375);
  text("y: " + mouseY, 80, 400);
}
