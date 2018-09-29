var xoff1 = 0;
var xoff2 = 1500;
var yPlace = 0;
var xPlace = 0;

function setup(){
	createCanvas(720,480);

}

function draw() {
	background(0,0,0);

	
//using the noise offset values
	var x = map(noise(xoff1), 0, 1, 0, width);
	var y = map(noise(xoff2), 0, 1, 0, height);

	xoff1 += 0.004;
	xoff2 += 0.004;

	ellipse(x, y, 65);
	fill(255,255,255);
	noStroke();
	ellipse(x +65,y,65);
	fill(255,0,0);
	noStroke();


	


}


