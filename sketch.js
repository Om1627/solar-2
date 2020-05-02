
var sun,mercury,venus;
var sunimg,mercuryimg,venusimg,earthImg, marsImg, jupeterImg, saturnImg, uranusImg, neptuneImg;;
var angle=0;
var anglespeed =0.2

function preload(){
    sunimg=loadImage("u.png");
    mercuryimg=loadImage("me.png");
    venusimg=loadImage("ve.png");
    earthImg = loadImage("e.png");
    marsImg = loadImage("m.png");
    jupeterImg = loadImage("ju.png");
    saturnImg = loadImage("s.jpg");
    uranusImg = loadImage("n.jpg");
    neptuneImg = loadImage("ep.png");

}


function setup() {
    createCanvas(800, 800);
    sun = createSprite(0, 0);
    sun.addImage("sun", sunimg);
    sun.scale = 0.3;
    sun.setCollider("circle", -85, -60, 140);
    sun.debug = true;

    mercury = createSprite(70, 50);
    mercury.addImage("mercury", mercuryimg);
    mercury.scale = 0.1;
    mercury.setCollider("circle", 0, 0, 300);
    mercury.debug = true;

    venus = createSprite(210, 60);
    venus.addImage("venus", venusimg);
    venus.scale = 0.15;

    earth = createSprite(150, -18);
    earth.addImage("earth", earthImg);
    earth.scale = 0.22;

    mars = createSprite(30, 220);
    mars.addImage("mars", marsImg);
    mars.scale = 0.2;

    jupiter = createSprite(-180, 210);
    jupiter.addImage("jupiter", jupeterImg);
    jupiter.scale = 0.3;

    saturn = createSprite(340, -30);
    saturn.addImage("saturn", saturnImg);
    saturn.scale = 0.3;

    uranus = createSprite(220, 350);
    uranus.addImage("uranus", uranusImg);
    uranus.scale = 0.2;

    neptune = createSprite(-340, -320);
    neptune.addImage("neptune", neptuneImg);
    neptune.scale = 0.1;
  
}

function draw() {
background(0);
 
    angle=angle+anglespeed;
    angleMode(DEGREES);
    translate(width/2,height/2);
    rotate(angle);


 if (sun.collide(mercury)){
 mercury.destroy();
  
 }
 if (sun.collide(venus)){
  venus.destroy();
 }
 sun.debug = true;
 mercury.debug = true;
 

  if (World.frameCount % 10===0){
    sun.scale=sun.scale+0.01
}
  drawSprites();
}
