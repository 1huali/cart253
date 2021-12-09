/**
New Opera
Wawa Li
An interactive hair and make-up lookbook
Hair/Make-Up : Dyamond
Song: Angel With A Shutgun, Nightcore. I do not own the rights.
*/

"use strict";
let state = 'intro';

let currentBgImg = {
  x: 720,
  y: 340
}


let hitBox = {
  w: 200,
  h: 200
}

let dollFaceImg = undefined;

let msgZone = {
  x: 320,
  y: 650,
  width: 500,
  height: 50,
  message: ``
}

let doneButton = {
  x: 1180,
  y: 20,
  img: undefined
}

let saveButton = {
  x: 1000,
  y: 20,
  // w: 80,
  img: undefined
}

let replayButton = {
  x: 1160,
  y: 670,
  img: undefined
}

let showMuHair = true;
let hideButton = {
  x: 620,
  y: 20,
  img: undefined
}

let muteButton = {
  x: 320,
  y: 20,
  img: undefined
}

let visages = [];
let visageImg = [];

let hairstyles = [];
let hairImg = [];
let hairClicked = false;

let makeups = [];
let muImg = [];
let muClicked = false;

let mouseIsPressed = false;

let song;
let currentVisage = '';
let gameOpening = undefined;
let titleStatement = undefined;
let gameEnding = undefined;
let creditStatement = undefined;
let hairInstructions = {
x:1189,
y:610,
img:undefined
}
let muInstructions = undefined;

/**
loading make-up icons, hair and made-up face images.
*/
function preload() {
  hairImg.push(loadImage('assets/images/dinuhua_hair1.png'));
  hairImg.push(loadImage('assets/images/dinuhua_hair2.png'));
  hairImg.push(loadImage('assets/images/dinuhua_hair3.png'));

  song = loadSound('assets/sounds/Nightcore - Angel With A Shotgun.mp3');

  muImg.push(loadImage('assets/images/dinuhua_look1-muIcon.png'));
  muImg.push(loadImage('assets/images/dinuhua_look2-muIcon.png'));
  muImg.push(loadImage('assets/images/dinuhua_look3-muIcon.png'));

  dollFaceImg = loadImage('assets/images/dinuhua_whitebase.png');
  visageImg.push(loadImage('assets/images/dinuhua_mu1.png'));
  visageImg.push(loadImage('assets/images/dinuhua_mu2.png'));
  visageImg.push(loadImage('assets/images/dinuhua_mu3.png'));

  // load titles and graphix
  gameOpening = (loadImage('assets/images/dinuhua_title.png'));
  gameEnding = (loadImage('assets/images/dinuhua_credits-title.png'));
  muteButton.img = (loadImage('assets/images/mute_button.png'));
  saveButton.img = (loadImage('assets/images/save_button.png'));
  doneButton.img = (loadImage('assets/images/done_button.png'));
  hideButton.img = (loadImage('assets/images/hide_button.png'));
  replayButton.img = (loadImage('assets/images/replay_button.png'));
  titleStatement = (loadImage('assets/images/title_graphix.png'));
  creditStatement = (loadImage('assets/images/credit_graphix.png'));
  hairInstructions.img = (loadImage('assets/images/hair_details.png'));
  muInstructions = (loadImage('assets/images/mu_details.png'));

}

/**
Creates the make-up, faces and hair elements into their proper arrays
*/
function setup() {
  push();
  createCanvas(windowWidth, windowHeight);
  pop();

  hairstyles.push(new Hairstyles(1320, 200, hairImg[0], 'H1-#SPIKES-2'));
  hairstyles.push(new Hairstyles(1320, 300, hairImg[1], 'H2-#MIRROR-0'));
  hairstyles.push(new Hairstyles(1320, 400, hairImg[2], 'H3-#LOOP-1'));
  makeups.push(new MakeUps(120, 500, muImg[0], visageImg[0], 'L1-#YELLOW'));
  makeups.push(new MakeUps(120, 300, muImg[1], visageImg[1], 'L2-#FLOWER'));
  makeups.push(new MakeUps(120, 400, muImg[2], visageImg[2], 'L3-#PURPLE'));
  visages.push(new MakeUps(150, 200, muImg[0], visageImg[0], 'look1'));
  visages.push(new MakeUps(150, 300, muImg[1], visageImg[1], 'look2'));
  visages.push(new MakeUps(150, 400, muImg[2], visageImg[2], 'look3'));

  currentVisage = dollFaceImg;
}

function displayModel() {
  push();
  rectMode(CENTER);
  imageMode(CENTER);
  image(currentVisage, currentBgImg.x, currentBgImg.y, 1000, 600);
  noFill();
  noStroke();
  rect(currentBgImg.x, currentBgImg.y, hitBox.w, hitBox.h);
  pop();
}

function displayMusicButt() {
  push();
  imageMode(CENTER);
  image(muteButton.img, muteButton.x, muteButton.y);
  pop();
}

function hideObjectsButt() {
push();
imageMode(CENTER);
image(hideButton.img,hideButton.x,hideButton.y);
pop();
}

// becomes "done" button
function displayDoneButton() {
push();
imageMode(CENTER);
image(doneButton.img,doneButton.x,doneButton.y);
pop();
}

function displaySaveButton() {
  push();
  imageMode(CENTER);
  image(saveButton.img, saveButton.x, saveButton.y);
  pop();
}

function displayReplayButton() {
  push();
  imageMode(CENTER);
  image(replayButton.img, replayButton.x, replayButton.y);
  pop();
}


function playMusic() {
  if (song.playing = true) {
    song.play();
    musicPlaying = true;
  }
}

// call music control
// https://editor.p5js.org/Ruyi_Chen/sketches/S1fIxzCn7
function stopMusic() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
  } else {
    song.pause();
  }
}


