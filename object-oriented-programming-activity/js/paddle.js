class Paddle {

  constructor(w,h) {
    // why dont we define the variables here?
      this.width= w;
      this.height= h;
      this.x=0;
      this.y= height - this.height/2;
      this.color= 255;
  }

  move() {
      this.x = mouseX;
  }

  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
