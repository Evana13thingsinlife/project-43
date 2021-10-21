function preload(){
  bg = loadImage("images/spacebg.jpg");
  issImg = loadImage("images/iss.png");
  scImg1 = loadImage("images/spacecraft1.png");
  scImg2 = loadImage("images/spacecraft2.png");
  scImg3 = loadImage("images/spacecraft3.png");
  scImg4 = loadImage("images/spacecraft4.png");
  
}



function setup() {
  createCanvas(800,400);
 spaceCraft= createSprite(400, 220, 50, 50);
  spaceCraft. addImage(scImg1);
  spaceCraft.scale=0.15;

  iss= createSprite(400, 160, 50, 50);
  iss. addImage(issImg);
  iss.scale=0.55;
}


function draw() {
  background(bg);
 
  drawSprites();
}