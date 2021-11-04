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
    } else if (circle.x < 0) {
      circle.x += width;
    }

    if (circle.y > height) {
      circle.y -= height;
    } else if (circle.y < 0) {
      circle.y += height;
    }
  }
  display() {
    // TBD
  }
} //end class
