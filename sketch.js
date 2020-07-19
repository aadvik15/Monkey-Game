var monkey , bananaImage , obstacleImage , obstacleGroup , back , score ;

function preload(){

  backImage=loadImage("jungle.jpg");
  
  monkey_running =
loadAnimation("Monkey_0.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  bananaImage = loadImage("Banana.png");
  obstcle_img = loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  
  var back = createSprite(0,0,400,400);
  back.addImage("jungle",back);
  back.velocityX = -4;
  back.x = back.width/2;
  
  var ground = createSprite(200,370,10,400);
      
  ground.visible = false;
  
  
  var monkey = createSprite(150,350,30,30);
  monkey.addImage("monkey",monkey_running);
  
  var bananaG = createGroup();
  
  var score = 0;
  }


function draw(){
 background(255); 
  
  if (back.x < 0){
      back.x = back.width/2;
    }
  
  Food();
  Stone();
  
  if(bananaG.isTouching(monkey)){
     monkey.scale = monkey.scale + 0.2;
    bananaG.destroyEach();
     }
  
  switch(score){
  
    case 10 : monkey.scale = 0.12;
             break;     
    case 20 : monkey.scale = 0.14;
             break;   
    case 30 : monkey.scale = 0.16;
             break; 
    case 40 : monkey.scale = 0.18;
             break; 
    default : break         
  }
  
    if(stoneG.isTouching(monkey)){
     monkey.scale =  0.2;
        }
  
  drawSprites();
  
      stroke = "white"
      textSize(20);
      fill("white");
      text("Score: "+ score,500,50);
  
}

function Food(){

   if (World.frameCount % 60 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = randomNumber(280,320);
    banana.addImage("Banana",bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    
    
    //add each cloud to the group
    bananaG.add(banana);
  }
    
  
  }
function Stone(){

   if (World.frameCount % 60 === 0) {
    var stone = createSprite(400,320,40,10);
    stone.y = randomNumber(280,320);
    stone.addImage("stone",stone_image);
    stone.scale = 0.5;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
    stone.lifetime = 134;
    
    //adjust the depth
    
    
    //add each cloud to the group
    stoneG.add(stone);
  }
    
  
  }
