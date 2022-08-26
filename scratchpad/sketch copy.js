const rwidth = 10;
let yoff = 0;
let xoff = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  noStroke();
}

function draw() {
  background(127); // wipes screen
  for (let y = 0; y < height; y += rwidth) {
    for (let x = 0; x < height; x += rwidth) {
      let hash = hashCode(((x + (xoff % 10)) % width) + "-" + (y + (yoff % 10)));
      let r = (x + xoff) % width;
      let g = (y + yoff) % height;
      let b = hash % 255;
      // randomSeed(x + xoff + y);
      // let b = (random(0, 255) * 255) % width;
      fill(r, g, b);
      rect(x, y, rwidth, rwidth);
    }
  }
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

function mouseDragged() {
  xoff += pmouseX - mouseX;
  yoff += pmouseY - mouseY;
}

var seed = 1;
function randomx() {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}
