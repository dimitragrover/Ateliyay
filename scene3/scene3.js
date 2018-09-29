  var x,y;

  function setup(){
createCanvas(720,480);
  x = width / 2;
  y = height;
}

function draw() {
  background(0,0,0);
  
  // Draw a circle
  stroke(50);
  fill(255,0,0);
  ellipse(x+40, y, 65);
  fill(255,255,255);
  ellipse(x-40,y,65);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1.09, 1.09);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height/2;
  }
}