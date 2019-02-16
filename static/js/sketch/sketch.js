var animation = true;

var width;
var height;

var r = 0;
var cl = 0;
var mood = 'happiness';

var ripples = [];
var sparks = [];
var particles = [];
var flowField;

function setup() {
  updateWindowSize();
  var myCanvas = createCanvas(width, height);
  myCanvas.class('backgroundsketch '+mood);
  // document.getElementById(defaultCanvas0).classList.add('happiness');

  // document.getElementById('name').innerHTML = mood.charAt(0).toUpperCase() + mood.slice(1);
    switch(mood){
      case 'happiness' :
        happySet();
        break;

      case 'sadness' :
        sadSet();
        break;
    }
}

function draw(){
  cl++;
  if(animation){
    document.getElementById('fps').innerHTML = ': ' + floor(getFrameRate()) + 'fps';
    switch(mood){
      case 'happiness' :
        happyDraw(cl);
        break;
      case 'sadness' :
        sadDraw(cl);
        break;
    }
  }
}

function mouseClicked() {
  if (animation) {
    animation = false;
  } else {
    animation = true;
  }
}

function windowResized() {
  updateWindowSize()
  resizeCanvas(width, height);
}

function updateWindowSize(){
  // width = window.innerWidth;
  // height = window.innerHeight;

  width = Math.max(

    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
  );
  height = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
}
