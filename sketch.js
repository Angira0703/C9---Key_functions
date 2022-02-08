var player;
function setup() {
  createCanvas(400,400);
  player = createSprite(200, 200, 40, 40)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    player.position.x += 3
  }
  else if (keyIsDown(LEFT_ARROW)){
    player.position.x -= 3
  }
  else if (keyIsDown(UP_ARROW)){
    player.position.y -= 3
  }
  else if (keyIsDown(DOWN_ARROW)){
    player.position.y += 3
  }

 
  drawSprites();

}




