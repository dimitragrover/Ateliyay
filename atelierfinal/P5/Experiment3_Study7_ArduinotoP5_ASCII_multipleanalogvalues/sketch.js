var song;

function setup() {
  window.onload = function() {
  var context = new AudioContext();
  song = loadSound('sounds/choir.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}
//testing if music plays with button like in the sample
document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}
function mousePressed() {

