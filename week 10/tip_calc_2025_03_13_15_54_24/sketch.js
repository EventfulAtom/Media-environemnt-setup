var bill
var tip
var perc
var tipAmt
var tipErase

function setup() {
  createCanvas(800, 400);
background (255, 255, 255)

bill = createInput("Enter your bill")
bill.position(75, 100)
bill.size(100, 50)
  
tip = createInput("Enter your tip")
tip.position(200, 100)
tip.size(100, 50)
  
button = createButton('calculate')
button.position(75, 200)
button.size(100, 50)
button.mousePressed(function(){tipCalc()});
 
button = createButton('clear')
button.position(200, 200)
button.size(100, 50)
button.mousePressed(function(){tipErase()});

fill(255, 255, 255)
rect(350, 100, 100, 50)
}
function tipCalc()
{
fill(0, 0, 0)
tipAmt = bill.value() * tip.value() * .01
text(round(tipAmt,2), 355, 120, 100, 50)
}
function tipErase()
{
fill(255, 255, 255)
rect(350, 100, 100, 50)
}

