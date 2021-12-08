class Hairstyles
{
  constructor(x,y,img,name) {
    this.x=x;
    this.y=y;
    this.name = name;
    this.img=img;
    this.w=this.img.width/2;
    this.h=this.img.height/2;
    console.log(this.img.width)
    this.monoClick = false;
    this.hover = false;
    this.chosen=false;
    }



drag(){
  if(mouseIsPressed && (hairClicked=== false || this.monoClick === true)) {
    let d= dist(mouseX, mouseY, this.x,this.y)
    console.log("mouse is being pressed")
    if (d < this.h/2){
      hairClicked = true;
      this.monoClick = true;
    console.log("hair is being pressed")
      this.x= mouseX;
      this.y= mouseY;
    }
  }
}

mouseHover(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.w / 2){
      this.hover=true;
    }
    else {
    this.hover = false;
  }
}

  displayHipBox(){
  // tbd
  }

  displayHair (){
    imageMode(CENTER);
image(this.img, this.x,this.y);
}
  //
  // checkDrag(){
  //   }
} //end class
