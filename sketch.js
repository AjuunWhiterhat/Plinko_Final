
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground
var plinko = [];
var particles = [];
var divisions = [];
var divisionHeight=300

function preload()
{
	
}

function setup() {
	 createCanvas(480, 800);
	


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(43,795,width*2,10);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  for (var k = 0; k<=width; k = k + 80){
	divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

  ground.display();

  
  
  drawSprites();
 
}