function goToNext() {
  state = `next`
}


function hide() {
  showMuHair = !showMuHair;
}

function mousePressed() {
  let d = dist(mouseX, mouseY, muteButton.x, muteButton.y);
  let e = dist(mouseX, mouseY, saveButton.x, saveButton.y);
  let f = dist(mouseX, mouseY, hideButton.x, hideButton.y);
  let g = dist(mouseX, mouseY, doneButton.x, doneButton.y);
  let h = dist(mouseX, mouseY, replayButton.x, replayButton.y);


  if (d < muteButton.img.width / 2) {
    stopMusic();
  } else if (e < saveButton.img.width / 2) {
    saveCanvas('new_opera.png')
  }
  else if (f < hideButton.img.width / 2) {
    hide();
  }
  else if (g < doneButton.img.width / 2) {
    state = `next`
  }
  else if (h < replayButton.img.width / 2) {
      state = `game`;
  } else {
    mouseIsPressed = true;
    console.log("mouse pressed");
  }

  let i = dist(mouseX, mouseY, hairInstructions.x,hairInstructions.y);
  for (let j = 0; j < hairstyles.length; j++) {
    if (i < hairInstructions.img.width / 2) {
          hairstyles[j].hairReturns();
      }
      }
} //end mousePressed


function mouseReleased() {
  mouseIsPressed = false;
  for (let i = 0; i < hairstyles.length; i++) {
    // console.log(i, hairstyles[i].monoClick);
    hairstyles[i].monoClick = false;
    hairstyles[i].chosen = false;
  }
  hairClicked = false;

  for (let i = 0; i < hairstyles.length; i++) {
    let d = dist(hairstyles[i].x, hairstyles[i].y, currentBgImg.x, currentBgImg.y);
    if (d < hitBox.w / 2) {
      hairstyles[i].chosen = true;
    }
  }

  for (let j = 0; j < makeups.length; j++) {
    // console.log(j, makeups[j].monoClick);
    makeups[j].monoClick = false;
  }
  muClicked = false;

  for (let i = 0; i < makeups.length; i++) {
    let d = dist(makeups[i].x, makeups[i].y, currentBgImg.x, currentBgImg.y);
    if (d < hitBox.w / 2) {
      currentVisage = makeups[i].visageImg;
      makeups[i].makeUpReturns();
    }
  }
} //end mouseReleased

function displayMsgZone() {
  push();
  fill(msgZone.fill);
  rect(msgZone.x, msgZone.y, msgZone.width, msgZone.height);
  pop();
}

function reset() {
  hairstyles = [];
  hairstyles.push(new Hairstyles(600, 100, hairImg[0], 'red wig'));
  hairstyles.push(new Hairstyles(600, 200, hairImg[1], 'pink wig'));
  hairstyles.push(new Hairstyles(600, 300, hairImg[2], 'blonde wig'));
  hairstyles.push(new Hairstyles(600, 400, hairImg[3], 'spike wig'));
  hairstyles.push(new Hairstyles(600, 500, hairImg[4], 'long wig'));
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


function displayMsgZone() {
  push();
  noFill();
  noStroke();
  rect(msgZone.x, msgZone.y, msgZone.width, msgZone.height);
  pop();

  push();
  fill(250, 142, 193);
  textSize(24);
  text(msgZone.message, msgZone.x + 40, msgZone.y + 30)
  pop();
}


function displayVisage() {
  push();
  image(currentVisage, currentBgImg.x, currentBgImg.y);
  pop();
}


function displayText(message) {
  push();
  fill(250, 142, 193);
  textSize(24);
  textSize(24);
  text(message, 360, 710);
  stroke(2);
  pop();
}


function intro() {
  push();
  imageMode(CENTER);
  image(gameOpening, currentBgImg.x, currentBgImg.y,1000, 600);
  image(titleStatement,currentBgImg.x, currentBgImg.y+90);
  pop();
}

// To enter the game
function keyPressed() {
  if (keyCode === 13) {
    song.play();
    state = `game`;
  }
}

function end() {
  displayReplayButton();
  push();
  imageMode(CENTER);
  image(gameEnding, currentBgImg.x, currentBgImg.y,1000, 600);
  image(creditStatement,currentBgImg.x, currentBgImg.y+80);
  pop();
  push();
  fill(255, 0, 0);
  pop();
}



function game() {
  displayMsgZone();
  displayModel();
  hideObjectsButt();
  displaySaveButton();
  displayMusicButt()
  displayDoneButton();
  msgZone.message = `NEW OPERA : an interactive lookbook/make-up game-ish. ty4playing! `;
  if (showMuHair === true){

    push();
    image(hairInstructions.img, hairInstructions.x, hairInstructions.y);
    image(muInstructions,100, 200);
    pop();

  for (let j = 0; j < makeups.length; j++) {
    makeups[j].displayMakeups();
    makeups[j].drag();
    makeups[j].mouseHover();
    if (makeups[j].hover) {
      console.log(makeups[j]);
      msgZone.message = makeups[j].name;
    }
  }
  displayText(`ok so MUTE/PLAY music; HIDE elements then SAVE to .png when U done`, 360,710);
}
  for (let i = 0; i < hairstyles.length; i++) {
    if (showMuHair === true || hairstyles[i].chosen === true) {
      hairstyles[i].displayHair();
      hairstyles[i].drag();
      hairstyles[i].mouseHover();
      if (hairstyles[i].hover) {
        msgZone.message = hairstyles[i].name;
      }
    }
  }
}


function draw() {
  background(255);
  cursor(CROSS);

  if (state === `intro`) {
    intro();
  }
  else if (state === `start`) {
    start();
  } else if (state === `game`) {
    game();
  } else if (state === `next`) {
    end();
  }
} //end draw
