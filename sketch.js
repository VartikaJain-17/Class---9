var box 
function setup() {
  createCanvas(400,400);
 box =  createSprite(200,200,50,50)
 
}

function draw() 
{
  background(30);

  if(keyDown("right")){
  box.x = box.x+5
  }
  if(keyDown("left")){
  box.x = box.x-5
  }

drawSprites()
}




