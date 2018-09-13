var shouldIPlay = true;


function setup(){
	createCanvas(600, 600);
	ele = createAudio('link to song');
	radio = createRadio();
	radio.option('off');
	radio.option('on');
	//ele.autoplay(true);

}

function draw(){}

function mousePressed(){
	rect(mouseX, mouseY, 100, 100);
	ele.speed(mouseX/width);
	ele.volumer(mouseY/height);
	//createP('This is some text');

	if (radio.value() === "on")
	if (shouldIPlay) {
		ele.play();
	}else{
	ele.pause();

}


}

