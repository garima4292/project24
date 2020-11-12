
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3;
var ground;
var tissue;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log1 = new Log(600,660,200,20);
	log2 = new Log(490,620,20,100);
	log3 = new Log(710,620,20,100);

	ground = new Ground(400,680,800,20);

	tissue = new Ball(150,200,25);

	
  
}


function draw() {
  background("yellow");

  Engine.update(engine);
  
  log1.display();
  log2.display();
  log3.display();

  ground.display();

  tissue.display();
}



function keyPressed(){
if(keyCode === UP_ARROW){
	Body.applyForce(tissue.body,tissue.body.position,{x:85,y:-85})
}
}