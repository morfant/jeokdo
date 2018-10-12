var r = 4;
var px, py;
var spd = 1;

function setup() {
    px = 0;
    py = 0;
    createCanvas(800, 800);
    angleMode(DEGREES);
    background(0);
    colorMode(HSB);
    // frameRate(30);
}

function draw() {

    // background(0);
    noStroke();
    var d = dist(width/2, height/2, px, py);
    
    push();
        translate(width/2, height/2);
        ellipse(0, 0, 20, 20);
        spd = noise(frameCount/100) * 5;
        rotate(frameCount/6);
        // rect(50, 50, 20, 20);

        push();
            // translate(20, 20);
            translate(
                sin(frameCount * 20) * width/4,
                cos(frameCount * 24 + (frameCount/360)) * width/4
                // 10 * (cos(frameCount*8)), 0
                // 50 + width/8 * (sin(frameCount) + cos(frameCount*8))
                // 10 * (cos(frameCount*8)),
                // frameCount/2
                );

            // fill(80 + (d/width) * 255, 100 * (d/200), 100 * (d/width));
            noFill();
            stroke((d/180) * 255, 100 * (d/360), 100);
            strokeWeight(0.2);
            r = d/6;
            // ellipse(60, 60, r, r)
            rect(60, 60, r, r)

            px = width/2 + sin(frameCount * 20) * width/4 + 80;
            py = height/2 + cos(frameCount * 24) * width/4 + 80;
            

        pop();
    pop();
}


function keyTyped() {
    if (key === 'p'){
        doDraw = !doDraw;
    }
}

