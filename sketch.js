
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var zone1,zone2,zone3;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	paper= new Paper(190,200,20);

	ground=new Ground1(400,600,800,10)

	zone1=new dustBin1 (600,590,60,10);
	zone2=new dustBin1 (561,580,10,30);
	zone3=new dustBin1 (639,580,10,30);
}

function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 paper.display();
 ground.display();
 zone1.display();
 zone2.display();
 zone3.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-13});
}
}