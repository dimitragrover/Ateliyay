var maxSize = 100
var phase = 0, speed = 0.05;

function setup() {
	createCanvas(500, 500);
}

function draw() {
 background(100, 144, 255);
 var y = height/2 + sin(phase) * 75;
 	var x = width/2;
 	var sizeOffset = (cos(phase) +1) *0.75;
 	var circleSize = sizeOffset * maxSize;
 	var sizeOffset = (cos(phase) +1) *0.75;
	 	var circleSize = sizeOffset * maxSize;
	 	ellipse(x, y, random(circleSize), circleSize);
	 	fill(255,255,180);
	 	phase = frameCount * speed;
	 	noStroke();
 
 }
 
 
 
 	
 

 
 
 // attempted code to generate multiple
/* var maxSize = 100
var phase = 0, speed = 0.05;
var circles = [];
var number = 10;

function setup() {
	createCanvas(500, 500);
	for( var i=0; i< number; i++) {
	 circles.push(new circle(width/2, height/2));

	}
}

function draw() {
 background(186, 85, 211);
 for (var i = 0; i <circles.length; i ++) {
 	circles[i].move();
 	circles[i].display();
 }
 }
 
 function circle(x, y){
 	this.x = x;
 	this.y = y;

 	this.move = function() {
 		this.y = height/2 + sin(phase) * 75;
 		this.x = width/2;
 		var sizeOffset = (cos(phase) +1) *0.75;
 		var circleSize = sizeOffset * maxSize;
 	
 }
 	this.display = function() {
	 	var sizeOffset = (cos(phase) +1) *0.75;
	 	var circleSize = sizeOffset * maxSize;
	 	ellipse(x, y, circleSize, circleSize);
	 	phase = frameCount * speed;
	 	noStroke();
 }
 

 }
 
 */
 



