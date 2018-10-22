//https://ko.wikipedia.org/wiki/%EC%95%84%EB%A5%B4%ED%82%A4%EB%A9%94%EB%8D%B0%EC%8A%A4_%EC%99%80%EC%84%A0

var diff, a, b;
var sliderDiff, sliderA, sliderB;

function setup() {
    
    createCanvas(500, 500);    
    sliderDiff = createSlider(1, 20, 4, 1);
    sliderA = createSlider(-200, 200, 0, 0.1);
    sliderB = createSlider(-30, 30, 1, 0.1);

}


function draw() {
    
    colorMode(RGB);
    background(0);

    diff = sliderDiff.value();
    a = sliderA.value();
    b = sliderB.value();
    
    translate(width/2, height/2);
    colorMode(HSB);
    noFill();
    strokeWeight(3);
    stroke(165, 100, 100);
   
    beginShape();
        for (var angle = 0; angle < TWO_PI * diff; angle += 0.01) {

            var r = a + b * angle;

            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x, y);
        }
    endShape();
}
