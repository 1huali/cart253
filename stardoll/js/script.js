/**
Title of Project
Wawa Li

Best of both world:  帝女花, the 2021 Remix

*/

"use strict";
let state = 'intro';

// maybe change cos its not a doll its human being
let doll = {
  x: 750,
  y: 400
}

let hitBox = {
  x: 750,
  y: 400,
  w: 200,
  h: 200
}

// eventually call Plain face
let dollFaceImg = undefined;

let msgZone = {
  x: 500,
  y: 710,
  width: 500,
  height: 50,
  message: ``
}

// done
let creditButton = {
  x: 1200,
  y: 65,
  img: undefined
}

let saveButton = {
  x: 1200,
  y: 730,
  w: 80,
  img: undefined
}

let replayButton = {
  x: 290,
  y: 720,
  img: undefined
}

let showMuHair = true;
let hideButton = {
  x: 350,
  y: 730,
  img: undefined
}

let muteButton = {
  x: 350,
  y: 65,
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

let gameTitle = undefined;
let gameCredits = undefined;


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
  gameTitle = (loadImage('assets/images/dinuhua_title.png'));
  gameCredits = (loadImage('assets/images/dinuhua_credits-title.png'));
  muteButton.img = (loadImage('assets/images/mute_button.png'));
  saveButton.img = (loadImage('assets/images/save_button.png'));
  creditButton.img = (loadImage('assets/images/done_button.png'));
  hideButton.img = (loadImage('assets/images/hide_button.png'));
  replayButton.img = (loadImage('assets/images/replay_button.png'));

}

/**
Description of setup
*/
function setup() {
  push();
  createCanvas(windowWidth, windowHeight);
  // fill(255,0,0);
  pop();
  // calling the img
  hairstyles.push(new Hairstyles(1320, 200, hairImg[0], 'H1-#SPIKES-2'));
  hairstyles.push(new Hairstyles(1320, 300, hairImg[1], 'H2-#MIRROR-0'));
  hairstyles.push(new Hairstyles(1320, 400, hairImg[2], 'H3-#LOOP-1'));
  // hairstyles.push(new Hairstyles(900, 400, hairImg[3], 'spike wig'));
  // hairstyles.push(new Hairstyles(900, 500, hairImg[4], 'long wig'));

  makeups.push(new MakeUps(150, 200, muImg[0], visageImg[0], 'L1-#YELLOW'));
  makeups.push(new MakeUps(150, 300, muImg[1], visageImg[1], 'L2-#FLOWER'));
  makeups.push(new MakeUps(150, 400, muImg[2], visageImg[2], 'L3-#PURPLE'));
  // makeups.push(new MakeUps(300, 500, muImg[3], 'mu 4','mu 4'));

  // pour array visages
  visages.push(new MakeUps(150, 200, muImg[0], visageImg[0], 'look1'));
  visages.push(new MakeUps(150, 300, muImg[1], visageImg[1], 'look2'));
  visages.push(new MakeUps(150, 400, muImg[2], visageImg[2], 'look3'));
  // visages.push(new MakeUps(300, 400, visageImg[2]));
  // visages.push(new MakeUps(300, 500, ?? [3]));

  currentVisage = dollFaceImg;

}

function displayModel() {
  push();
  rectMode(CENTER);
  imageMode(CENTER);
  image(currentVisage, doll.x, doll.y, 1000, 600);
  noFill();
  noStroke();
  rect(hitBox.x, hitBox.y, hitBox.w, hitBox.h);
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
function displayCreditButton() {
push();
imageMode(CENTER);
image(creditButton.img,creditButton.x,creditButton.y);
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
  // console.log("replay exists");
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
  let g = dist(mouseX, mouseY, creditButton.x, creditButton.y);
  let h = dist(mouseX, mouseY, replayButton.x, replayButton.y);


  if (d < muteButton.img.width / 2) {
    stopMusic();
  } else if (e < saveButton.img.width / 2) {
    saveCanvas('new_opera.png')
  }
  else if (f < hideButton.img.width / 2) {
    hide();
  }
  else if (g < creditButton.img.width / 2) {
    state = `next`
  }
  else if (h < replayButton.img.width / 2) {
      state = `game`;
  } else {
    mouseIsPressed = true;
    console.log("mouse pressed");
  }


}

function mouseReleased() {
  mouseIsPressed = false;
  for (let i = 0; i < hairstyles.length; i++) {
    // console.log(i, hairstyles[i].monoClick);
    hairstyles[i].monoClick = false;
    hairstyles[i].chosen = false;
  }
  hairClicked = false;

  for (let i = 0; i < hairstyles.length; i++) {
    let d = dist(hairstyles[i].x, hairstyles[i].y, hitBox.x, hitBox.y);
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
  image(currentVisage, doll.x, doll.y);
  pop();
}

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
  imageMode(CENTER);
  image(gameTitle, windowWidth/2, windowHeight/2,1000, 600);
  pop();
}

function start() {
  displayText("Drag and drop your fave make-up palette and hair.PRESS SPACE TO START");
}

function keyPressed() {
  if (keyCode === 13) {
    song.play();
    state = `game`;
  }
  // if (keyCode === 32) {
  //   state = `game`;
  //   // displayCreditButton();
  //   // hideObjectsButt();
  // }
}

function end() {
  displayReplayButton();
  push();
  imageMode(CENTER);
  image(gameCredits, windowWidth/2, windowHeight/2,1000, 600);
  pop();
  // displayText(`Sorry princess, low funding. Come back after few gigs`);
  // displayText(`Credits : Wawa + Dyamond`);
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
  // those who used to be in keyPressed
  displaySaveButton();
  displayCreditButton();
  hideObjectsButt();
//
  displayMusicButt()
  // console.log(`game state`)
  msgZone.message = ``;
  if (showMuHair === true){
  for (let j = 0; j < makeups.length; j++) {
    makeups[j].displayMakeups();
    makeups[j].drag();
    makeups[j].mouseHover();
    if (makeups[j].hover) {
      console.log(makeups[j]);
      msgZone.message = makeups[j].name;
    }
  }
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
  // cursor not working
  cursor('assets/images/flower (25).png');


  if (state === `intro`) {
    intro();
  }
  else if (state === `start`) {
    start();
    // mouseMoved();
  } else if (state === `game`) {
    game();
  } else if (state === `next`) {
    end();
  }
} //end draw
