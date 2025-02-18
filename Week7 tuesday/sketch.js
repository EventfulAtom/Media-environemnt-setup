let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('/Bike Man.jpg');
  font=loadFont('/SMACK.ttf')
}

function setup() {
  createCanvas(535, 398.6);

  // Draw the image.
  image(img, 0, 0, 535, 398.6);
  
  //label the image
  fill(200, 46, 130)
  textFont(font)
  textSize(36);
  text('BIKEMAN!', 50, 250)
  describe('a sihlouette of a man holding a bike in the air.');
}