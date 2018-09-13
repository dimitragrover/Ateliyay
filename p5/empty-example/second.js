function setup() {
	createCanvas(600,600);
	textSize(50);

}

function draw() {
	//background(frameCount % 255);
	fill(mouseX, mouseY, 100);

	if(mouseIsPressed) {
		push();
		translate(mouseX, mouseY, 100);
		
		rotate(frameCount % 100);
		text("Dimitra", 0, 0);
		pop();
		//push and pop resets the positioning of (0,0), should use this when using translate
		
	}else{
		text("Dimitra", mouseX,mouseY);
	}


}