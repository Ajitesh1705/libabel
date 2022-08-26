const rwidth = 10;
let yoff = 10;
let xoff = 10;
var seed = 1;

function randomx() {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  let nyoff = normalr(yoff);
  let nxoff = normalr(xoff);
  for (let y = 0; y < height; y += rwidth) {
    for (let x = 0; x < width; x += rwidth) {
      let string = (normalr(x) + nxoff).toString() + "-" + (normalr(y) + nyoff).toString();
      seed = hashCode(string);
      let r = randomx() * 255;
      let g = randomx() * 255;
      let b = randomx() * 255;
      fill(r, g, b);
      rect(x, y, rwidth, rwidth);
    }
  }
}

function normalr(input) {
  return normalx(input, rwidth);
}

function normalx(input, divisor) {
  return Math.floor(input / divisor) * divisor;
}

function mouseDragged() {
  xoff += pmouseX - mouseX;
  yoff += pmouseY - mouseY;
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
