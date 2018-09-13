function setup() {
  // put setup code here
  	 createCanvas(1000,750);
}

function draw() {
	//circle (x,y,w,h)
	//fourth number is opacity (100)
	// alpha on the background makes it fade
	background(0,5);
	stroke(mouseX, mouseY,50);
	fill(mouseX, mouseY, 175);
	//mouseX, mouseY to trace
if (mouseIsPressed) {
	for(var i=0; i <10; i++) {
		ellipse(mouseX +random(50),mouseY +random(50),30,30);
}
	}
  
}