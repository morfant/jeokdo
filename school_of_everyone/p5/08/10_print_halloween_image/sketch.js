var x = 0;
var y = 0;
var spacing = 15;
var img;
var p = [];

function preload() {
  img = loadImage("assets/pumpkin.jpg");
}


function setup() {
    createCanvas(600, 300);
    
    image(img, 0, 0);
    
    // 이미지의 컬러를 픽셀 단위로 가져옵니다.
    for(var i = 0; i < img.width; i++) {
        var arr_h = [];
        for (var j = 0; j < img.height; j++) {
            var c = get(i, j);
            arr_h.push(c);
        }
        p.push(arr_h);
    }
    
    background(255);
    
    angleMode(DEGREES);
}

function draw() {
    
    push();
    
    // choose (true or false)
    if (y <= (height - spacing) ) {
        var _x = map(x, 0, width, 0, img.width);
        var _y = map(y, 0, height, 0, img.height);
        
        strokeWeight(1 + sin(round(x/width/2 * 360)) * 10);
        stroke(p[round(x/width * img.width)][round(y/height*img.height)]);
        
        if (random(1) < 0.5) {
            line(x, y, x + spacing, y + spacing);
        } else {
            line(x, y + spacing, x + spacing, y);
        }
    }
    
    // next horizontal pos
    x = x + spacing;
    
    // next vertical pos
    if (x >= (width - spacing) ) {
        x = 0;
        if (y + spacing < height) {
            y = y + spacing;
        } else {
            y = height + 100;
        }
    }
    
    pop();
}