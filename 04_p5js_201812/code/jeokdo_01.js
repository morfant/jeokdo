var posX = 200
var posY = 100
var vx = 4
var vy = 4
var radius = 50
var thick = 10

function setup() {
  createCanvas(400, 400)

}

function draw() {
  background(0)
  fill(255)

  rect(100, 100, 200, 200)


  if (mouseIsPressed == true) {
    drawWall()
  }

  ellipse(posX, posY, radius)
  posX = posX + vx
  posY = posY + vy

  if (posX > width - radius / 2 - thick) {
    vx = vx * -1
  }

  if (posX < radius / 2 + thick) {
    vx = vx * -1
  }

  if (posY > height - radius / 2 - thick) {
    vy = vy * -1
  }

  if (posY < radius / 2 + thick) {
    vy = vy * -1
  }
}


function drawWall() {
  rect(0, 0, width, thick)
  rect(width - thick, 0, thick, height)
  rect(0, height - thick, width, thick)
  rect(0, 0, thick, height)
}