class Car extends Vehicule {

  constructor(x,y){
    super(x,y);
      this.width = 50;
    this.height = 20;
    this.vx = 5;
    this.drunkeness = 0.2;
    }

move(){
  this.veer();
  super.move();
}

veer(){
let r=random();
if (r< this.drunkeness) {
  this.vy = random(-5,5);
}
}

  display() {
    super.display();
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
