var ants = [];
function setup(){
	createCanvas(400,400);
	for ( var i=0, i < 100, i++){

var ant = {
	x: width/2,
	y: height/2,
	xspeed: random(1,4),
	yspeed: random(1,4),
	march: function (){//update x abd y
		this.x += this.xspeed;
		this.y += this.yspeed;
	}
}
};
ants.push(ant);
}


function draw(){
	for ( var i =0; ants.length; i ++){
		ellipse(ants[i].x, ants[i].y, 10);
		ants[i].march();
	}
}