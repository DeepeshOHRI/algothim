  var fixedRect,movingRect
  
  
  function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green"

  movingRect=createSprite(400,200,80,50);
  movingRect.shapeColor="green"
}

function draw() {
  background(255,255,255);
  movingRect.x=World.mouseX 
  movingRect.y=World.mouseY
  drawSprites();
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 ){
 
    movingRect.shapeColor="yellow"
    fixedRect.shapeColor="yellow"
  }
  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
}