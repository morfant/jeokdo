var n = 0;
var c = 4;
var doDraw = true;

function setup() {
    createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0);
}

function draw() {
    frameRate(8);    

    if (doDraw) {

        background(0);
        beginShape();

        var step = noise(frameCount/10);

        // stroke(25 + 100 * (sin(i) + 1), 70, 100);
        stroke(25 + 100 * noise(frameCount/20), 70, 100);
        var ss = sin(frameCount*10) + 1;
        // console.log(ss);
        strokeWeight(0.1 + 1 * (ss)/10);
        // strokeWeight(0.2 + 1 * (ss));
        // strokeWeight(0.2 * (sin(frameCount/40) + 1));
        noFill();

        for (var i = 0; i < 5000; i+=(step*3)) {

            var a = i * 127.5;
            var r = c * sqrt(i);

            var x = 1 * r * cos(a) + width/2;
            var y = 1 * r * sin(a) + height/2;
            vertex(x, y);
    
        }
        endShape(CLOSE);
    }
}


function keyTyped() {
    if (key === 'p'){
        doDraw = !doDraw;
    }
}

