
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball0, ball1, ball2, ball3, ball4, ground;
var chain1, chain2, chain3, chain4, chain5;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball0 = new Ball(230, 300);
	ball1 = new Ball(230, 300);
	ball2 = new Ball(230, 300);
	ball3 = new Ball(230, 300);
	ball4 = new Ball(230, 300);
	ground = new Ground(width/2, 30, width, 100);
	chain1 = new Chain(ball0.body, ground.body);
	chain2 = new Chain(ball1.body, ground.body);
	chain3 = new Chain(ball2.body, ground.body);
	chain4 = new Chain(ball3.body, ground.body);
	chain5 = new Chain(ball4.body, ground.body);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ball0.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ground.display();
  ApplyForce();
  drawSprites();
 
}
function ApplyForce(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball4.body,ball4.body.position,{x:85, y:-126});
	}
}



