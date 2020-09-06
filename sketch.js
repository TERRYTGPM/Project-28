const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, treeSPIRIT, thinrubberbandonsticks;
var thestupidestkidontheplanetearth;
var stonethhing;
var mango1, mango2, mango3, mango4, mango5;

function preload(){
	thetree = loadImage("Plucking mangoes/tree.png");
	thedumbboy = loadImage("Plucking mangoes/boy.png");
	
}

function setup(){
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 660, 800, 30);

	treeSPIRIT = createSprite(600, 400, 40, 100);
	treeSPIRIT.addImage(thetree);
	treeSPIRIT.scale = 0.4;

	thestupidestkidontheplanetearth = createSprite(200, 590, 50, 50);
	thestupidestkidontheplanetearth.addImage(thedumbboy);
	thestupidestkidontheplanetearth.scale = 0.1;

	stonethhing = new Stone(30, 500, 50, 50);

	mango1 = new Mango(610, 300, 40);
	mango2 = new Mango(510, 300, 40);
	mango3 = new Mango(710, 300, 40);
	mango4 = new Mango(560, 380, 40);
	mango5 = new Mango(660, 220, 40);
	
	Engine.run(engine);

	thinrubberbandonsticks = new Slingshot(stonethhing.body, {x: 130, y: 520});
  
}


function draw(){
	rectMode(CENTER);
	background(100);

  	drawSprites();
	ground.display();
	stonethhing.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	detectcollision(stonethhing, mango1);
	detectcollision(stonethhing, mango2);
	detectcollision(stonethhing, mango3);
	detectcollision(stonethhing, mango4);
	detectcollision(stonethhing, mango5);

 
}

function mouseDragged(){

	Matter.Body.setPosition(stonethhing.body, {x:mouseX, y:mouseY});

}

function mouseReleased(){

	thinrubberbandonsticks.fly();

}

function detectcollision(lstone, lmango){

	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if(distance <= lmango.diameter + lstone.height && distance <= lmango.diameter + lstone.width){

	Matter.Body.setStatic(lmango.body, false);

  }
}

function keyPressed(){

	if(keyCode===32){

	  Matter.Body.setPosition(stonethhing.body, {x: 130,y: 520});
	  thinrubberbandonsticks.attach(stonethhing.body);

	}

}