function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(10, random(100, 150), 255, 10);

  strokeWeight(3);
  noFill();
  stroke(mouseY, 150, 200);
  circle(mouseX + 80, mouseY - 80, mouseX);

  strokeWeight(1);
  stroke(0, 255, 0);
  fill(0, 150, 200);
  rect(mouseX, mouseY, 100, 100);
}
