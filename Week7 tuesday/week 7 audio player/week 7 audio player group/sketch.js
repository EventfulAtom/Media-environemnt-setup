let song1
let song2
let song3
let song4
let song5

function preload(){
song1 = loadSound('better.mp3');
  song2 = loadSound('floating.mp3');
  song3 = loadSound('future.mp3');
  song4 = loadSound('inspiring.mp3');
song5 = loadSound('movement.mp3');
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(97, 98, 186);

//setup start Better button 
let betterButton;
betterButton = createButton('Better');
betterButton.size (100, 30);
betterButton.position(10,10);
betterButton.style('background:white');
betterButton.mousePressed(playSong1);
  
//setup start Better button 
let stopbetterButton;
stopbetterButton = createButton('StopBetter');
stopbetterButton.size (100, 30);
stopbetterButton.position(150,10);
stopbetterButton.style('background:white');
stopbetterButton.mousePressed(stopSong1);
  
  
//setup floating button 
let floatingButton;
floatingButton = createButton('Floating');
floatingButton.size (100, 30);
floatingButton.position(10,70);
floatingButton.style('background:white');
floatingButton.mousePressed(playSong2);
  
//setup floating button 
let stopfloatingButton;
stopfloatingButton = createButton('Floating');
stopfloatingButton.size (100, 30);
stopfloatingButton.position(150,70);
stopfloatingButton.style('background:white');
stopfloatingButton.mousePressed(stopSong2);
  
//setup future button 
let futureButton;
futureButton = createButton('Future');
futureButton.size (100, 30);
futureButton.position(10,130);
futureButton.style('background:white');
futureButton.mousePressed(playSong3);
  
//setup future button 
let stopfutureButton;
stopfutureButton = createButton('Future');
stopfutureButton.size (100, 30);
stopfutureButton.position(150,130);
stopfutureButton.style('background:white');
stopfutureButton.mousePressed(stopSong3);
  
//setup inspiring button 
let inspiringButton;
inspiringButton = createButton('Inspiring');
inspiringButton.size (100, 30);
inspiringButton.position(10,190);
inspiringButton.style('background:white');
inspiringButton.mousePressed(playSong4);
  
//setup inspiring button 
let stopinspiringButton;
stopinspiringButton = createButton('Inspiring');
stopinspiringButton.size (100, 30);
stopinspiringButton.position(150,190);
stopinspiringButton.style('background:white');
stopinspiringButton.mousePressed(stopSong4);
  
//setup movement button 
let movementButton;
movementButton = createButton('Movement');
movementButton.size (100, 30);
movementButton.position(10,250);
movementButton.style('background:white');
movementButton.mousePressed(playSong5);
  
//setup movement button 
let stopmovementButton;
stopmovementButton = createButton('Movement');
stopmovementButton.size (100, 30);
stopmovementButton.position(150,250);
stopmovementButton.style('background:white');
stopmovementButton.mousePressed(stopSong5);
}

function playSong1(){
 song1.play();
}

function stopSong1(){
song1.stop()
}

function playSong2(){
song2.play()
}

function stopSong2(){
  song2.stop()
}

function playSong3(){
  song3.play()
}

function stopSong3(){
  song3.stop()
}

function playSong4(){
  song4.play()
}

function stopSong4(){
  song4.stop()
}

function playSong5(){
  song5.play()
}

function stopSong5(){
  song5.stop()
}


