
// radius x, radius y
var rx, ry;

var moving = 0;

function setup() {
  
    createCanvas(400, 400);

    rx = 3;
    ry = 3;
    
}



function draw() {
    
    // 배경 색을 결정 합니다. (black ~ white, alpha);
    background(0, 255);

    noStroke();

    moving += 0.2;
    // console.log(moving);

    var xoff = moving;

    for (var i = 0; i < width + rx; i+=rx) {

        var yoff = 0;
        for (var j = 0; j < height + ry; j+=ry) {

            var n = noise(xoff, yoff);

            fill(55, n * 255, 100, n * 255);
            rect(i, j, rx, ry);

            yoff+=0.1;

        }

        xoff+=0.1;
    }
   
    
}