var maxSize = 100
var phase = 0, speed = 0.05;

function setup() {
	createCanvas(720, 480);
}

function draw() {
 background(0,0,0);
 var y = height/2 + sin(phase) * 75;
 	var x = width/2;
 	var sizeOffset = (cos(phase) +1) *0.9;
 	var circleSize = sizeOffset * maxSize;
 	var sizeOffset = (cos(phase) +1) *0.9;
	 	var circleSize = sizeOffset * maxSize;
	 	ellipse(x, y, random(circleSize), circleSize);
	 	fill(255,0,0);
	 	phase = frameCount * speed;
	 	noStroke();
 
 }