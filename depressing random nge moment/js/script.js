/**
Depressing NGE moment generator
Wawa Li

To practice arrays with images
*/

"use strict";
// index of 9 depressing mge moment
let ngeMoment = [];
let bg = 0;
// variable to store the image we want to display
let displayImage;
/**
Description of preload
*/
function preload() {
ngeMoment[0] = loadImage(`assets/images/nge-depress.png`);
ngeMoment[1] = loadImage(`assets/images/nge-depress1.png`);
ngeMoment[2] = loadImage(`assets/images/nge-depress2.png`);
ngeMoment[3] = loadImage(`assets/images/nge-depress3.png`);
ngeMoment[4] = loadImage(`assets/images/nge-depress4.png`);
ngeMoment[5] = loadImage(`assets/images/nge-depress5.png`);
ngeMoment[6] = loadImage(`assets/images/nge-depress6.png`);
ngeMoment[7] = loadImage(`assets/images/nge-depress7.png`);
ngeMoment[8] = loadImage(`assets/images/nge-depress8.png`);
}

function setup() {
  createCanvas(1000,700);
displayImage = random(ngeMoment);
}


/**
Description of draw()
*/
function draw() {
background(0);
imageFeatures ();

}

function mousePressed(){
displayImage = random(ngeMoment);
}

function imageFeatures (){
  imageMode(CENTER);
  image(displayImage, 300, 300);
}

// not working
function resizeImg(){
// for (i=0; i<ngeMoment;i++){
  ngeMoment[i].resize(100, 7)

}
