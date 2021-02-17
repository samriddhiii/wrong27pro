class bob {
    constructor(xpos,ypos, radius)
    {
        var box_options= {
            restitution:1,
            friction:0,
            isStatic:false,
            density:0.8
            }
    this.r=radius;
    this.y=ypos;
    this.x=xpos;
    
    this.body = Bodies.circle(this.x,this.y,this.r/2,box_options);
    World.add(world,this.body);
    
   }

   display()
   {
    var position= this.body.position;

    push();
    translate(position.x,position.y)
    rectMode(CENTER)
    fill("pink")
    ellipse(0,0,this.r,this.r)
    pop();
   }
}
