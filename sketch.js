var waveBackround,swimmer;
var shark,polythene,can,bottle;
var waveBackgroundImg,swimmerImg;
var sharkImg,polytheneImg,canImg,bottleImg;

var PLAY=1; 
var END=0;
var gamestate=1;

var polytheneG,sharkG,canG,BottleG

var bubble;
var bubbleimg;
var bubbleG;

function preload(){
    waveBackgroundImg = loadImage("WaveBackground.gif");
    swimmerImg = loadImage("Swimmer.gif");
    sharkImg = loadImage("Shark.jpg");
    polytheneImg = loadImage("polythene.png");
    canImg = loadImage ("Can.png");
    bottleImg = loadImage ("Bottle.png");
    bubbleimg = loadImage ("bubble.jpg");
}

function setup() { 
    createCanvas(1200,600);


    waveBackround=createSprite(500,100);
    waveBackround.addImage(waveBackgroundImg);
    waveBackround.scale = 2.5;
    //waveBackround.x = waveBackround.width/2;

    swimmer = createSprite(300,200,20,20);
    swimmer.addImage(swimmerImg);
    swimmer.scale=.2;
    
canG=new Group();
polytheneG=new Group();
sharkG=new Group();
BottleG=new Group();

bubbleG=new Group();

}

function draw() {
    background("lightgreen");

    //if(gamestate===PLAY){

        waveBackround.velocityX = -5;
        swimmer.y = World.mouseY;
        if(waveBackround.x<0){
            waveBackround.x = waveBackround.width/2+400;
        }

        edges= createEdgeSprites();
         swimmer.collide(edges);
        
         if(waveBackround.y > height ){
            waveBackround.y = height/2;}

       
            createShark();
            createPolythene();
            createCan();
            createBottle();       
   
//}
drawSprites();
}
function createBottle() {
    if (World.frameCount % 200 === 0) {
    var bottle = createSprite(Math.round(random(50, 1000),Math.round(random(50,300), 10, 10)));
    bottle.addImage(bottleImg);
    bottle.scale=0.1;
    bottle.velocityX = -5;
    bottle.lifetime = 200;
    }
  }

  function createCan(){
    if (World.frameCount % 200 === 0) {
        var can = createSprite(Math.round(random(50, 1000),Math.round(random(50,300), 10, 10)));
        can.addImage(canImg);
        can.scale=0.11;
        can.velocityX = -5;
        can.lifetime = 200;
        }
    }

        function createPolythene(){
            if (World.frameCount % 200 === 0) {
                var polythene = createSprite(Math.round(random(50, 1000),Math.round(random(50,300), 10, 10)));
                polythene.addImage(polytheneImg);
                polythene.scale=0.11;
                polythene.velocityX = -5;
                polythene.lifetime = 200;
                }
            }

            function createShark(){
                if (World.frameCount % 200 === 0) {
                    var shark = createSprite(Math.round(random(50, 1000),Math.round(random(50,300), 10, 10)));
                    shark.addImage(sharkImg);
                    shark.scale=0.11;
                    shark.velocityX = -5;
                    shark.lifetime = 200;
                    }}
  

