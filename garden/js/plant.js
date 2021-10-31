// archived idea: user planting plants
class Plant {

  constructor(x,y){
      this.x= mouseX,
      this.y= mouseY,
      this.size=50,
      this.petalThickness= 10,
      this.stemLength=75,
      this.stemThickness=10,
      this.stemColor= {
        r:50,
        g:150,
        b:50
      };
      this.petalColor= {
        r:200,
        g:50,
        b:50,
      };
      this.centerColor= {
        r:50,
        g:0,
        b:0
      }
    };

    // move(){
    //   this.x = mouseX;
    //   this.y=mouseY;
    // }

    toPLant (){
        if (mousePressed){
          display();
        }
    }


    display(){
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
