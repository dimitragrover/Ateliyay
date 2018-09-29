
var Xplace= 0;

function setup(){
	createCanvas(720,480);
	
}

function draw(){
	background(0,0,0);

	//move circle
	Xplace = Xplace - 1;
	if (Xplace < 0) {
		Xplace = width;
	}
	//red baby character
	ellipse(Xplace-85, 300, 65);
	fill(255,0,0);

	//red Parents
	ellipse(Xplace-30,200, 100);
	fill(255, 0,0);
	ellipse(Xplace-140,200, 100);
	fill(255, 0,0);


}