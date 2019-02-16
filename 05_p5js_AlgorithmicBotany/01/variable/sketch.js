let rectPosX = 300;
let rectPosY = 200;

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(220);

    // local variable
    let radius = 200;
    ellipse(200, 200, radius, radius);

    let posX = 200;
    let posY = 300;
    ellipse(posX, posY, radius / 2, radius / 2);


    // use global variable
    rect(rectPosX, rectPosY, 50, 150);
}


console.log(rectPosX);

// Error!!
// console.log(posX);