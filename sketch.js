const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var drops=[];
var maxdrops=100

function preload(){
    
}

function setup(){
   createCanvas(700,700)
   engine=Engine.create();
   world=engine.world;

    if(frameCount%150===0){
    for(var i=0;i<maxdrops;i++){
  drops.push(new drop(random(0,700),random(0,700)));
    }
    }
}

function draw(){
    background(0)
    Engine.update(engine);
    for(var i=0;i<maxdrops;i++){
drops[i].display();
drops[i].update();
    }
    drawSprites();
}   

