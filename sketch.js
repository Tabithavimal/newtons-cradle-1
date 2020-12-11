
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var cradle;
function preload()
{
	
}

function setup()
 { createCanvas(1600, 700); 
	engine = Engine.create();
	 world = engine.world;
	  //Create the Bodies Here. 
 roofObject= new Cradle(width/2,height/4,width/7,20)
  bobDiameter=40;
  	startBobPositionX=width/2;
	 startBobPositionY=height/4+500;
	 bobObject1=new BobObject(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter,bobDiameter);	
	 bobObject2=new BobObject(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter,bobDiameter); 
	bobObject3=new BobObject(startBobPositionX,startBobPositionY,bobDiameter,bobDiameter);
	bobObject4=new BobObject(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter,bobDiameter);
	 bobObject5=new BobObject(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter,bobDiameter); 
	 rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0) 
	 rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0) 
	 rope3=new Rope(bobObject3.body,roofObject.body,0, 0) 
	 rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0) 
	 rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)
			  
			 
			 Engine.run(engine); }


  



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 roofObject.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();


}

function mouseDragged() {

Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})

	
	}

