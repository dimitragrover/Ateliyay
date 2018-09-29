var r = 70;
var Xplace = 0;


function setup(){
  createCanvas(720,480);
  frameRate(50);
}

function draw(){
  background (0,0,0);

  //shape1
  fill(255,0,0);
  ellipse(width/2, height/2 , 65);
  rotate(TWO*PI);
  noStroke();
  //shape 2 (scene 4 and 4.1, 4.2 just reversed the random(r) or combined)
  Xplace = Xplace +1;
  if (Xplace < 0) {
    Xplace = width;
  }
  fill(255,255,255);
  ellipse(Xplace, height/2, random(r));
  noStroke();
}