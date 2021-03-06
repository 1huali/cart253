/**
Flowers
Wawa Li

OOP generating 20 random variating flowers. Linked with multiflower.js
*/

"use strict";

let garden = {
  flowers : [],
  numFlowers: 20,
  bees: [],
  numBees:7,
  grassColor: {
    r:120,
    g:180,
    b:120
  }
}



/**
the variation changes the Creation variables
*/
function setup() {
createCanvas(600,600);
console.log("canvas created")

// It's "=" signs, not ":" after variable definition.
for (let i=0; i < garden.numFlowers ; i ++){
  let x= random(0,width);
  let y= random(0,height);
  let size= random(50,80);
  let stemLength= random(100,200);
  let petalColor= {
    r: random(100,255),
    g: random(100,255),
    b:random(100,255)
  }
// create new flower w variating arguments
  let flower= new Flower(x, y,size,stemLength,petalColor);
  garden.flowers.push(flower);
  console.log("flowers created")
}

for (let i=0; i < garden.numBees ; i ++) {
  let bee = new Bee(random(0,width), random(0,height));
  garden.bees.push(bee);
  console.log("bees created");
}

} //end setup
/**
Draw wasn't affected in the new feature change cos the way it is displayed+the bg display are still the same.
*/
function draw() {
  background(garden.grassColor.r,garden.grassColor.g,garden.grassColor.b);
  console.log("bg created");

  // Loop thru all the array and display them
  for (let i=0; i < garden.bees.length ; i ++){
    let bee = garden.bees[i];
    console.log("bees update");
        if (bee.alive) {
          bee.shrink();
          bee.move();
          bee.display();
          console.log("bees displayed and moving");

          for (let j=0; j< garden.flowers.length; j++){
            let flower = garden.flowers[j];
                if (flower.alive){
            bee.tryToPollinate(flower);
            // console.log("bees pollinating");
          }
          }
      }
    }
// Loop thru all the array and display them
for (let i=0; i < garden.flowers.length ; i ++){
  let flower = garden.flowers[i];
  console.log("flower update");
      if (flower.alive){
        flower.shrink(); // nothing shrinks anymore, weird
        // console.log("flower shrinking");
        flower.display();
        // console.log("flower displayed");
    }
  }
} //end of draw
