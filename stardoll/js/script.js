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
  // fill: 0
}

let nextButton = {
  x: 1150,
  y: 350,
  w: 80,
  button: undefined
}

let musicButton = {
  x: 100,
  y: 50,
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
// let isPlaying =false;

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
  // fill(255);
  //img of doll face
  // ellipse(doll.x, doll.y, doll.size);
  image(dollFaceImg, doll.x, doll.y);
  // resize(width/6,height/6)
  pop();
}

function displayMusicButt() {
  musicButton.button = createButton('MUTE FOREVER');
  musicButton.button.position(musicButton.x, musicButton.y, musicButton.w);
  musicButton.button.mousePressed(stopMusic);
}

function createNextButt() {
  nextButton.button = createButton('Next : The fit');
  nextButton.button.position(nextButton.x, nextButton.y, nextButton.w);
  nextButton.button.mousePressed(goToNext);
}

function playMusic() {
  if (song.playing = true) {
    song.play();
  }
}

function stopMusic() {
  if (song.playing = true) {
    song.stop();
  }
}

function goToNext() {
  state = `next`
  nextButton.button.remove();
}

function mouseReleased() {
  console.log(this.monoClick);
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
}

function displayMsgZone() {
  push();
  fill(msgZone.fill);
  // rectMode(CENTER);
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
  // strokeWeight(1);
  rect(msgZone.x, msgZone.y, msgZone.width, msgZone.height);
  randomMsg(`hey U, when U r done jump on the outfit!`)
  pop();
}

function checkOverlap() {
  if (mouseX > faceZone.x - faceZone.width / 2 &&
    mouseX < faceZone.x + faceZone.width / 2 &&
    mouseY > faceZone.y - faceZone.height / 2 &&
    mouseY < faceZone.y + faceZone.height / 2)
    switchVisage();
}

function displayVisage() {
  push();
  image(visageImg, doll.x, doll.y);
  pop();
}

// function switchVisage() {
// this would be when visages will be an array
// for (let i = 0; i < visageImg; i++) {
//     visages[i].switchMuImg();
//   }

// this function was locking all my other faces
function mouseReleased() {
  for (let i = 0; i < makeups.length; i++){
  let d = dist(makeups[i].x, makeups[i].y, doll.x, doll.y);
  if (d < dollFaceImg.width / 2) {
    dollFaceImg = visageImg
    makeups[i].makeUpReturns();
  }
}
}

function displayFaceZone() {
  push();
  noFill()
  rectMode(CENTER);
  rect(faceZone.x, faceZone.y, faceZone.width, faceZone.height);
  pop();
}

// https://editor.p5js.org/pippinbarr/sketches/fVWa_F6j2 as inspo for check zone
// function checkFaceZoneOverlap(){
//   let d=dist(mouseX,mouseY,faceZone.x,faceZone.y)
//   if (d > faceZone.size/2) {
//     checkMakeupChoice();
//     changesMakeUp();
//   }
// }
//
// function checkMakeupChoice(){ this might nove to class
//   if (user goes there){
//     choice1.chosen=true
//   }
//   if (user goes there){
//     choice2.chosen=true
//   }
// }
// chosen boolean version of things
//  // checkMakeupChoice(){
//   let d = dist(mouseX,mouseY,this.x,this.y)
//    if (d > faceZone.size/2) {
//      this.chosen = true
//    }
// }
// change mu+checkzone in the same
// function changesMakeUp(){
//   // img will change depending of the chosen makeup
//   // if (chosen=true) && in the zone){
//   //
// // }
// // }
//   // makeup
// }

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
  displayText("Dont cry princess, u get the best of both world while he is away. PRESS SPACE TO START");
}

function keyPressed() {
  if (keyCode === 13) {
    song.play();
    state = `start`;
  }
  if (keyCode === 32) {
    state = `game`;
    createNextButt();
  }
}

// function mouseMoved(){
//   if(millis()>500 && isPlaying ===false){
//     console.log(`mouse moved`)
//       song.play();
//     isPlaying = true;
//
// }
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
  displayMsgZone();
displayModel();
  displayFaceZone();
  displayMusicButt()
  console.log(`game state`)
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
}
//end draw
