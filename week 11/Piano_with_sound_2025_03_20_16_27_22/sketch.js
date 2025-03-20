var osc;
var key_c1;
var key_csharp1;
var key_d1;
var key_dsharp1;
var key_e1;
var key_f1;
var key_fsharp1;
var key_g1;
var key_gsharp1;
var key_a;
var key_asharp1;
var key_b1;
var key_c2;

function setup() {
  createCanvas(1000, 400);
  osc = new p5.Oscillator();
  osc.setType('sine');
  
  //sounds
  key_c1 = new Key();
  key_csharp1 = new Key();
  key_d1 = new Key();
  key_dsharp1 = new Key();
  key_e1 = new Key();
  key_f1 = new Key();
  key_fsharp1 = new Key();
  key_g1 = new Key();
  key_gsharp1 = new Key();
  key_a1 = new Key();
  key_asharp1 = new Key();
  key_b1 = new Key();
  key_c2 = new Key();
}

function draw() {
  background(220);
  
  text("middle C = q", 75, 50)
  
  text("X="+mouseX, 25, 25)
  text("Y="+mouseY, 25, 50)
  
  var whiteW = width/20
  var whiteH = height/1.6
  var blackW = whiteW* (7/12)
  var blackH = whiteH* (2/3)
  var corner = width/100
  var offsetH = height/6
  var offsetW = width/6
  fill (255, 255, 255)
  
  //All the white keys
  for (var i = 0; i < 14; i = i + 1)
  {
  rect(offsetW+(i*whiteW), offsetH, whiteW, whiteH, 0, 0, corner, corner)
  }
    
  //Black 2 groups
  for (var j = 0; j < 2; j = j + 1)
  {
  fill (0, 0, 0)
  rect(offsetW+whiteW-(blackW/2)+(j*whiteW), offsetH, blackW, blackH, 0, 0, corner, corner)
  rect(offsetW+8*whiteW-(blackW/2)+(j*whiteW), offsetH, blackW, blackH, 0, 0, corner, corner)    
  }
   
  //Black 3 groups
  for (var k = 0; k < 3; k = k+1)
  {
  rect(offsetW+4*whiteW-(blackW/2)+(k*whiteW), offsetH, blackW, blackH, 0, 0, corner, corner)
  rect(offsetW+11*whiteW-(blackW/2)+(k*whiteW), offsetH, blackW, blackH, 0, 0, corner, corner)   
  }
  
//make sounds
  key_c1.press()
  
  key_csharp1.press()
  key_csharp1.x = 216
  key_csharp1.y = 211
  key_csharp1.butt = 50
  key_csharp1.freq = 277.1826
  
  key_d1.press()
  key_d1.x = 241
  key_d1.y = 275
  key_d1.butt = 87
  key_d1.freq = 293.6648
  
  key_dsharp1.press()
  key_dsharp1.x = 267
  key_dsharp1.y = 211
  key_dsharp1.butt = 51
  key_dsharp1.freq = 311.1270
  
  key_e1. press()
  key_e1.x = 290
  key_e1.y = 275
  key_e1.butt = 69
  key_e1.freq = 329.6276
  
  key_f1.press()
  key_f1.x = 341
  key_f1.y = 275
  key_f1.butt = 52
  key_f1. freq = 349.2282
  
  key_fsharp1.press()
  key_fsharp1.x = 366
  key_fsharp1.y = 211
  key_fsharp1.butt = 82
  key_fsharp1.freq = 369.9944
  
  key_g1.press()
  key_g1.x = 391
  key_g1.y = 275
  key_g1.butt = 53
  key_g1.freq = 391.9954
  
  key_gsharp1.press()
  key_gsharp1.x = 417
  key_gsharp1.y = 211
  key_gsharp1.butt = 84
  key_gsharp1.freq = 415.3047
  
  key_a1.press()
  key_a1.x = 441
  key_a1.y = 275
  key_a1.butt = 54
  key_a1.freq = 440.0000
  
  key_asharp1.press()
  key_asharp1.x = 466
  key_asharp1.y = 211
  key_asharp1.butt = 89
  key_asharp1.freq = 466.1638
  
  key_b1.press()
  key_b1.x = 491
  key_b1.y = 275
  key_b1.butt = 55
  key_b1.freq = 493.8833
  
  key_c2.press()
  key_c2.x = 541
  key_c2.y = 275
  key_c2.butt = 85
  key_c2.freq = 523.2511
}

function keyReleased()
{
osc.amp(0, 0.5);
}

// constructor function 
function Key () {
 this.butt = 81
 this.freq = 261.6256
 this.x = 193
 this.y = 275
 this. press = function(){
  
  if (keyIsDown(this.butt)) {
  osc.start();
  osc.freq(this.freq);
  osc.amp(1000, 0.05);
  fill (10, 93, 45)
  ellipse(this.x, this.y, 25, 25)
  }
  }
}