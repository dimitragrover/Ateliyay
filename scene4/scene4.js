var r = 70;


function setup(){
  createCanvas(720,480);
  frameRate(50);
}

function draw(){
  background (0,0,0);

  //shape1
  fill(255,0,0);
  ellipse(width/2+50, height/2 , random(r));
  noStroke();
  //shape 2 (scene 4 and 4.1, 4.2 just reversed the random(r) or combined)
  fill(255,255,255);
  ellipse(width/2-50, height/2, random(r));
  noStroke();
}


