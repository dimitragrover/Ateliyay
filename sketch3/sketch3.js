var xoff1 = 0;
var xoff2 = 1500;
var yPlace = 0;
var xPlace = 0;

function setup(){
	createCanvas(900,760);

}

function draw() {
	background(135, 206, 235);

	
//using the noise offset values
	var x = map(noise(xoff1), 0, 1, 0, width);
	var y = map(noise(xoff2), 0, 1, 0, height);

	xoff1 += 0.004;
	xoff2 += 0.004;

	rect(x, y, 250,250);
	noStroke();
//square1 translating in y direction
	yPlace = yPlace - 1;
	if (yPlace < 0) {
		yPlace = height;
	}
	rect(220, yPlace, 250, 250 );
	noStroke();

	
//square1 translating in x direction
xPlace = xPlace - 1;
	if (xPlace < 0) {
		xPlace = width;
	}
	rect(xPlace, 220, 250, 250 );
	noStroke();


}


