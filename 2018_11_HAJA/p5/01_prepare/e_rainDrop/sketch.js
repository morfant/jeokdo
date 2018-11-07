let x1, y1;
let x2, y2;
let x3, y3;
let x4, y4;
let x5, y5;
let x6, y6;
let r1, r2, r3, r4, r5, r6;
let g1, g2, g3, g4, g5, g6;

function setup() {
    
    createCanvas(400, 400);


    x1 = 0;
    x2 = width/6 * 1;
    x3 = width/6 * 2;
    x4 = width/6 * 3;
    x5 = width/6 * 4;
    x6 = width/6 * 5;

    y1 = 0;
    y2 = 0;
    y3 = 0;
    y4 = 0;
    y5 = 0;
    y6 = 0;

    r1 = random(5, 15);
    r2 = random(5, 15);
    r3 = random(5, 15);
    r4 = random(5, 15);
    r5 = random(5, 15);
    r6 = random(5, 15);

    g1 = random(0.5, 1.2);
    g2 = random(0.5, 1.2);
    g3 = random(0.5, 1.2);
    g4 = random(0.5, 1.2);
    g5 = random(0.5, 1.2);
    g6 = random(0.5, 1.2);


    

    setInterval(function () {
        reset();

        r1 = random(5, 15);
        r2 = random(5, 15);
        r3 = random(5, 15);
        r4 = random(5, 15);
        r5 = random(5, 15);
        r6 = random(5, 15);

        g1 = random(0.5, 1.2);
        g2 = random(0.5, 1.2);
        g3 = random(0.5, 1.2);
        g4 = random(0.5, 1.2);
        g5 = random(0.5, 1.2);
        g6 = random(0.5, 1.2);

    }, 10000);
}


function draw() {
    
    background(0);

    noStroke();


    ellipse(x1, y1, 2, r1);
    ellipse(x2, y2, 2, r2);
    ellipse(x3, y3, 2, r3);
    ellipse(x4, y4, 2, r4);
    ellipse(x5, y5, 2, r5);
    ellipse(x6, y6, 2, r6);


    x1 += 0.1;
    x2 += 0.1;
    x3 += 0.1;
    x4 += 0.1;
    x5 += 0.1;
    x6 += 0.1;

    y1 += g1;
    y2 += g2;
    y3 += g3;
    y4 += g4;
    y5 += g5;
    y6 += g6;
    
}



function reset() {
    x1 = 0;
    x2 = width/6 * 1;
    x3 = width/6 * 2;
    x4 = width/6 * 3;
    x5 = width/6 * 4;
    x6 = width/6 * 5;

    y1 = 0;
    y2 = 0;
    y3 = 0;
    y4 = 0;
    y5 = 0;
    y6 = 0;
}