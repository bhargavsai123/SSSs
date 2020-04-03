const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var sunImage;
var sun,earth;
var chain;
function preload(){
    
}

function setup() {
  var canvas= createCanvas(1000,1000);
  
  engine = Engine.create();
  world =engine.world;

  var sun_options={
    isStatic: true
 }

  sun = Bodies.circle(300,300,30,sun_options);
    World.add(world,sun);

  earth = Bodies.circle(200,200,30,30);
    World.add(world,earth);

    Body.setVelocity(earth, {x:10,y:-10});

    var options={
      bodyA:sun,
      bodyB:earth,
      stiffness: 0.5,
      lenght: 100
  }


  Chain= Constraint.create(options);
  World.add(world,Chain);

  engine.world.gravity.y=0;

}

function draw() {
  background(0);  

  Engine.update(engine);


  ellipseMode(RADIUS);
  ellipse(sun.position.x,sun.position.y,30,30);

 
  ellipseMode(RADIUS);
  ellipse(earth.position.x,earth.position.y,30,30);


}