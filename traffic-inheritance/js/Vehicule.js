class Vehicule {

  constructor(x, y, vx) {
    this.x = x;
    this.y = y;
    this.width = undefined;
    this.height = undefined;
    this.vx = undefined;
    this.vy = 0;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  wrap() {
    if (this.x > width) {
      this.x -= width;
    }
  }
  display() {
    // TBD
  }
} //end class
