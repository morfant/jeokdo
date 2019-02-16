function setup() {
    createCanvas(400, 400);
    background(255)
}

function draw() {
    background(255);

    for (var i = 0; i < width; i += 6) {
        for (var j = 0; j < height; j += 10) {
            stroke(map(j, 0, 400, 0, 255), 100, 100)
            strokeWeight(random(7))
            point(i, j)
        }
    }
}