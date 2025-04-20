let ship;
let asteroids = [];
let gameOver = false;
let win = false;
let startTime;
let gameTime = 60; // seconds

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  startTime = millis();
}

function draw() {
  background(20);

  if (!gameOver) {
    let elapsed = (millis() - startTime) / 1000;
    let remaining = max(0, gameTime - floor(elapsed));

    // Display time
    fill(255);
    textSize(20);
    text(`Time: ${remaining}s`, 10, 25);

    // Handle ship
    ship.move();
    ship.show();

    // Handle asteroids
    if (frameCount % 30 === 0) {
      asteroids.push(new Asteroid());
    }

    for (let a of asteroids) {
      a.move();
      a.show();

      if (a.hits(ship)) {
        gameOver = true;
      }
    }

    // Win condition
    if (remaining <= 0) {
      gameOver = true;
      win = true;
    }
  } else {
    textAlign(CENTER, CENTER);
    textSize(36);
    fill(win ? 'lightgreen' : 'red');
    text(win ? "You Survived! 🚀" : "Crashed! 💥", width / 2, height / 2);
  }
}

// Spaceship class
class Ship {
  constructor() {
    this.x = width / 2;
    this.y = height - 30;
    this.size = 30;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    this.x = constrain(this.x, 0, width);
  }

  show() {
    fill(0, 150, 255);
    triangle(this.x, this.y - this.size,
             this.x - this.size / 2, this.y + this.size / 2,
             this.x + this.size / 2, this.y + this.size / 2);
  }
}

// Asteroid class
class Asteroid {
  constructor() {
    this.x = random(width);
    this.y = -20;
    this.r = random(15, 30);
    this.speed = random(2, 5);
  }

  move() {
    this.y += this.speed;
  }

  show() {
    fill(120);
    ellipse(this.x, this.y, this.r * 2);
  }

  hits(ship) {
    let d = dist(this.x, this.y, ship.x, ship.y);
    return d < this.r + ship.size / 2;
  }
}