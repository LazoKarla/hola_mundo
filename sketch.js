function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(100, 150), random(0, 100), 0);
  fill(mouseY, 150, 200);
  circle(mouseX + 80, mouseY - 80, mouseX);
  fill(0, 150, 200);
  rect(mouseX, mouseY, 100, 100);
}
