var setrect, movingrect;

function setup() {
  createCanvas(800,400);
  setrect = createSprite(100, 200, 50, 50);
  setrect.shapeColor = "red";
  setrect.debug = true;
  setrect.velocityX = 2;

  movingrect = createSprite(700,200,50,40);
  movingrect.shapeColor = "red";
  movingrect.debug = true;
  movingrect.velocityX = -2;

}

function draw() {
  background(0);
  
  /*movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x - setrect.x < movingrect.width/2 + setrect.width/2 &&
    setrect.x - movingrect.x < movingrect.width/2 + setrect.width/2 && 
    setrect.y - movingrect.y < movingrect.width/2 + setrect.width/2 &&
    movingrect.y - setrect.y < movingrect.width/2 + setrect.width/2){
      setrect.shapeColor = "blue";
      movingrect.shapeColor = "blue";
  }

  else{
    setrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }*/

  
  if(movingrect.x - setrect.x < movingrect.width/2 + setrect.width/2 && 
    setrect.x - movingrect.x < movingrect.width/2 + setrect.width/2 ){
      setrect.velocityX = setrect.velocityX *(-1);
      movingrect.velocityX = movingrect.velocityX *(-1);
    }

    if(setrect.y - movingrect.y < movingrect.width/2 + setrect.width/2 &&
      movingrect.y - setrect.y < movingrect.width/2 + setrect.width/2){
        setrect.velocityY = setrect.velocityY *(-1);
        movingrect.velocityY = movingrect.velocityY *(-1);
    }

  drawSprites();
}