var r = 70;

function setup(){
  createCanvas(720,480);
  frameRate(50000);
}

function draw(){
  background (0,0,0);


  //shape1
  fill(255,0,0);
  ellipse(width/2, height/2 , 65);
  noStroke();
  //shape 2 (scene 4 and 4.1, 4.2 just reversed the random(r) or combined)
  
  for( var i=0; i<10; i++){
  translate(width / 2, height / 2);
  translate(random(r), 150);
  fill(255,255,255);
  ellipse(0, 0, 65);

  }
}
