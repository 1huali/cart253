/**
INheritance exercice
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let vehicules = [];
let numCars = 10;
let numMoto = 10;
let numSportsCar = 3;
/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    vehicules.push(car);
  }

  for (let j = 0; j < numMoto; j++) {
    let x = random(0, width);
    let y = random(0, height);
    let moto = new Motocycle(x, y);
    vehicules.push(moto);
  }
  for (let l = 0; l < numSportsCar; l++) {
    let x = random(0, width);
    let y = random(0, height);
    let sportsCar = new SportsCar(x, y);
    vehicules.push(sportsCar);
  }
}


/**
Description of draw()
*/
function draw() {
  background(0);

  for (let i = 0; i < vehicules.length; i++) {
    let vehicule = vehicules[i];
    vehicule.move();
    vehicule.wrap();
    vehicule.display();
  }

}
