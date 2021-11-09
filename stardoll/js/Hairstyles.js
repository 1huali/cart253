class Hairstyles
{
  constructor(x,y,r,g,b) {
    this.x=x;
    this.y=y;
    this.width=150;
    this.height=50;
    this.fill ={
      this.r=r;
      this.g=g;
      this.b=b;
    }



drag(){
  if(mouseIsPressed){
    let d= dist(mouseX, mouseY, this.x,this.y)
    console.log("mouse is being pressed")
    if (d < this.width){
    // console.log("hair is being pressed")
      this.x= mouseX;
      this.y= mouseY;
    }
  }
}

  function displayHipBox(){
  // tbd
  }

  function displayHair (){
  // tbd
  }

  function checkHairPosition(){
// unactivated, but tbh if anything
  }
} //end class
