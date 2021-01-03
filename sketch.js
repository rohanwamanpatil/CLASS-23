const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);

   box1=new Box(200,250,100,100);
   box2=new Box(240,150,100,180);
    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);



    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);

   box1.display();
   box2.display();
}