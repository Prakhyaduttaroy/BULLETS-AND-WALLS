
var bullet,wall,speed,weight,damage,wall1,thickness, height =400; 
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  
  bullet =createSprite(50, 200, 50, 10);
 bullet.shapeColor="white";
  thickess = random(22,83);
  wall =createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background(0,0,0); 
   bullet.velocityX =speed;
   
      if(hasCollided(bullet,wall)){
        bullet.velocityX = 0;
        damage = 0.5 * weight* speed * speed/(thickness* thickness * thickness);
        if(damage>10)
        wall.shapeColor="red";
        else
        wall.shapeColor="green";
      }
      
  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge = bullet.x+ bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
  return false;

}