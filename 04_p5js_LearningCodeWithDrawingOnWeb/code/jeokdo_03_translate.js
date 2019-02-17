function setup() {
    createCanvas(500, 400);
    background(0)
    angleMode(DEGREES)
}


function draw() {
    fill(255)

    push()
    translate(mouseX, mouseY)
    ellipse(0, 0, 100, 100)
    pop()

    fill("skyblue")
    rect(width / 4, height / 4, width / 4 * 2, height / 4 * 2)
}