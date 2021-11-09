class Hairstyles
{
  constructor(x,y,img) {
    this.x=x;
    this.y=y;
    this.img=img;
    this.w=this.img.width/3;
    this.h=this.img.height/3;
    console.log(this.img.width)
    this.monoClick = false;
    // this.width=150;
    // this.height=50;
    // this.fill ={
    //   this.r=r;
    //   this.g=g;
    //   this.b=b;
    }



drag(){
  if(mouseIsPressed && (hairClicked=== false || this.monoClick === true)) {
    let d= dist(mouseX, mouseY, this.x,this.y)
    console.log("mouse is being pressed")
    if (d < this.w){
      hairClicked = true;
      this.monoClick = true;
    console.log("hair is being pressed")
      this.x= mouseX;
      this.y= mouseY;
    }
  }
}

  displayHipBox(){
  // tbd
  }

  displayHair (){
image(this.img, this.x,this.y,this.w,this.h);
imageMode(CENTER);
}
  //
  // checkDrag(){
  //   }
} //end class
