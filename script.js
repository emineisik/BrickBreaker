var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");
 
var red_brickH = 30;
var red_brickW = 170;
var red_brickX = 115;
var red_brickY = 20;

var blue_brickH = 30;
var blue_brickW = 170;
var blue_brickX = 315;
var blue_brickY = 20;

var green_brickH = 30;
var green_brickW = 170;
var green_brickX = 515;
var green_brickY = 20;

var purple_brickH = 30;
var purple_brickW = 170;
var purple_brickX = 215;
var purple_brickY = 90;

var yellow_brickH = 30;
var yellow_brickW = 170;
var yellow_brickX = 415;
var yellow_brickY = 90;

var redB = [];
var blueB = [];
var greenB = [];
var purpleB = [];
var yellowB = [];

redB[0] = {status: 1};
blueB[0] = {status: 1};
greenB[0] = {status: 1};
purpleB[0] = {status: 1};
yellowB[0] = {status: 1};


var ballX = 10;
var ballY = 10;
var ballSpeedY = 3;
var ballSpeedX = 3;
var ballRadius = 10;

var paddleH = 18;
var paddleW = 125;
var paddleX = (canvas.width - paddleW)/2;
var rightPad = false;
var leftPad = false;

var score = 0;
var color = "#ADD8E6";

var stickH = 10;
var stcikW = 220;
var stcikX = 240;
var stcikY = 180;


function drawBall(){
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  ctx.fillStyle=color;
  ctx.fillStroke=color;
  ctx.stroke = "10";
  ctx.fill();
  ctx.closePath();

}

function drawBrick(){

  if(redB[0].status == 1){

  ctx.beginPath();
  ctx.rect(red_brickX, red_brickY, red_brickW, red_brickH);
  ctx.fillStyle="#FF0000";
  ctx.fill();
  ctx.closePath();

  }

  if(blueB[0].status == 1){

  ctx.beginPath();
  ctx.rect(blue_brickX, blue_brickY, blue_brickW, blue_brickH);
  ctx.fillStyle="#0000FF";
  ctx.fill();
  ctx.closePath();
  }

  if(greenB[0].status == 1){

  ctx.beginPath();
  ctx.rect(green_brickX, green_brickY, green_brickW, green_brickH);
  ctx.fillStyle="#006400";
  ctx.fill();
  ctx.closePath();

  }

  if (purpleB[0].status == 1) {

  ctx.beginPath();
  ctx.rect(purple_brickX, purple_brickY, purple_brickW, purple_brickH);
  ctx.fillStyle="#660099";
  ctx.fill();
  ctx.closePath();

  }

  if (yellowB[0].status == 1){

  ctx.beginPath();
  ctx.rect(yellow_brickX, yellow_brickY, yellow_brickW, yellow_brickH);
  ctx.fillStyle=" #FFFF00";
  ctx.fill();
  ctx.closePath();

  }
}


function drawPaddle(){
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleH - 10, paddleW, paddleH);
  ctx.fillStyle="#ADD8E6";
  ctx.fill();
  ctx.closePath();

}

function drawStick(){
  ctx.beginPath();
  ctx.rect(stcikX, stcikY, stcikW,stickH);
  ctx.fillStyle="#000000";
  ctx.fill();
  ctx.closePath();

}

function drawScore(){

  ctx.font = "30px Arial";
  ctx.fillStyle = "#000000"
  ctx.fillText ("Score: "+score, 0, 600);

}

function ballMovement() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;


  //collision with wall 
  if(ballX > canvas.width || ballX < 0) {
    ballSpeedX = -ballSpeedX;
  }
  
  if(ballY > canvas.height){
    alert("GAME OVER!");
    document.location.reload();
    clearInterval(loop);
  }
   if(ballY < 0) {
    ballSpeedY = -ballSpeedY;
    
  }

  var bottomOfBall = ballY + ballRadius;
  var topOfPaddle = canvas.height - paddleH - 10;
  var leftSideOfPaddle = paddleX;
  var rightSideOfPaddle = leftSideOfPaddle + paddleW;

  //collision with paddle

  if(bottomOfBall >= topOfPaddle
    && ballX >= leftSideOfPaddle
    && ballX + ballRadius <= rightSideOfPaddle){
    ballSpeedY = -ballSpeedY;
    ballY = canvas.height - paddleH - 10 - ballRadius;
  }

}


