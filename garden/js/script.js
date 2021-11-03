/**
Flowers
Wawa Li

OOP generating 20 random variating flowers. Linked with multiflower.js
*/

"use strict";
let state = `start`;

let garden = {
  flowers: [],
  numFlowers: 20,
  flies: [],
  numFly: 40,
  bees: [],
  numBees: 35,
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
    // console.log("flowers created")
  }

  // definition of bees
  for (let i = 0; i < garden.numBees; i++) {
    let bee = new Bee(random(0, width), random(0, height));
    garden.bees.push(bee);
    // console.log("bees created");
  }

  // definition of flies
  for (let i = 0; i < garden.numFly; i++) {
    let fly = new Fly(random(0, width), random(0, height));
    garden.flies.push(fly);
    // console.log("flies created");
  }
} //end setup


function displayText(message) {
  push();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text(message, width / 2, height / 2)
  pop();
}


function start() {
  displayText(`Flies kill flowers, Bees kill flies, Human kills insects.
    What are U gonna save? Use mouse to kill.
    Press Enter to start`);
}

function keyPressed() {
  if (keyCode === 13) {
    state = `game`;
    console.log(`set game state`);
  }
}
function checkEnd(){
  console.log(`checking end state`);
console.log("flowers: ",garden.flowers.length)
if (garden.bees.length < 1 || garden.flowers.length == 1 || garden.flies.length < 1){
console.log(`condition met`);
  state = `end`;
}
}

  function game() {
    // OBJECTS BELOW
    // Loop thru all the array and display them
    // Bees naturally displayed, shrinking and moving
    for (let i = 0; i < garden.bees.length; i++) {
      let bee = garden.bees[i];
      // console.log("bees update");
      if (bee.alive) {
        bee.shrink();
        bee.move();
        bee.display();
        // console.log("bees displayed and moving");
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
          // console.log("bees sucking flies")
          // bee.grow();
          // console.log("bees killing flies");
        }
        if (bee.size < 0){
          garden.bees.splice(k, 1);
        }
      }
    }

    // Loop thru all the array and display them
    // Flowers naturally shrinking, moving and displaying
    for (let i = 0; i < garden.flowers.length; i++) {
      let flower = garden.flowers[i];
      // console.log("flower update");
      if (flower.alive) {
        flower.shrink();
        // console.log("flower shrinking");
        flower.display();
        // console.log("flower displayed");
      }
      // fly destroys when in contact with flowers
      for (let j = 0; j < garden.flies.length; j++) {
        // console.log(`flower#: `, j, flower.alive);
        let fly = garden.flies[j];
        // let flower = garden.flowers[j];
        if (flower.alive) {
          // fly.shrink(flower);
          fly.destroy(flower);
          // console.log("fly killing flowers");
        }
        if (flower.size < 0){
          garden.flowers.splice(i, 1);
        }
      }
    }
    // Loop thru all the array and display them
    // Flies naturally displayed, shrinking and moving
    for (let j = 0; j < garden.flies.length; j++) {
      let fly = garden.flies[j];
      if (fly.alive) {
        fly.move();
        fly.shrink();
        fly.display();
      }
      if (fly.size < 0){
        garden.flies.splice(j, 1);
      }
    }
    checkEnd();
}

function end() {
console.log(`in end state`)
    for (let j = 0; j < garden.flowers.length; j++) {
      let flower = garden.flowers[j];
      if (garden.flowers.length === 1) {
        displayText(`Humans won't save anyone.
        Ecosystem decimated: the End`);
        console.log(`Fauna decimated`);
        push();
        fill(255, 0, 0);
        pop();
      }
    }
  } //end of end();
  function mousePressed() {
    for (let j = 0; j < garden.flies.length; j++) {
      let fly = garden.flies[j];
      fly.mousePressed();
    }
    for (let i = 0; i < garden.bees.length; i++) {
      let bee = garden.bees[i];
      bee.mousePressed();
    }
  }

/**
Draw wasn't affected in the new feature change cos the way it is displayed+the bg display are still the same.
*/
function draw() {
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
  // console.log("bg created");

  if (state === `start`) {
    start();
  }
  else if (state === `game`) {
    game();
    console.log(state)
  }
  else if (state === `end`) {
    end();
  }
} //end of draw
