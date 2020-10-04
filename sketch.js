
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3,ground4;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12;
var obstacle13,obstacle14,obstacle15;
var ball1;
var rand;
var score;
var particle;
var turn;
var gameState;
var particle;

function preload()
{
	
}

function setup() {
	createCanvas(700, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rand = random(100,600);
	ground1 = new Ground(350,740,800,20);
	ground2 = new Ground(350,700,10,400);
	ground3 = new Ground(175,700,10,400);
	ground4 = new Ground(525,700,10,400);
	obstacle1 = new Obstacle(350,200,10);
	obstacle2 = new Obstacle(262.5,200,10);
	obstacle3 = new Obstacle(437.5,200,10);
	obstacle4 = new Obstacle(525,200,10);
	obstacle5 = new Obstacle(175,200,10);
	obstacle6 = new Obstacle(87.5,200,10);
	obstacle7 = new Obstacle(612.5,200,10);
	obstacle8 = new Obstacle(306.75,280,10);
	obstacle9 = new Obstacle(393.75,280,10);
	obstacle10 = new Obstacle(481.25,280,10);
	obstacle11 = new Obstacle(568.75,280,10);
	obstacle12 = new Obstacle(656.25,280,10);
	obstacle13 = new Obstacle(219.25,280,10);
	obstacle14 = new Obstacle(131.75,280,10);
	obstacle15 = new Obstacle(44.25,280,10);
	ball1 = new Ball(rand,30,25);
	score = 0;
	gameState = "play";
	particle = createSprite(350,500,700,20);
	particle.visible = false;
	
	


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("lightgray");

	text("Score: "+score,620,20);

	text("100",250,600);
	text("100",430,600);
	text("200",605,600);
	text("200",75,600);
	
	Engine.update(engine);

	ground1.display();
	ground2.display();
	ground3.display();
	ground4.display();
	obstacle1.display();
	obstacle2.display();
	obstacle3.display();
	obstacle4.display();
	obstacle5.display();
	obstacle6.display();
	obstacle7.display();
	obstacle8.display();
	obstacle9.display();
	obstacle10.display();
	obstacle11.display();
	obstacle12.display();
	obstacle13.display();
	obstacle14.display();
	obstacle15.display();
	ball1.display();

	drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setStatic(ball1.body,false);
	}
}

function mousePressed(){
	if(gameState!=="end"){
		if(body1.body.position.x < 350){
			if(body1.body.position.x > 175){
				score = score + 100;
			}
			if(body1.body.position.x < 175){
				score = score + 200;	
			}
		}
		if(body1.body.position.x > 350){
			if(body1.body.position.x > 525){
				score = score + 200;
			}
			if(body1.body.position.x < 525){
				score = score + 100;
			}
		}

	}
}

function reset(){
	if(keyCode === 82){
		ball1.body.x = rand;
		ball1.body.y = 30;
		Matter.Body.setStatic(ball1.body,true);
	}
}

function receivePoints(){
	if(ball1.body.isTouching(ground1.body)){
		gameState = "end";
	}
}