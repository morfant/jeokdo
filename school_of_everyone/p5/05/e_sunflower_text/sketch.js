var n = 0;
var c = 4;
var doDraw = true;

var sentance; 
var cnt = 0;

function setup() {
    createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0);
    frameRate(60);

    sentance = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

function draw() {

    push();
    translate(innerWidth/2, innerHeight/2);
    var r = frameCount*10 % 360;
    rotate(r);
    // console.log(r);

    doDraw = true;
    background(0);

    var max = noise(frameCount/20) * 2000;
    var ka = 134 + noise(frameCount/50) * 1.7;
    var space = 1 + noise(frameCount/30) * 4;
    var ts = 10 + noise(frameCount/10) * 20;

    if (doDraw) {

        // fill(155, 100 * cos(a/3) * 255, 200);
        for (var i = 0; i < max; i+=1) {

            // var a = i * 135.6;
            var a = i * ka;
            var r = c * sqrt(i);

            var x = space * r * cos(a); 
            var y = space * r * sin(a);

            var curChar = sentance[i%sentance.length];
            // console.log(curChar);

            fill(155, 100 * cos(a/3) * 255, 10 + 100 * ((max - i)/max));
            textSize(ts);

            if (curChar === '폭' || curChar === '탄') {
                fill(5, 100, 10 + 100 * ((max - i)/max));
                textSize(ts*2);
            };

            text(curChar, x, y);
            // vertex(x, y);
    
        }
 
        
/*

    //    var a = n * 137.3;
        // var a = n * 137.5;
        var a = n * 137.6;
        var r = c * sqrt(n);

        // var x = 2 * r * cos(a) + innerWidth/2;
        // var y = 2 * r * sin(a) + innerHeight/2;
        var x = 2 * r * cos(a);
        var y = 2 * r * sin(a);

        fill(155, 100 * cos(a/3) * 255, 200);
        textSize(10);
        noStroke();
            

    //    if (n % 3 == 0) {
        //    ellipse(x, y, random(4, 8), random(4, 10));    
        var curChar = sentance[n%sentance.length];
        if (curChar === '폭' || curChar === '탄') {
            fill(5, 100, 100);
            textSize(20);
        };


        text(curChar, x, y);
    //    }

        n++;

*/
    }
    pop();

    // console.log(sentance[cnt]);
    // cnt++;
    // if (cnt >= sentance.length) cnt = 0;
}


function keyTyped() {
    if (key === 'p'){
        doDraw = !doDraw;
    }
}

