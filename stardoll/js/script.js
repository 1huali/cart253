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

let visages = [];
// let visageImg= [];
let visageImg = undefined;

let faceZone = {
  x: 600,
  y: 200,
}

// maybe change cos its not a doll its human being
let doll = {
  x: 600,
  y: 350
}

// eventually call Plain face
let dollFaceImg = undefined;

let msgZone = {
  x: 300,
  y: 650,
  width: 880,
  height: 50,
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

let hairstyles = [];
let hairImg = [];
let hairClicked = false;

let makeups = [];
let muImg = [];
let muClicked = false;

let song;

/**
loading make-up icons, hair and made-up face
*/
function preload() {
  // for (let i=0; i< hairstylesNum; i++){
  hairImg.push(loadImage('assets/images/hair1.png'));
  hairImg.push(loadImage('assets/images/hair2.png'));
  hairImg.push(loadImage('assets/images/hair3.png'));
  hairImg.push(loadImage('assets/images/hair4.png'));
  hairImg.push(loadImage('assets/images/hair5.png'));
  song = loadSound('assets/sounds/Nightcore - Angel With A Shotgun.mp3');

  muImg.push(loadImage('assets/images/mu1.png'));
  muImg.push(loadImage('assets/images/mu2.png'));
  muImg.push(loadImage('assets/images/mu3.png'));
  muImg.push(loadImage('assets/images/mu4.png'));

  dollFaceImg = loadImage('assets/images/gandalf.jpeg');
  visageImg = loadImage('assets/images/visageImg1.jpeg');
  // dollFaceImg.push(loadImage('assets/images/gandalf.jpeg'));
  // visageImg.push(loadImage('assets/images/??.png'));
  // visageImg.push(loadImage('assets/images/??.png'));
  // visageImg.push(loadImage('assets/images/??.png'));
}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  // calling the img
  hairstyles.push(new Hairstyles(900, 100, hairImg[0]));
  // hairstyles.push(new Hairstyles(900, 100, hairImg[0], `red wig!`));
  // to eventually add name to each haistyles
  hairstyles.push(new Hairstyles(900, 200, hairImg[1]));
  hairstyles.push(new Hairstyles(900, 300, hairImg[2]));
  hairstyles.push(new Hairstyles(900, 400, hairImg[3]));
  hairstyles.push(new Hairstyles(900, 500, hairImg[4]));

  makeups.push(new MakeUps(300, 200, muImg[0]));
  makeups.push(new MakeUps(300, 300, muImg[1]));
  makeups.push(new MakeUps(300, 400, muImg[2]));
  makeups.push(new MakeUps(300, 500, muImg[3]));

  // changer de position x et y; pour array visages
  // visages.push(new MakeUps(300, 200, ?? [0]));
  // visages.push(new MakeUps(300, 300, ?? [1]));
  // visages.push(new MakeUps(300, 400, ?? [2]));
  // visages.push(new MakeUps(300, 500, ?? [3]));

  // hoverOverMe = createElement("allo");
  //  hoverOverMe.mouseOver(() => showInfo = true);
  //  hoverOverMe.mouseOut(() => showInfo = false);
}

function displayModel() {
  push();
  image(dollFaceImg, doll.x, doll.y);
  pop();
}

function displayMusicButt() {
  musicButton.button = createButton('MUTE FOREVER');
  musicButton.button.position(musicButton.x, musicButton.y, musicButton.w);
  musicButton.button.mousePressed(stopMusic);
}

function hideObjectsButt() {
  hideButt.button = createButton('Hide material');
  hideButt.button.position(hideButt.x, hideButt.y, hideButt.w);
  hideButt.button.mousePressed(hide);
}

function createNextButt() {
  nextButton.button = createButton('Next : The fit');
  nextButton.button.position(nextButton.x, nextButton.y, nextButton.w);
  nextButton.button.mousePressed(goToNext);
}

function createPhotoButt() {
  takePictureButton.button = createButton('Save look');
  takePictureButton.button.position(takePictureButton.x, takePictureButton.y, takePictureButton.w);
  takePictureButton.button.mousePressed(takeScreenshot);
}

function createBgButt() {
  changeBgButton.button = createButton('Change background');
  changeBgButton.button.position(changeBgButton.x, changeBgButton.y, changeBgButton.w);
  // changeBgButton.button.mousePressed(save to create);
}

function createReplayButt() {
  replayButton.button = createButton('Replay');
  replayButton.button.position(replayButton.x, replayButton.y, replayButton.w);
  replayButton.button.mousePressed(replayGame);
}

function replayGame (){
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

function takeScreenshot (){
  saveCanvas('new_opera.png')
}

function hide(){

}

function mouseReleased() {
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

  for (let i = 0; i < makeups.length; i++){
  let d = dist(makeups[i].x, makeups[i].y, doll.x, doll.y);
  if (d < dollFaceImg.width / 2) {
    dollFaceImg = visageImg;
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

// create randomMsgArray and display randomly or hover over msg or song display
function randomMsg(message) {
  push();
  fill(250, 142, 193);
  textSize(24);
  text(message, msgZone.x + 40, msgZone.y + 30)
  pop();
}

function displayMsgZone() {
  push();
  noFill();
  stroke(250, 142, 193);
  rect(msgZone.x, msgZone.y, msgZone.width, msgZone.height);
  randomMsg(`hey U, when U r done jump on the outfit!`)
  pop();
}


function displayVisage() {
  push();
  image(visageImg, doll.x, doll.y);
  pop();
}


function displayFaceZone() {
  push();
  noFill()
  rectMode(CENTER);
  rect(faceZone.x, faceZone.y, faceZone.width, faceZone.height);
  pop();
}



function hoverZones() {
  push();
  ellipse(200, 600, 100);
  noFill();
  pop();
}

function hoverOver() {

}
//
// function displayHoverMsg(message) {
//   push();
//   fill(250, 142, 193);
//   textSize(15);
//   textAlign(CENTER, CENTER);
//   textSize(24);
//   text(message, mouseX, mouseY);
//   stroke(2);
//   pop();
// }

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
  displayText("Di Nu Hua: The 2021 Remake. PRESS ENTER TO START");
}

function start() {
  displayText("Dont cry princess, he'll be back blabla hannah montana. PRESS SPACE TO START");
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
  // displayText(`Sorry princess, low funding. Come back after few gigs`);
  displayText(`Credits : Wawa + Dyamond`);
  //change to credits, thank u take care
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
  displayFaceZone();
  displayMusicButt()
  // console.log(`game state`)
  for (let j = 0; j < makeups.length; j++) {
    makeups[j].displayMakeups();
    makeups[j].drag();
  }

  for (let i = 0; i < hairstyles.length; i++) {
    hairstyles[i].displayHair();
    hairstyles[i].drag();
  }
  // for (let k = 0; k < visageImg.length; k++) {
  //   visages[k].displayVisage();
  // }


  // // 2 times mouseIsPressed is acting up
  // if (mouseIsPressed) {
  //   brush()
  // }
}

function photo(){
  // saves the canvas as image
}

function draw() {
  background(0);
  // cursor not working
  cursor('assets/images/flower (25).png');
  // checkOverlap();
  displayFaceZone();

  //  if (showInfo) {
  //   textSize(40);
  //   text("I'm info text", width / 2, height/2);
  // }

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
}//end draw
