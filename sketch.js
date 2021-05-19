let muisTeken;
let vierkantGrootte;
let cirkelGrootte;
let glitterDing;

function setup() {
  createCanvas(900, 900);

  //Wolk
  wolk = 100;
  wolkTwee = 40;
  wolkDrie = 140;
  wolkVier = 150;
  wolkVijf = 30;

  //Random bloem
  vierkantGrootte = random(50, 150);
  cirkelGrootte = random(10, 45);
}

function draw() {
  background(178, 255, 255);

  if (mouseIsPressed) {
    stroke(255);
    strokeWeight(6);
  } else {
    stroke(255, 127, 80);
    strokeWeight(6);
  }

  //Glitters
  glitterDing = random(10, 30);
  fill(255, 193, 1930, 150);
  circle(mouseX, mouseY, glitterDing);

  //Zon
  fill(255, 255, 0);

  if (mouseX > 700) {
    fill(85, 85, 85);
    stroke(170, 170, 170, 150);
    strokeWeight(6);
  }

  circle(750, 70, 200);

  // BLOEM DRIEHOEK - steel
  stroke(0, 201, 87);
  strokeWeight(6);
  line(150, 535, 150, 740);

  // BLOEM DRIEHOEK - lichaam
  stroke(255, 255, 255);
  strokeWeight(1);
  fill(0, 104, 139);
  triangle(100, 600, 200, 600, 150, 500);

  // BLOEM DRIEHOEK - lichaam klein
  rectMode(CENTER);
  stroke(255, 255, 255);
  strokeWeight(1);
  fill(255, 128, 0);
  circle(150, 560, cirkelGrootte);

  // BLOEM ROZE - steel
  stroke(0, 201, 87);
  strokeWeight(6);
  line(400, 635, 400, 740);

  // BLOEM ROZE - oranje cirkel
  stroke(255, 255, 255);
  strokeWeight(1);
  fill(255, 128, 0);
  ellipse(400, 600, 70, 70);

  // BLOEM ROZE - grote circels
  fill(255, 130, 171, 190);
  ellipse(427, 640, 48, 48);
  ellipse(450, 597, 48, 48);
  ellipse(425, 555, 48, 48);
  ellipse(375, 640, 48, 48);
  ellipse(350, 597, 48, 48);
  ellipse(375, 555, 48, 48);

  // BLOEM ROZE - kleine circels
  fill(255, 130, 171);
  ellipse(423, 633, 30, 30);
  ellipse(441, 597, 30, 30);
  ellipse(421, 562, 30, 30);
  ellipse(377, 562, 30, 30);
  ellipse(359, 597, 30, 30);
  ellipse(379, 633, 30, 30);

  // BLOEM RANDOM - steel
  stroke(0, 201, 87);
  strokeWeight(6);
  line(700, 535, 700, 740);

  // BLOEM RANDOM - lichaam
  rectMode(CENTER);
  stroke(255, 255, 255);
  strokeWeight(1);
  fill(113, 113, 198);
  rect(700, 540, vierkantGrootte);

  // BLOEM RANDOM - lichaam klein
  rectMode(CENTER);
  stroke(255, 255, 255);
  strokeWeight(1);
  fill(255, 128, 0);
  circle(700, 540, 40);

  //Wolk1
  noStroke();
  fill(250);
  ellipse(wolk, 150, 100, 100);

  wolk = wolk + 1;

  //Wolk2
  noStroke();
  fill(250);
  ellipse(wolkTwee, 120, 120, 110);

  wolkTwee = wolkTwee + 1;

  //Wolk3
  noStroke();
  fill(250);
  ellipse(wolkDrie, 100, 90, 90);

  wolkDrie = wolkDrie + 1;

  //Wolk4
  noStroke();
  fill(250);
  ellipse(wolkVier, 180, 110, 90);

  wolkVier = wolkVier + 1;

  //Wolk5
  noStroke();
  fill(250);
  ellipse(wolkVijf, 190, 140, 110);

  wolkVijf = wolkVijf + 1;
}
