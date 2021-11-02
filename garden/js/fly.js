// flies that destroy flowers, are killed by bees and are seeked to be killed by user
class Fly {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    // console.log(`flies`);
    this.size = 35;
    this.minSize = 15;
    this.maxSize = 35;
    this.vx = 0;
    this.vy = 0;
    this.speed = 6;
    this.shrinkRate = 0.05;
    this.growRate = 0.05;
    this.jitteriness = 0.2;
    this.alive = true;
  }

  shrink() { //what happens when bees fly over flies - fly dies (all set)
    this.size = this.size - this.shrinkRate;

    if (this.size < this.minSize) {
      this.alive = false;
    }
  }

  move() {
    //how it moves (all set)
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  destroy(flower) { //flower shrink and fly grows at contact
    let d = dist(this.x, this.y, flower.x, flower.y);
    if (d < this.size / 2 + flower.size / 2 + flower.petalThickness) {
      this.grow();
      flower.shrink();
    }
  }

  grow() { //fly grows, link with when they touch a flower
    this.size = this.size + this.growRate;
    this.size = this.size + this.growRate;

    let growth = random(0, this.growRate);
    this.size = this.size + growth;
    this.size = constrain(this.size, 0, this.maxSize);
  }


  display() {
    // wings
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(this.x - this.size / 2, this.y, this.size / 2);
    // console.log(`Fly display: ${this.x}, ${this.y}, ${this.size}`);
    ellipse(this.x + this.size / 2, this.y, this.size / 2);
    pop();

    // body
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();

    // eyes
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x - this.size / 10, this.y, this.size / 10);
    ellipse(this.x + this.size / 10, this.y, this.size / 10);
    pop();
  }

  mousePressed() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size / 2 + this.size / 3) {
      this.alive = false;
    }
    // console.log("U killed Fly");

  }

} //end of class
