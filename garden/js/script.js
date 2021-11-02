/**
Flowers
Wawa Li

OOP generating 20 random variating flowers. Linked with multiflower.js
*/

"use strict";

let garden = {
  flowers: [],
  numFlowers: 35,
  flies: [],
  numFly: 30,
  bees: [],
  numBees: 20,
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
}



/**
the variation changes the Creation variables
*/
function setup() {
  createCanvas(600, 600);
  console.log("canvas created")

  // definition of flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(100, 200);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // create new obj (flower, fly,bees) w variating arguments
    let flower = new Flower(x, y, size, stemLength, petalColor);
    garden.flowers.push(flower);
    console.log("flowers created")
  }

  // definition of bees
  for (let i = 0; i < garden.numBees; i++) {
    let bee = new Bee(random(0, width), random(0, height));
    garden.bees.push(bee);
    console.log("bees created");
  }

  // definition of flies
  for (let i = 0; i < garden.numFly; i++) {
    let fly = new Fly(random(0, width), random(0, height));
    garden.flies.push(fly);
    console.log("flies created");
  }
} //end setup

/**
Draw wasn't affected in the new feature change cos the way it is displayed+the bg display are still the same.
*/
function draw() {
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
  console.log("bg created");

  // Loop thru all the array and display them
  // Bees naturally displayed, shrinking and moving
  for (let i = 0; i < garden.bees.length; i++) {
    let bee = garden.bees[i];
    console.log("bees update");
    if (bee.alive) {
      bee.shrink();
      bee.move();
      bee.display();
      console.log("bees displayed and moving");
    }
    // bees can pollinate flowers cos atm they be shrinking
    for (let j = 0; j < garden.flowers.length; j++) {
      let flower = garden.flowers[j];
      if (flower.alive) {
        bee.tryToPollinate(flower);
        // console.log("bees pollinating");
      }
    }
    // bees can grow when they eat flies
    for (let k = 0; k < garden.flies.length; k++) {
      let fly = garden.flies[k];
      if (fly.alive) {
        bee.killNsuck(fly);
        console.log("bees sucking flies")
        bee.grow();
        // console.log("bees killing flies");
      }
    }
  }

  // Loop thru all the array and display them
  // Flowers naturally shrinking, moving and displaying
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    console.log("flower update");
    if (flower.alive) {
      flower.shrink();
      // console.log("flower shrinking");
      flower.display();
      // console.log("flower displayed");
    }
    // fly destroys when in contact with flowers
    for (let j = 0; j < garden.flies.length; j++) {
      let fly = garden.flies[j];
      let flower = garden.flowers[j];
      if (flower.alive) {
        // fly.shrink(flower);
        fly.destroy(flower);
        // console.log("fly killing flowers");
      }
    }
  }

  // Loop thru all the array and display them
  // Flies naturally displayed, shrinking and moving
  for (let j = 0; j < garden.flies.length; j++) {
    let fly = garden.flies[j];
    fly.move();
    fly.shrink();
    fly.display();
  }

} //end of draw

// Q: why fly invincible?
function mousePressed(){
  for (let j = 0; j < garden.flies.length; j++) {
    let fly = garden.flies[j];
    fly.mousePressed();
  }
    for (let i = 0; i < garden.bees.length; i++) {
      let bee = garden.bees[i];
      bee.mousePressed();
}
}
