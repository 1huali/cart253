class Hair1 extends Hairstyles
{

  constructor(x,y,r,g,b) {
    super(x,y,rg,b)
    this.x=900;
    this.y=100;
    this.width=150;
    this.height=50;
    this.fill ={
      this.r=0;
      this.g=250;
      this.b=0;
    }


drag(){

  }


  function displayHipBox(){
  // tbd
  }

  function displayHair (){
    push();
    fill(this.fill.r,this.fill.g,this.fill.b);
    strokeWeight(4)
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

  function checkHairPosition(){
  }

} //end class
