class SportsCar extends Car {

  constructor(x,y){
    super(x,y);
    this.vx = 15;
    }

  display() {
    super.display();
    push();
    rectMode(CENTER);
    noStroke();
    fill(0, 0, 255);
    rect(this.x, this.y- this.height/10, this.width, this.width,this.height/10);
    rect(this.x, this.y+ this.height/10, this.width, this.width,this.height/10);
    pop();
  }
}
