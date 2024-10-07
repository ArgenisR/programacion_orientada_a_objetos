let posX, posY;
let velX, velY;
let diametro;
let rad;
let backgroundC;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rad = ceil(random(20, 50));
  diametro = rad * 2;
  posX = random(rad, width - rad);
  posY = random(rad, height - rad);

  velX = (-5, 5);
  velY = (-5, 5);
  backgroundC = color(255, 210, 200);
}

function draw() {
  background(backgroundC);
  fill(255);
  noStroke();
  posX += velX;
  posY += velY;

  if (posX + rad > width || posX - rad <= 0) {
    velX *= -1;
    changeBgColor();
  }

  if (posY + rad > height || posY - rad <= 0) {
    velY *= -1;
    changeBgColor();
  }

  circle(posX, posY, diametro);
}
function changeBgColor() {
  backgroundC = color(random(255), random(255), random(255));
}
