/**
Wawa's Deck of Cards
Wawa Li

Exercice for arrays,
highly inspired by Brian Eno's Deck of Cards
but more emotional and personal
*/

"use strict";

let cards = [
  `You know nothing`,
  `Only one can speak at the time. When you do, something else is muted`,
  `Sometimes it's just luck`,
  `Stop being deep and be hot`,
  `It's rarely personal, it's most often socio-economical`,
  `Wanting to fly when don't even know how to walk`,
  `Y'all dumbass`,
  `Did you forget to do your 3 graces today?`,
  `Boundaries are set to keep on going, not to leave`,
  `You are not your mother, you are your mother's daughter`,
  `You are not your father, you are your father's daughter`,
  `Thank You`,
  `Remember who made you`,
  `Loved you once, loved you forever`,
  `Come back when you'll know how to cook`
];

let currentCard = "Hey U, what's up?";
let bgColor=(0);
// let state= ’intro’;

/**
Description of setup
*/
function setup() {
  createCanvas(600,600);
  displayCards();
}

/**
when user press the mouse, a random new card appears.
*/
function draw() {
  background(bgColor);
  text(currentCard, width/2,height/2);
// this has been commented out cos it gives hectic vibes but wondering why.
  // mousePressed();
}


// user action
function mousePressed(){
  currentCard=random(cards);
}

//list's physicalities
function displayCards(){
  textAlign(CENTER);
  textSize(20);
  textStyle(ITALIC);
  fill(255);
}
