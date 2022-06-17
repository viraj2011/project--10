var life=0

var alienship1 = createSprite(350, 50,20,20);
alienship1.setAnimation("alienship1");
alienship1.scale = 0.1;

var alienship2 = createSprite(50, 120,20,20);
alienship2.setAnimation("alienship2");
alienship2.scale = 0.1;

var alienship3 = createSprite(350, 190,20,20);
alienship3.setAnimation("alienship3");
alienship3.scale = 0.1;

var alienship4 = createSprite(50, 260,20,20);
alienship4.setAnimation("alienship4");
alienship4.scale = 0.1;

var player = createSprite(200, 350, 20, 20);
player.setAnimation("robot");
player.scale = 0.1;

alienship1.velocityX=-8
alienship2.velocityX=8
alienship3.velocityX=-8
alienship4.velocityX=8

createEdgeSprites();


function draw() {
  
background("black");
    
  
  
  fill("yellow");
  stroke("blue");
  strokeWeight(4);
  
  textSize(24);
  text("Lives : " + life,300,20);
  


  alienship1.bounceOff(edges);
  alienship2.bounceOff(edges);
  alienship3.bounceOff(edges);
  alienship4.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    player.y=player.y-4
    
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+4
  }
if (
     player.isTouching(alienship1)||
     player.isTouching(alienship2)||
     player.isTouching(alienship3)||
     player.isTouching(alienship4))
  {
     player.x = 200;
     player.y = 350;
     life = life + 1;
  }
  
 drawSprites();
 
}

