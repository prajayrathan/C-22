const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,ground,ball;

function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;
  var object_options={
    isStatic:true
  }


 ground=Bodies.rectangle(200,390,200,20,object_options); 
 World.add(myworld,ground)


 var ball_options={
   restitution:1.0
 }

 ball=Bodies.circle(200,100,20,ball_options)
 World.add(myworld,ball)
 console.log(ground);
 console.log(ground.position.x);
 console.log(ground.position.y);
}

function draw() {
  background(0);
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,300,20);  

ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
}