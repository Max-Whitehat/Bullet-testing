var wall,thickness;
var bullet,speed,weight;

function setup(){
  createCanvas(1600,400)
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(0,200,50,50);
  wall=createSprite(1200,200,thickness,height/2)
  bullet.velocityX=speed;
  wall.shapeColor="gray"
  bullet.shapeColor="white"
}






function draw(){
  
  background("black")

if(hasCollided(bullet,wall)){
  bullet.collide(wall)
  
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

if(damage>10){
  wall.shapeColor="red"

}else if(damage<10){
  wall.shapeColor="green"

}



}

drawSprites();
}


function hasCollided(lbullet,lwall){
 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x - lwall.width;
 if(bulletRightEdge>=wallLeftEdge){
  return true
 }else{
 return false;
 }
}
