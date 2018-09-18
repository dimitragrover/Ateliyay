var r = 500;
var value = 255;

function setup(){
  createCanvas(760,700);
  frameRate(50);
}

function draw(){
  background (0,0,0);


  positionX = mouseX;
  positionY = mouseY;

  textSize(250);
  textFont('Impact');
text("click", 30, height/2);
fill(255, 255, 255);
  
  
  //shape1
  fill(value);
  ellipse(positionX, positionY , random(r));
  noStroke();
}

function mousePressed(){
  if (value === 255){
    value = 0;
      } else {
        value = 255;
      }
}
