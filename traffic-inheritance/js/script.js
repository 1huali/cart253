/**
INheritance exercice
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let bgCOlor = 0;

let cars = [];
let numCars = 10;

let motocycles = [];
let numMoto = 10;

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    cars.push(car);
  }

  for (let j = 0; j < numMoto; j++) {
    let x = random(0, width);
    let y = random(0, height);
    let moto = new Motocycle(x, y);
    motocycles.push(moto);
  }

}


/**
Description of draw()
*/
function draw() {
  background(bgColor);

  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    car.move();
    car.wrap();
    car.display();
  }

  for (let i = 0; i < motorcycles.length; i++) {
  let motorcycle = motorcycles[i];
  motorcycle.move();
  motorcycle.wrap();
  motorcycle.display();
}


}