function ballBrickCollision(){

  var bottomOfBall = ballY + ballRadius;
  var topOfBall = ballY; 

  var topOfRedBrick = red_brickY;
  var bottomOfRedBrick = red_brickY + red_brickH;
  var leftSideOfRedBrick = red_brickX;
  var rightSideOfRedBrick = red_brickX + red_brickW;

  var topOfBlueBrick = blue_brickY;
  var bottomOfBlueBrick = blue_brickY + blue_brickH;
  var leftSideOfBlueBrick = blue_brickX;
  var rightSideOfBlueBrick = blue_brickX + blue_brickW;

  var topOfGreenBrick = green_brickY;
  var bottomOfGreenBrick = green_brickY + green_brickH;
  var leftSideOfGreenBrick = green_brickX;
  var rightSideOfGreenBrick = green_brickX + green_brickW;

  var topOfPurpleBrick = purple_brickY;
  var bottomOfPurpleBrick = purple_brickY + purple_brickH;
  var leftSideOfPurpleBrick = purple_brickX;
  var rightSideOfPurpleBrick = purple_brickX + purple_brickW;

  var topOfYellowBrick = yellow_brickY;
  var bottomOfYellowBrick = yellow_brickY + yellow_brickH;
  var leftSideOfYellowBrick = yellow_brickX;
  var rightSideOfYellowBrick = yellow_brickX + yellow_brickW;


  if(redB[0].status == 1){
  if(bottomOfBall >= topOfRedBrick 
    && topOfBall <= bottomOfRedBrick
    && ballX >= leftSideOfRedBrick
    && ballX + ballRadius <= rightSideOfRedBrick){
    
    ballSpeedY = -ballSpeedY;
    redB[0].status = 0;

    color = "#FF0000";

     score += 20;
     if(score >= 230){endGame();}
    
  }
}
  
 if(blueB[0].status == 1){ 
  if(bottomOfBall >= topOfBlueBrick 
    && topOfBall <= bottomOfBlueBrick
    && ballX >= leftSideOfBlueBrick
    && ballX + ballRadius <= rightSideOfBlueBrick){
    
    ballSpeedY = -ballSpeedY;
    blueB[0].status = 0;

     color = "#0000FF";

     score += 40;
     if(score >= 230){endGame();}

  
  }
}

  if(greenB[0].status == 1){
   if(bottomOfBall >= topOfGreenBrick 
    && topOfBall <= bottomOfGreenBrick
    && ballX >= leftSideOfGreenBrick
    && ballX + ballRadius <= rightSideOfGreenBrick){
    
    ballSpeedY = -ballSpeedY;
    greenB[0].status = 0;
    
    color = "#006400";

     ctx.fill();
     ctx.closePath();

     score += 80;
     if (score >= 230) {endGame(); }

  }
}

  if(purpleB[0].status == 1){
   if(bottomOfBall >= topOfPurpleBrick 
    && topOfBall <= bottomOfPurpleBrick
    && ballX >= leftSideOfPurpleBrick
    && ballX + ballRadius <= rightSideOfPurpleBrick){
    
    ballSpeedY = -ballSpeedY;
    purpleB[0].status = 0;

    color = "#660099";

     score += 60;
     if (score >= 230) {endGame();}
    
  }
}


  if (yellowB[0].status == 1) {
   if(bottomOfBall >= topOfYellowBrick 
    && topOfBall <= bottomOfYellowBrick
    && ballX >= leftSideOfYellowBrick
    && ballX + ballRadius <= rightSideOfYellowBrick){
    
    ballSpeedY = -ballSpeedY;
    yellowB[0].status = 0;
    
    color = "#FFFF00";

      score += 50;
      if (score >= 230 ) {endGame();}

  }
}

  if(ballY >= 180.1 - ballRadius && ballY <= 180.1 + 10 + ballRadius && ballX >= 240.1 - ballRadius && ballX <= 240.1 + 220 + ballRadius){

    if(ballX < 240.1){

      ballSpeedX = -ballSpeedX;
    }

    else if (ballX > 460.1 ) {

      ballSpeedX = -ballSpeedX;
    }
    else{

      ballSpeedY = -ballSpeedY;
    }

}
}

function endGame(){

  setTimeout(function(){
    alert("YOU WIN, CONGRATULATIONS!");
    document.location.reload();
    clearInterval(loop);
  },50);
}

function drawAll (){
  ctx.clearRect(0,0, canvas.width, canvas.height);

  drawBall();
  drawPaddle();
  drawBrick();
  drawScore();
  drawStick();
}


function moveAll (){
  ballMovement();
  ballBrickCollision();

}

function updateAll(){
  drawAll();
  moveAll();
}


function mouseMoveHandler(e){
 
  var relativeX=e.clientX-canvas.offsetLeft;
 
  if(relativeX>0 && relativeX<canvas.width){
 
     if((relativeX-paddleW/2>=0) && (relativeX-paddleW/2<=(canvas.width-paddleW)))
        paddleX=relativeX-paddleW/2;
 
  }
 
 
}

document.addEventListener("mousemove", mouseMoveHandler, false);


var loop = setInterval(updateAll,10);

