var object1,object2;

function setup() {
  createCanvas(1200,800);
  object1 = createSprite(600, 400, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(400,200,80,30);
  object2.shapeColor = "green";
  object2.debug = true;
  object3 = createSprite(300, 400, 50, 80);
  object3.shapeColor = "yellow";
  object3.debug = true;
  object4 = createSprite(300,100,80,30);
  object4.shapeColor = "yellow";
  object4.debug = true;
  object4.velocityX=3;
  object3.velocityY=-3;

}

function draw() {
  background(0,0,0);  
  object1.x = World.mouseX;
  object1.y = World.mouseY;

 if(isTouching(object1,object2)){
  object1.shapeColor = "red";
  object2.shapeColor = "red";
 }else{
  object1.shapeColor = "green";
  object2.shapeColor = "green";
 }
 bounceOff(object4,object3);
  drawSprites();
}

