// https://en.wikipedia.org/wiki/Rose_(mathematics)
var k, n, d, c, coff;
var sliderN, sliderD, sliderC;
var pn, pd, pc;
var off, offl; // perlin noise offset
var frameCountDiv = 20; // The lager the slower fluctuating Speed

function setup() {
    
    createCanvas(500, 500);    
    sliderN = createSlider(1, 10, 4, 1);
    sliderD = createSlider(1, 10, 3, 1);
    sliderC = createSlider(-200, 200, 0, 1);
    off = 0;
    offl = 0;
    coff = 0;
}


function draw() {
    
    colorMode(RGB);
    background(0);
    n = sliderN.value();
    d = sliderD.value();
    coff = sliderC.value();
    
    k = n/d;
    
    translate(width/2, height/2);
    
    // offset parameter
    // https://en.wikipedia.org/wiki/Rose_(mathematics)#Offset_parameter
    // c = sin(frameCount/frameCountDiv) * 10 * noise(off);
    c = sin(frameCount/frameCountDiv) * cos(frameCount) * 2;
    // c = 0;
    // off += 0.1;
    
    
    beginShape();
    colorMode(HSB);
    // strokeWeight(13 * noise(offl));
    offl += 0.4;
    
//    noFill();
    
    for (var a = 0; a < TWO_PI * d; a += 0.01) {
        // fill(map(n, 1, 10, 0, 255), 70, 60 + c);
        noFill();
        stroke(165, map(d, 1, 10, 0, 100), 100);
        // noStroke();
        var r = 200 * cos(k*a) + (c);
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
    
}
