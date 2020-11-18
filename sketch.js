// Name Spacing

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true
  }

  object = Bodies.rectangle(200, 380, 600, 20, object_options);
  World.add(world, object);

  var ball_options = {
    restitution: 1.0
  }
ball  = Bodies.circle(100,100,20, ball_options);
World.add(world, ball);
  console.log(object)

 
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
 // rect(200, 200, 50, 50);
  rect(object.position.x, object.position.y, 600,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20);
}