var ball, ballImg;
var paddleImg, paddle;

function preload() {

  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");
}

function setup() {
  createCanvas(800, 400);
  paddle = createSprite(700, 200, 20, 100);
  paddle.shapeColor  = "white";
  paddle.addImage("paddles", paddleImg);
  ball = createSprite(400, 200, 20, 20);
  ball.addImage("balls", ballImg);
  ball.shapeColor = "yellow";
  ball.velocityX = -9;
  ball.velocityX = 4;
  ball.velocityY = 2;

}

function draw() {
  background(225);

  paddle.y = mouseY;

  createEdgeSprites();
  //ball.bounceOff(edges[2]);
  //ball.bounceOff(bottomEdge);
  //ball.bounceOff(leftEdge);
  //ball.bounceOff(paddle);
  //paddle.collide(bottomEdge);
  //paddle.collide(TopEdge);
  ball.bounceOff(paddle);
  
  if(keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 20;
  }

  randomVelocity();

  drawSprites();
  
}

function randomVelocity() {

  if(ball.bounceOff(paddle)) {
    ball.velocityY = 3;
    ball.velocityX = -3;
  }

}