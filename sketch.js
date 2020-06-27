
var car,wall ;
var speed,weight;
function setup() {
  createCanvas(1200,600);
  car = createSprite(50, 200, 50, 50);
  wall=createSprite(1100,200,60,height/2)
  speed=random(54,96)
  weight=random(400,1400)
  wall.shapeColor= (80,80,80);
  wall.visible = true;
  
  car.velocityX = speed;
  
  if(wall.x-car.x<(car.width+wall.width/2))
  {
  car.velocityX = 0;
  var deformation = 0.5*weigth*speed*speed/22500
  if (deformation>180){
  

  

  car.shapeColor = color("red");
  }
}

if(deformation<100){}

  car.shapeColor= color("green")}


  
function draw() {
  background(0);
  
  if(car.isTouching(wall)){
    car .velocityX = 0;
  }

    
  

  
  


  drawSprites();
  
}