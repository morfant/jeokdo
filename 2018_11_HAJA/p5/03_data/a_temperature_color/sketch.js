let urls = [];
let count = 0;
let tempCircle;

function setup() {
    createCanvas(600, 600);

    tempCircle = new TempCircle(width/4, height/4);

    urls[0] = 'https://api.apixu.com/v1/current.json?key=96a9971dd31a456e9ce103938180411&q=seoul';
    urls[1] = 'https://api.apixu.com/v1/current.json?key=96a9971dd31a456e9ce103938180411&q=Paris';
    urls[2] = 'https://api.apixu.com/v1/current.json?key=96a9971dd31a456e9ce103938180411&q=Moscow';
    urls[3] = 'https://api.apixu.com/v1/current.json?key=96a9971dd31a456e9ce103938180411&q=Helsinki';

    setInterval(function() {
        loadJSON(urls[count%4], gotWeather);
        count++;
    }, 2000);
 
  
}

function draw() {
    background(200, 50);
    tempCircle.draw();
}

function gotWeather(weather) {

    // console.log(weather);
    // console.log(weather.location.name);

    let l = weather.location.name;
    let t = floor(weather.current.temp_c);

    tempCircle.setLocation(l);
    tempCircle.setTemp(t);

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
        // background color
        colorMode(HSB);
        let hue = map(this.temp, -10, 40, 240, 0);
        fill(hue, 100, 100, 0.1);
        rect(0, 0, width, height);

        // text
        colorMode(RGB);
        stroke(255);
        fill(255);
        textAlign(CENTER);
        textSize(this.textSize * 4);
        text(this.temp, width/2, height/2 + this.textSize * 2); // temp
        textSize(this.textSize);
        text(this.location, this.x - this.textSize - 10, this.y - this.textSize - 10); // location name

    }
}
