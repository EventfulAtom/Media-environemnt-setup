bgColor = 220
var sizeX = 30
var sizeY = 30
function setup() {
  createCanvas(500, 400);
  background(bgColor);


//setup Better button 
let betterButton;
betterButton = createButton('Red');
betterButton.size (100, 30);
betterButton.position(10,10);
betterButton.style('background:red')
betterButton.mousePressed(changedBetter)

  let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('/better.mp3');
}

//setup blue button 
let blueButton;
blueButton = createButton('Blue');
blueButton.size (100, 30);
blueButton.position(10,70);
blueButton.style('background:blue');
blueButton.mousePressed(changedBlue);


//setup eraser 
let clearButton;
clearButton = createButton('erase');
clearButton.size (100, 30);
clearButton.position(10,130);
clearButton.style('background:white');
clearButton.mousePressed(changedClear);

//setup reset 
let resetButton;
resetButton = createButton('reset');
resetButton.size (100, 30);
resetButton.position(10,190);
resetButton.style('background:bgColor');
resetButton.mousePressed(changedReset);


//setup Big 
let bigButton;
bigButton = createButton('Big');
bigButton.size (100, 30);
bigButton.position(10,250);
bigButton.style('background:bgColor');
bigButton.mousePressed(sizeBig);

//setup small 
let smallButton;
smallButton = createButton('Small');
smallButton.size (50, 50);
smallButton.position(150,310);
smallButton.style('background:bgColor');
smallButton.mousePressed(sizeSmall);
}

function changedBetter(){
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(changedBetter);
  background(220);
  text('tap here to play', 10, 20);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play('better.mp3');
}

function changedBlue(){
  fill('Blue')
}
  function changedClear(){
  fill('bgColor')
}
function changedReset(){
  fill(bgColor)
  background('bgColor')
}
function sizeBig(){
  var sizeX = 100
  var sizeY = 100
}
function sizeSmall(){
  var sizeX = 10
  var sizeY = 10
}
function draw() {
  noStroke()
  if(mouseIsPressed){
  ellipse (mouseX, mouseY, sizeX, sizeY)
  }
  else{}
}
