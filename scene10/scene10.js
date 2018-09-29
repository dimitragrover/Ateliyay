// var Xplace =0;
// var r= 70;

// function setup(){
//   createCanvas(720, 480)

// }


// function draw(){
//   background(0);

//   Xplace = Xplace -1;
//   if (Xplace < 0) {
//     Xplace = width;
//   }
//   fill(255,20,147);
//   ellipse(Xplace, height/2, 65);
//   noStroke();

//   Xplace = Xplace -1;
//   if (Xplace < 0) {
//     Xplace = width;
//   }
//   fill(255, 20, 147);
//   ellipse(Xplace+75, height/2, 65);
//   noStroke();

// }

var r = 200;

function setup(){
  createCanvas(720,480);
  frameRate(5);
}

function draw(){
  background (0,0,0);
  
  for( var i=0; i<3000; i++){
  fill(255,20,147);
  noStroke();
  ellipse(random(width), random(height), 65);

  }
}

