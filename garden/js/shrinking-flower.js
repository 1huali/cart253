class Flower {

  constructor(x, y, size, stemLength, petalColor) {
    this.x = x,
      this.y = y,
      this.size = size,
      this.maxSize=size,
      this.petalThickness = 10,
      this.stemLength = stemLength,
      this.stemThickness = 10,
      this.maxPetalThickness = 10,
      this.growRate= 0.05,
      this.stemColor = {
        r: 50,
        g: 150,
        b: 50
      };
    this.petalColor = petalColor,
      this.centerColor = {
        r: 50,
        g: 0,
        b: 0
      },
      this.alive = true;
  };

  display() {
    // Q:why do we push pop here?
    // A:
    push();
    // stem
    strokeWeight(this.stemThickness);
    stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
    line(this.x, this.y, this.x, this.y + this.stemLength);
    // petal
    strokeWeight(this.petalThickness);
    stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
    fill(this.centerColor.r, this.centerColor.g, this.centerColor.b)
    ellipse(this.x, this.y, this.size);
    pop();
  }

  shrink() {
    let shrinkage = random(0, 0.1);
    this.size = this.size - shrinkage;
    this.petalThickness = this.petalThickness - shrinkage / 10;

    if (this.size <= 0 || this.petalThickness <= 0) {
      this.alive = false;
    }
  }

  pollinate(){
    this.size= this.size + this.growRate;
    this.petalThickness= this.petalThickness+ this.growRate;

    let growth = random(0, this.growRate);
    this.size = this.size + growth;
    this.size= constrain(this.size,0,this.maxSize);
    this.petalThickness= constrain(this.petalThickness, 0,this.maxPetalThickness);
  }

} //end of flower class
