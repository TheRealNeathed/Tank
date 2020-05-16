class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true

     }
     this.width = width 
     this.height = height
     this.x = x
     this.y = y
    };

    display(){
      arc((this.x+25),this.y,this.width,this.height,PI,PI,CHORD)
      rect(this.x,this.y,this.width,this.height)
      rect((this.x+50),this.y,60,10)
      rect((this.x-10),(this.y+30),70,20,30)

    };
}
