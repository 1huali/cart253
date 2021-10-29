class Ball {

  constructor() {
      this.x=x,
        this.y=y,
        this.size=
        this.speed=
        this.velocity=
        this.color={
          r:250,
          g:10,
          b:10
        }
  }

  move() {
    this.x = mouseX
    this.y = mouseY;

    if mousePressed(){

      // ball relachée
    }
  }

  bounce(){
let d = dist(this.x,this.y,paddle.x,paddle.y);
if (d < this.size){
  this.velocity=-this.velocity
}
  }

  display() {
    push();
    fill(this.fill);
    color(this.color.r,this.color.g,this.color.b);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
