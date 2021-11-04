class SportsCar extends Car {

  constructor(x,y){
    super(x,y);
    this.vx = 15;
    }

handleInput(){
    if (keyIsDown(LEFT_ARROW)) {
       this.vx = -this.speed;
     }
     else if (keyIsDown(RIGHT_ARROW)) {
       this.vx = this.speed;
     }
     else {
       this.vx = 0;
     }

     if (keyIsDown(UP_ARROW)) {
       this.vy = -this.speed;
     }
     else if (keyIsDown(DOWN_ARROW)) {
       this.vy = this.speed;
     }
     else {
       this.vy = 0;
     }
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
