class Flower {

  constructor(x, y,size,stemLength,petalColor){
      this.x= x,
      this.y= y,
      this.size= size,
      this.petalThickness= 10,
      this.stemLength= stemLength,
      this.stemThickness=10,
      this.stemColor= {
        r:50,
        g:150,
        b:50
      };
      this.petalColor= petalColor,
      this.centerColor= {
        r:50,
        g:0,
        b:0
      }
    };

    display(){
      // why do we push pop here?
      push();
      // stem
      strokeWeight(this.stemThickness);
      stroke(this.stemColor.r,this.stemColor.g,this.stemColor.b);
      line(this.x,this.y,this.x,this.y+this.stemLength);
      // petal
      strokeWeight(this.petalThickness);
      stroke(this.petalColor.r,this.petalColor.g,this.petalColor.b);
      fill(this.centerColor.r,this.centerColor.g,this.centerColor.b)
      ellipse(this.x,this.y,this.size);
      pop();
    }
  }
