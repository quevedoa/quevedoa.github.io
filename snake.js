let dir = 'right';
let vel = 2;

let xCord = 20;
let yCord = 20;

let fxCord = 80;
let fyCord = 80;

function setup() {
  createCanvas(400, 400);
  updateFruit();
}

function draw() {
  background(0);
  updatePlayer();
  makePlayer();
  makeFruit();
  checkCollisions();
}

function checkCollisions() {
  if (xCord===fxCord && yCord===fyCord) {
    updateFruit();
  }
}

function makePlayer() {
  fill(255)
  rect(xCord, yCord, 20, 20);
}

function updatePlayer() {
  switch(dir) {
    case 'right':
      xCord = xCord + vel;
      break;
    case 'left':
      xCord = xCord - vel;
      break;
    case 'up':
      yCord = yCord - vel;
      break;
    case 'down':
      yCord = yCord + vel;
      break;
  }
}

function makeFruit() {
  ellipse(fxCord, fyCord, 10, 10);
}
function updateFruit() {
  fxCord = floor(random(10, (width - 100) / 10)) * 10;
  fyCord = floor(random(10, (height - 100) / 10)) * 10;
}

function keyPressed() {
   switch(keyCode) {
     case LEFT_ARROW:
       dir = 'left';
       break;
     case RIGHT_ARROW:
       dir = 'right';
       break;
     case UP_ARROW:
       dir = 'up';
       break;
     case DOWN_ARROW:
       dir = 'down';
       break;   
   }
}
