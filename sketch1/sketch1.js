var Xplace = 0;
var c = "black";

function setup() {
	createCanvas(720,480);
	frameRate(100);

}

function draw() {
	background('#fae');
	Xplace = Xplace - 1;
	if (Xplace < 0) {
		Xplace = width;
	}
	rect(Xplace, 0, Xplace, height);
		stroke(c);
	fill(0, 0, 0);
		textSize(50);
		textFont('Arial Black');
    		text("YOU CAN'T SIT WITH US", 32, height/2);
			
	}


console.log("here is my first experiment");
