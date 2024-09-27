//function setup() {
//createCanvas(windowWidth, windowHeight);
//frameRate(50);
//background(300);
//rectMode(CENTER);
//}

//function draw() {
//background(10, random(100, 150), 255, 10);

//strokeWeight(3);
//noFill();
//stroke(mouseY, 150, 200);
//circle(mouseX + 80, mouseY - 80, mouseX);

//strokeWeight(1);
//stroke(0, 255, 0);
//fill(0, 150, 200);
//rect(mouseX, mouseY, 100, 100);
//}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(50);
  background(300);
  describe("Two purple points drawn on a gray canvas. The scene spins slowly.");
  rectMode(CENTER);
}

function draw() {
  background(200);
  rotateY(frameCount * 0.01);

  stroke("purple");
  strokeWeight(100);

  point(mouseX, -100, 0);

  point(mouseX, 100, 0);
}
