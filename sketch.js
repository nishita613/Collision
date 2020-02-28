var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;


if (isTouching(movingRect,gameObject1)){
  gameObject1.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
else
{
  gameObject1.shapeColor = "green";
  movingRect.shapeColor = "green";

}


  drawSprites();
}

function isTouching(Object1,Object2){

  if(Object1.x - Object2.x < Object1.width/2 + Object2.width/2
    && Object2.x - Object1.x < Object2.width/2 + Object1.width/2
    && Object1.y - Object2.y < Object1.height/2 + Object2.height/2
    && Object2.y - Object1.y < Object2.height/2 + Object1.height/2){
    return true;
  }
  else{
    return false;
  }

}