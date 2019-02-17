var xOff = 0
var yOff = 0

function setup() {
  createCanvas(400, 400);
  frameRate(10)
}

function draw() {
  
  /* no intent */
  // random
  background(random(255), 100, 100)
  
  /* has intent */
  // set range with map()
  var m = map(random(255), 0, 255, 100, 160)
  fill(m, 100, 100)
  
  // random with range
  fill(random(10, 160), 100, 100)
  
  // Perlin Noise
  xOff += 0.1
  yOff += 0.1
  fill(noise(xOff, yOff) * 255, 100, 100)
  
  rect(width/2, height/2, 200, 200)
  
}