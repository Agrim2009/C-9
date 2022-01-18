varbox;
function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 30, 30)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
     box.postition.x = box.postition.x + 5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.postition.x = box.postition.x - 5
 }
 if(keyIsDown(UP_ARROW)){
  box.postition.y = box.postition.y + 5
}
if(keyIsDown(DOWN_ARROW)){
  box.postition.y = box.postition.y - 5
}
  drawSprites()

}




