var particle;  

function setup(){
	createCanvas(600,600);
	noStroke();
	particle={
		x:100,
		y:100,
		xspeed: random(1,4),
		yspeed: random(1,4)
	};

}

function draw() {
	background(255, 10);
	fill(particle.x, particle.y, 150);
	
	push();
	translate(particle.x , particle.y);
	rotate(frameCount/20);
	
	var pulse = (frameCount/10) % 20;
	pulse += 10;
	ellipse(10, 10, pulse);
	ellipse(-10,-10,pulse);
	ellipse(10, -10, pulse);
	ellipse(-10, 10, pulse);
	pop();

	checkedges();
	particle.x += particle.xspeed;
	particle.y += particle.yspeed;
}

function checkedges(){
	if (particle.x > width|| particle.x <0) {
		particle.xspeed *= -1;

	}
	if (particle.y > height|| particle.y <0) {
		particle.yspeed *= -1;

	}
}