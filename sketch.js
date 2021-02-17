
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  roof1= new roof(380,140,350,35)

	bobb1= new bob(200,550,50)
	bobb2= new bob(290,550,50)
	bobb3= new bob(380,550,50)
	bobb4= new bob(470,550,50)
	bobb5= new bob(560,550,50)

  rope1= new rope(bobb1.body,roof1.body,-52*2,0)
  rope2= new rope(bobb2.body,roof1.body,-26*2,0)
  rope3= new rope(bobb3.body,roof1.body,0*2,0)
  rope4= new rope(bobb4.body,roof1.body,26*2,0)
  rope5= new rope(bobb5.body,roof1.body,52*2,0)

  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.run(engine);

  bobb1.display();
  bobb2.display();
  bobb3.display();
  bobb4.display();
  bobb5.display();
  
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobb5.body,bobb5.body.position,{x:120,y:-30});
    console.log("10"); 
  }
}



