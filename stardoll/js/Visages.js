class Visages
{
  constructor(x,y,img, visageImg) {
    this.x=x;
    this.startX=x;
    this.startY=y;
    this.y=y;
    this.visageImg= visageImg;
    this.w=this.visageImg.width/2;
    this.h=this.visageImg.height/2;
    console.log(this.img.width)
    this.monoClick = false;
    this.chosen = false;
    }



drag(){
  if(mouseIsPressed && (muClicked=== false || this.monoClick === true)) {
    let d= dist(mouseX, mouseY, this.x,this.y)
    console.log("mouse is being pressed")
    if (d < this.h/3){
      muClicked = true;
      this.monoClick = true;
    console.log("makeUp is being pressed")
      this.x= mouseX;
      this.y= mouseY;
    }
  }
}


 makeUpReturns(){
   this.x=this.startX;
   this.y=this.startY;
}

  displayVisage(){
  image(this.visageImg, 600, 200,this.vw,this.vh);
  imageMode(CENTER);
  }

} //end class
