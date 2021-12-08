/**
Title of Project
Wawa Li

Best of both world:  帝女花, the 2021 Remix

*/

"use strict";
let state = 'intro';

// let allHoverOverMsg=[];
// let hoverMessages =[];
// let showInfo = false;



// let oscillator = undefined;

// maybe change cos its not a doll its human being
let doll = {
  x: 500,
  y:350,

}

let hitBox = {
  x: 500,
  y:300,
  w:200,
  h:200
}

// eventually call Plain face
let dollFaceImg = undefined;

let msgZone = {
  x: 300,
  y: 650,
  width: 880,
  height: 50,
  message: ``
}

let nextButton = {
  x: 1150,
  y: 350,
  w: 80,
  button: undefined
}

let takePictureButton = {
  x: 1150,
  y: 400,
  w: 80,
  button: undefined
}

let changeBgButton = {
  x: 1150,
  y: 450,
  w: 80,
  button: undefined
}

let musicButton = {
  x: 100,
  y: 50,
  w: 65,
  button: undefined
}

// let musicPlaying = true;

let replayButton = {
  x: 100,
  y: 90,
  w: 65,
  button: undefined
}


let hideButt = {
  x: 100,
  y: 100,
  w: 65,
  button: undefined
}

let visages = [];
let visageImg= [];

let hairstyles = [];
let hairImg = [];
let hairClicked = false;

let makeups = [];
let muImg = [];
let muClicked = false;

let mouseIsPressed = false;

let song;
let currentVisage = '';

let gameTitle = undefined;
let gameCredits = undefined;
let muteButton = undefined;

/**
loading make-up icons, hair and made-up face
*/
function preload() {
  // for (let i=0; i< hairstylesNum; i++){
  hairImg.push(loadImage('assets/images/dinuhua_hair1.png'));
  hairImg.push(loadImage('assets/images/dinuhua_hair2.png'));
  hairImg.push(loadImage('assets/images/dinuhua_hair3.png'));
  // hairImg.push(loadImage('assets/images/hair4.png'));
  // hairImg.push(loadImage('assets/images/hair5.png'));
  song = loadSound('assets/sounds/Nightcore - Angel With A Shotgun.mp3');

  muImg.push(loadImage('assets/images/dinuhua_look1-muIcon.png'));
  muImg.push(loadImage('assets/images/dinuhua_look2-muIcon.png'));
  muImg.push(loadImage('assets/images/dinuhua_look3-muIcon.png'));
  // muImg.push(loadImage('assets/images/mu4.png'));

  dollFaceImg = loadImage('assets/images/dinuhua_base.png');
  visageImg.push(loadImage('assets/images/dinuhua_mu1.png'));
  visageImg.push(loadImage('assets/images/dinuhua_mu2.png'));
  visageImg.push(loadImage('assets/images/dinuhua_mu3.png'));
  // visageImg.push(loadImage('assets/images/??.png'));

  // load titles and graphix
  gameTitle=(loadImage('assets/images/dinuhua_title.png'));
  gameCredits =(loadImage('assets/images/dinuhua_credits-title.png'));
  muteButton =(loadImage('assets/images/mute_button.png'));
}

/**
Description of setup
*/
function setup() {
  push();
  createCanvas(1000, 600);
  // fill(255,0,0);
  pop();
  // calling the img
  hairstyles.push(new Hairstyles(900, 200, hairImg[0], 'red wig'));
  hairstyles.push(new Hairstyles(900, 300, hairImg[1], 'pink wig'));
  hairstyles.push(new Hairstyles(900, 400, hairImg[2], 'blonde wig'));
  // hairstyles.push(new Hairstyles(900, 400, hairImg[3], 'spike wig'));
  // hairstyles.push(new Hairstyles(900, 500, hairImg[4], 'long wig'));

  makeups.push(new MakeUps(150, 200, muImg[0], visageImg[0],'mu 1'));
  makeups.push(new MakeUps(150, 300, muImg[1], visageImg[1],'mu 2'));
  makeups.push(new MakeUps(150, 400, muImg[2], visageImg[2],'mu 3'));
  // makeups.push(new MakeUps(300, 500, muImg[3], 'mu 4','mu 4'));

  // pour array visages
  visages.push(new MakeUps(150, 200, muImg[0], visageImg[0],'look1'));
  visages.push(new MakeUps(150, 300, muImg[1], visageImg[1],'look2'));
  visages.push(new MakeUps(150, 400, muImg[2], visageImg[2],'look3'));
  // visages.push(new MakeUps(300, 400, visageImg[2]));
  // visages.push(new MakeUps(300, 500, ?? [3]));

  currentVisage = dollFaceImg;
}

function displayModel() {
  push();
  image(currentVisage, doll.x, doll.y);
  noFill();
  noStroke();
  rectMode(CENTER);
  rect(hitBox.x,hitBox.y,hitBox.w,hitBox.h);
  pop();
}

