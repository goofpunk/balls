let circleArray = [];
let canvasWidth = 640;
let canvasHeight = 480;
let rightPressed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  noStroke();
}

function draw() {
  background(0);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].display()
    circleArray[i].move()
  }
}

function keyPressed() {
  if (value === 88) {
    circleArray = []
  }
}

function mouseClicked(event) {
  newCircle = new randomCircle;
  circleArray.push(newCircle);
}

function mouseDragged(event) {
  newCircle = new randomCircle;
  circleArray.push(newCircle);
}

class randomCircle {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.diameter = random(12, 26);
    this.speedX = random(4, 12);
    this.speedY = random(4, 12);
    this.color = color(random(25, 256), random(25, 256), random(25, 256));
    this.right = Math.random() < 0.5;
    this.down = Math.random() < 0.5;
  }
  
  display() {
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }

  move() {
    if (this.x >= canvasWidth || this.x <= 0) {
      this.right = !this.right;
      this.speedX = random(4, 12);
    }

    if (this.y >= canvasHeight || this.y <= 0) {
      this.down = !this.down;
      this.speedY = random(4, 12);
    }    

    if (this.right == true) {
      this.x += this.speedX;
    } else {
      this.x -= this.speedX;
    }

    if (this.down == true) {
      this.y += this.speedY;
    } else {
      this.y -= this.speedY;
    }
  }
}