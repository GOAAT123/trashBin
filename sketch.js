const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var trash;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 600);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(100,320,30);
	trash= new Trash(725, 550, 10, 80);
	trash2= new Trash(670, 585, 100, 10);
	trash3= new Trash(615, 550, 10, 80);
    ground = new Ground(600,height,1200,20);	
}

function draw() {
  background(0);
  Engine.update(engine);

    ball.display();
    ground.display();
    trash.display();
	trash2.display();
    trash3.display();
//   drawSprites();
}
 
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:140,y:-150});
	}
}