
function setup(){
    createCanvas(700,700);
    frameRate(10);
}
 function draw(){
    background(mouseX, mouseY, 255);
    for(var i = 0; i < 100; i++){
        //ellipse(width/2, height/2, 10);
        noStroke();
        ellipse(random(width), random(height), 10);
        translate(random(),random());
  
    }
  }