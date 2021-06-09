
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5, bobObj6;
var tree, treeimg;
var wall;
var chain1, chain2, chain3;
var chain4, chain5, chain6;
var ground;
var apple1, apple, apple3, apple4, apple5, apple, apple7, apple8;
var boy, boyImg;
var boy2, boy2img;
var form,system,code,security, score = 0;
var award;
var awardImg;
var microscpe, microImg;
var missile, missileImg;
var ocean, oceanImg;
var women, img;
var bullseye, bullseyeimg;
var play = 1;
var end = 0;
var gameState = play;
var wrong;
var bg, bgimg;
function preload(){
	boyImg = loadImage("boy.png");
	boy2img = loadImage("boy1.png");
	awardImg = loadImage("award.png");
  microImg = loadImage("microscope.png");
  missileImg = loadImage("missile.png");
  oceanImg = loadImage("ocean.png");
  img = loadImage("fainting.png");
  bullseyeimg = loadImage("bullseye.gif");
  bgimg = loadImage("bg2.jpeg");
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	award = createSprite(500, 600, 50, 50);
	award.addImage("img", awardImg);
	award.scale = 0.8;
	award.visible = false;

  bullseye = createSprite(800, 500, 50, 50);
	bullseye.addImage("img", bullseyeimg);
	bullseye.scale = 0.8;
	bullseye.visible = false;

	boy2 = createSprite(280, 350, 4, 4);
	boy2.addImage("img", boy2img);
	boy2.scale = 0.3;
	boy2.visible = true;

  //microscope sprit...
  microscpe = createSprite(500, 400, 4, 4);
	microscpe.addImage("img", microImg);
	microscpe.scale = 0.5;
	microscpe.visible = false;

  //creating missile sprite...
  missile = createSprite(500, 450, 4, 4);
	missile.addImage("img", missileImg);
	missile.scale = 0.6;
	missile.visible = false;


  //creating ocean sprite..
  ocean = createSprite(500, 540, 4, 4);
	ocean.addImage("img", oceanImg);
	ocean.scale = 1.8;
	ocean.visible = false;

  //creating women sprite
  women = createSprite(500, 350, 4, 4);
	women.addImage("imghi", img);
	women.scale = 0.3;
	women.visible = false;

	//boy sprite...
	boy = createSprite(640, 600, 20, 5);
	boy.addImage("image", boyImg);
	boy.scale = 0.66;
  boy.visible = true;
	//tree object...
	tree = new Tree(750, 428, 450, 550);
	//ground object...
	ground = new Ground(500, 690, 1000, 20);
	//mango objects...
	apple1 = new Apple(570, 360, 40);
	apple2 = new Apple(690, 380, 60);
	apple3 = new Apple(820, 400, 80);
	apple4 = new Apple(740, 340, 40);
	apple5 = new Apple(850, 300, 50);
	apple6 = new Apple(690, 300, 45);
	apple7 = new Apple(875, 270, 40);
	apple8 = new Apple(740, 230, 40);

  bobObj1 = new Bob(165, 600, 100);
	bobObj2 = new Bob(325, 600, 100);
	bobObj3 = new Bob(495, 600, 100);
	bobObj4 = new Bob(645, 600, 100);
	bobObj5 = new Bob(835, 600, 100);
	wall = new Roof(500, 40, 890 , 50);
	chain1 = new Rope(bobObj1.body, wall.body, -320, 0);
	chain2 = new Rope(bobObj2.body, wall.body, -160, 0);
	chain3 = new Rope(bobObj3.body, wall.body, 0, 0);
	chain4 = new Rope(bobObj4.body, wall.body, 160, 0);
	chain5 = new Rope(bobObj5.body, wall.body, 320, 0);

	security = new Security();
  system = new System();
  //wrong = new Wrong();
	Engine.run(engine);
}


function draw() {
  background("lightblue");

  textSize(30);
  fill("brown");
  text("Score: " + score, 850, 50);
  if(gameState === play){
    //tree display...
  tree.display();
  //ground display...
  ground.display();
  //mangoes objects...
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  apple6.display();
  apple7.display();
  apple8.display();

  clues();


  if(score === 1){
    clear();
    background("lightblue");
    missile.visible = true;
    boy.visible = false;
    clues6();
    textSize(30);
    fill("brown");
    text("Score: " + score, 850, 50);
  }

  if(score === 2) {
    clear();
	  boy2.visible = false;
    boy.visible = false;
    missile.visible = false;
    background("lightblue")
    wall.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    bobObj1.display();
    bobObj2.display();
    bobObj3.display();
    bobObj4.display();
    bobObj5.display();
    clues2();
    textSize(30);
    fill("brown");
    text("Score: " + score, 850, 50);
  }

  if(score === 3){
    clear();
    background("lightblue");
    ocean.visible = true;
    clues5();
    textSize(30);
    fill("brown");
    text("Score: " + score, 850, 50);
  }


  if(score === 4){
    clear();
    background("lightblue");
    microscpe.visible = true;
    ocean.visible = false;
    clues3();
    textSize(30);
    fill("brown");
    text("Score: " + score, 850, 50);
  }

  if(score === 5){
    clear();
    background("lightblue");
    women.visible = true;
    microscpe.visible = false;
    ocean.visible = false;
    clues4();
    textSize(30);
    fill("brown");
    text("Score: " + score, 850, 50);
  }


  }
  endState();
  win();
  security.display(); 
  drawSprites();
 }

function isTouching(object1, object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2 
      && object1.x - object2.x < object2.width/2 - gameobject1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object1.y - object2.y < object2.height/2 - object1.height/2) {
     return true;
    }
    else{
      return false;
    }
  }

  function keyPressed(){
    if(keyCode === UP_ARROW) {
      Matter.Body.applyForce(bobObj1.body, bobObj1.body.position,{x:-200, y:-25});
    }
  }

  function endState(){
    if(gameState === end){
      clear();
      background(bgimg);
      textSize(80);
      fill("darkblue");
      text("Better luck next time", 150, 350);
      textSize(60);
      fill("black");
      text("score: " + score, 150, 150);
      boy2.visible = false;
      boy.visible = false;
      award.visible = false;
      missile.visible = false;
      ocean.visible = false;
      women.visible = false;
      microscpe.visible = false;
    }
  
  }

  function win(){
    if(score === 6){
      clear();
      background("pink");
      award.visible = true;
      bullseye.visible = true;
      textSize(60);
      fill("black");
      text("BRAVO!!!", 150, 250);
      textSize(40);
      fill("darkblue");
      text("Congratulations, you are good at science!!", 150, 350);
      textSize(60);
      fill("red");
      text("score: " +score, 150, 150);
      microscpe.visible = false;
      women.visible = false;
      
    }     
  }