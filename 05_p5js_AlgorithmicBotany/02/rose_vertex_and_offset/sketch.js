// https://en.wikipedia.org/wiki/Rose_(mathematics)
var k, n, d, c;

function setup() {
    createCanvas(400, 400);    
}

function draw() {
    
    background(0);
    n = 2;
    d = 4;
    k = n/d;
    
    translate(width/2, height/2);
    
    // offset parameter
    // https://en.wikipedia.org/wiki/Rose_(mathematics)#Offset_parameter
    c = frameCount/10;
    
    // rose_basic이 한 프레임당 점 하나를 찍었다면,
    // 이 스케치는 for loop을 이용해서 한 프레임당 장미 곡선의 전체 주기를 한 번 완성합니다.
    // 즉 draw()라는 루프 안에, 한 번의 draw 마다 실행되는 또 하나의 루프가 있는 구조가 됩니다.
    // 그림이 그려지는 형태와 함께 머리속에 그림을 그려 보세요.
    beginShape(); // endShape()와 짝을 이루어 사용합니다. 아래의 vertex() 를 사용하기 위한 명령어입니다.
    noFill();
    
    //for loop에 대해서 공부해 보세요.
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration#for_%EB%AC%B8
    for (var theta = 0; theta < TWO_PI * d; theta += 0.01) { 
        stroke(65, 170, 100);
        var r = 100 * cos(k*theta) + c;

        var x = r * cos(theta);
        var y = r * sin(theta);
        vertex(x, y); // x, y 위치에 점을 찍습니다. 그러나 이 점은 endShape()을 해야 완결되고 그려집니다.
    }
    endShape(CLOSE); // endShape()의 괄호 안에 들어가는 옵션들에 대해서는 p5js.org -> reference를 참고 해 주세요.
}
