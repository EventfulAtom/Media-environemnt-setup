function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(220);
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
}