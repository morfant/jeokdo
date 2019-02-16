let randomValue = undefined;

function setup() {
    createCanvas(400, 400);
}

function draw() {

    randomValue = random(1);

    if (randomValue > 0.5) {
        background(0);
        fill(255);
    } else {
        background(255);
        fill(0);
    }

    noStroke();
    ellipse(width / 2, height / 2, 200, 200);

}

// function mouseClicked() {
//   randomValue = random(1);
//   console.log(randomValue);
// }