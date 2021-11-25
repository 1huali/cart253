class MakeUps
{
  constructor(x,y,img, visageImg,name) {
    this.x=x;
    this.startX=x;
    this.startY=y;
    this.y=y;
    this.img=img;
    this.name=name;
    this.visageImg= visageImg;
    this.w=this.img.width/2;
    this.h=this.img.height/2;
    console.log(this.img.width)
    this.monoClick = false;
    this.chosen = false;
    this.hover= false;
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

mouseHover(){
    let d = dist(mouseX, mouseY, this.x, this.y)

    if (d < this.width / 2){
      hover=true;
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

  displayMakeups (){
image(this.img, this.x,this.y,this.w,this.h);
imageMode(CENTER);
}

} //end class
