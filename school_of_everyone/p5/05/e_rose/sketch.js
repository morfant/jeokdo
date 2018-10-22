// https://en.wikipedia.org/wiki/Rose_(mathematics)
var k, n, d, c, coff;
var sliderN, sliderD, sliderC;
var off, offl; // perlin noise offset
var frameCountDiv = 20; // The lager the slower fluctuating Speed

function setup() {
    
//    createCanvas(500, 500);    
    createCanvas(innerWidth, innerHeight);    
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
    c = sin(frameCount/frameCountDiv) * cos(frameCount*20) * 2;
    
    
    beginShape();
    colorMode(HSB);
    noFill();
    strokeWeight(3);
    
    for (var a = 0; a < TWO_PI * d; a += 0.01) {
        stroke(165, map(d, 1, 10, 0, 100), 100);
        var r = 100 * cos(k*a) + (c + coff);

        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
    
    
    
}
