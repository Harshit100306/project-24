const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1, log1;
var box3,box4,pig2,log2;
var box5,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    rubber1 = new rubber(800,200,60,60);
    sand1 = new sand(900,200,20,20);
    ground = new Ground(600,height,1200,20);
    steel1 = new steel(650,200,100,100);
    hammer1 = new hammer(480,200,125,125);
    stone1 = new stone(300,200,150,150);
    
  


}

function draw(){
    background(0);
    Engine.update(engine);
    rubber1.display();
    sand1.display();
    ground.display();
    hammer1.display();
    stone1.display();
    steel1.display();
  
}