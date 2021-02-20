var Object1;
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 object1=createSprite(300,200,50,80);
 object1.shapeColor="green";
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  
  fixedRect = createSprite(200,200,50,80)
  fixedRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



