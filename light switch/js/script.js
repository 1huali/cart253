/**
Wan Hua Li

This makes a light switch
*/

"use strict";


/**
Description of preload
*/
let mode = `DARK MODE`;
let uiForeground = 255;
let uiBackground = 0;

let modeButton = {
  x: 10,
  y: 100,
  w: 200,
  h: 50,
  // text: `DARK/LIGHT MODE`
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(uiBackground);

  push();
  noStroke();
  stroke(uiForeground);
  // rect(modeButton.x, modeButton.y, modeButton.w, modeButton.h);
  // text(modeButton.text, modeButton.x, modeButton.y + modeButton.h/2);
  pop();

  push();
  fill(uiForeground);
  text(mode, 100, 100);
  pop();
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
