const rwidth = 10;
let yoff = 0;
let xoff = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(2);
  noStroke();
}

function draw() {
  background(127); // wipes screen
  for (let y = 0; y < height; y += rwidth) {
    for (let x = 0; x < height; x += rwidth) {
      let r = random(255);
      let g = random(255) + x;
      let b = x + y;
      fill(r, g, b);
      rect(x, y, rwidth, rwidth);
    }
  }
}

function mouseDragged() {
  xoff += pmouseX - mouseX;
  yoff += pmouseY - mouseY;
}

function xor(seed) {
  seed ^= seed << 21;
  seed ^= seed >>> 35;
  seed ^= seed << 4;
  return seed;
}
