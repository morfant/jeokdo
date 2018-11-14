let urls = [];
let cnt = 0;

function setup() {
    createCanvas(600, 600);

    tc = new TempCircle(width/4, height/4);

    urls[0] = 'https://api.apixu.com/v1/current.json?key=96a9971dd31a456e9ce103938180411&q=seoul';
    urls[1] = 'https://api.apixu.com/v1/current.json?key=96a9971dd31a456e9ce103938180411&q=Paris';
    urls[2] = 'https://api.apixu.com/v1/current.json?key=96a9971dd31a456e9ce103938180411&q=Moscow';
    urls[3] = 'https://api.apixu.com/v1/current.json?key=96a9971dd31a456e9ce103938180411&q=Helsinki';


    setInterval(function() {
        loadJSON(urls[cnt % urls.length], gotWeather);
        cnt++;
    }, 2000);
 
  
}

function draw() {
    background(200, 50);
    tc.draw();
}

function gotWeather(weather) {
    // console.log(weather);
    // console.log(weather.location.name);
    let l = weather.location.name;
    let t = floor(weather.current.temp_c);
    tc.setLocation(l);
    tc.setTemp(t);

}

class TempCircle {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.temp = undefined;
        this.location = undefined;
        this.textSize = 40;
    }

    setTemp(t) {
        this.temp = t;
    }

    setLocation(l) {
        this.location = l;
    }


    draw() {
        colorMode(HSB);
        let hue = map(this.temp, -5, 10, 240, 0);
        fill(hue, 100, 100, 0.1);
        rect(0, 0, width, height);

        colorMode(RGB);
        stroke(255);
        fill(255);
        textAlign(CENTER);
        textSize(this.textSize * 4);
        text(this.temp, width/2, height/2 + this.textSize * 2);
        textSize(this.textSize);
        text(this.location, this.x - this.textSize - 10, this.y - this.textSize - 10);
    }

}