function displayMusicButt() {
  musicButton.button = createButton('MUTE FOREVER');
// push();
//   rectMode(CENTER);
//   rect(hitBox.x,hitBox.y,hitBox.w,hitBox.h);
//   pop();
  musicButton.button.position(musicButton.x, musicButton.y, musicButton.w);
  musicButton.button.mousePressed(stopMusic);
}

function hideObjectsButt() {
  hideButt.button = createButton('Hide material');
  hideButt.button.position(hideButt.x, hideButt.y, hideButt.w);
  hideButt.button.mousePressed(hide);
}

// becomes "done" button
function createNextButt() {
  nextButton.button = createButton('Done');
  nextButton.button.position(nextButton.x, nextButton.y, nextButton.w);
  nextButton.button.mousePressed(goToNext);
}

function createPhotoButt() {
  takePictureButton.button = createButton('Save look');
  takePictureButton.button.position(takePictureButton.x, takePictureButton.y, takePictureButton.w);
  takePictureButton.button.mousePressed(takeScreenshot);
}

// Q: why the save look button disappears too?
function createBgButt() {
  changeBgButton.button = createButton('Hide/Show');
  changeBgButton.button.position(changeBgButton.x, changeBgButton.y, changeBgButton.w);
  // replayButton.button.mousePressed(hideShow);
}

// Q: help here
// function hideShow{
//
// }

function createReplayButt() {
  replayButton.button = createButton('Replay');
  replayButton.button.position(replayButton.x, replayButton.y, replayButton.w);
  replayButton.button.mousePressed(replayGame);
}

function replayGame() {
  state = `game`;
  // song replay
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
  nextButton.button.remove();
  changeBgButton.button.remove();
  takePictureButton.button.remove();
  // createReplayButt();
}

function takeScreenshot() {
  saveCanvas('new_opera.png')
}

function hide() {

}

function mousePressed() {
  mouseIsPressed= true;
  console.log("mouse pressed");
}

function mouseReleased() {
  mouseIsPressed =false;
  for (let i = 0; i < hairstyles.length; i++) {
    console.log(i, hairstyles[i].monoClick);
    hairstyles[i].monoClick = false;
  }
  hairClicked = false;

  for (let j = 0; j < makeups.length; j++) {
    console.log(j, makeups[j].monoClick);
    makeups[j].monoClick = false;
  }
  muClicked = false;

  for (let i = 0; i < makeups.length; i++) {
    let d = dist(makeups[i].x, makeups[i].y, hitBox.x, hitBox.y);
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
  stroke(250, 142, 193);
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
  image(currentVisage, doll.x, doll.y);
  pop();
}


// function displayFaceZone() {
//   push();
//   noFill()
//   rectMode(CENTER);
//   rect(faceZone.x, faceZone.y, faceZone.width, faceZone.height);
//   pop();
// }


// think this is useless
function hoverZones() {
  push();
  ellipse(200, 600, 100);
  noFill();
  pop();
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



function intro() {
  push();
  image(gameTitle, doll.x, doll.y);
  imageMode(CENTER);
  pop();
}

function start() {
  displayText("Drag and drop your fave make-up palette and hair.PRESS SPACE TO START");
}

function keyPressed() {
  if (keyCode === 13) {
    song.play();
    state = `start`;
  }
  if (keyCode === 32) {
    state = `game`;
    createNextButt();
    createBgButt();
    // hideObjectsButt();
    // waiting til the end to add hide options
    createPhotoButt();
  }
}

function end() {
  push();
  image(gameCredits, doll.x, doll.y);
  imageMode(CENTER);
pop();
  // displayText(`Sorry princess, low funding. Come back after few gigs`);
  // displayText(`Credits : Wawa + Dyamond`);
  push();
  fill(255, 0, 0);
  pop();
  if (keyCode === 32) {
    state = `next`;
  }
  createReplayButt();
}



function game() {
  displayMsgZone();
  displayModel();
  //displayFaceZone();
  displayMusicButt()
  // console.log(`game state`)
  msgZone.message = ``;

    for (let j = 0; j < makeups.length; j++) {
      makeups[j].displayMakeups();
      makeups[j].drag();
      makeups[j].mouseHover();
        if (makeups[j].hover) {
          console.log(makeups[j]);
        msgZone.message = makeups[j].name;
      }
    }

  for (let i = 0; i < hairstyles.length; i++) {
    hairstyles[i].displayHair();
    hairstyles[i].drag();
    hairstyles[i].mouseHover();
    if (hairstyles[i].hover) {
      msgZone.message = hairstyles[i].name;
    }
  }

}


function draw() {
  background(0);
  // cursor not working
  cursor('assets/images/flower (25).png');
  // checkOverlap();
  // displayFaceZone();

  //  if (showInfo) {
  //   textSize(40);
  //   text("I'm info text", width / 2, height/2);
  // }

// wanna delete the start title

  if (state === `intro`) {
    intro();
  } else if (state === `start`) {
    start();
    // mouseMoved();
  } else if (state === `game`) {
    game();
  } else if (state === `next`) {
    end();
  }
} //end draw
