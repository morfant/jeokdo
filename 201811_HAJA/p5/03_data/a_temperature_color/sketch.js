let places = ['seoul', 'moscow', 'Paris', 'london', 'helsinki'];
let urls = [];
// let apixu_API_key = "70dae7de13734a499bb124043181511";

let cnt = 0;
let tempRect;

function setup() {

    createCanvas(600, 600);
    tempRect = new TempRect();

    for (let i = 0; i < places.length; i++) {
        urls[i] = 'https://api.apixu.com/v1/current.json?key=' + apixu_API_key + '&q=' + places[i];
    }

    setInterval(function() {
        loadJSON(urls[cnt % urls.length], gotWeather);
        cnt++;
    }, 5000);

}

function draw() {
    background(200, 50);
    tempRect.draw();
}

function gotWeather(weather) {
    let l = weather.location.name;
    let t = floor(weather.current.temp_c);
    tempRect.setLocation(l);
    tempRect.setTemp(t);
}

class TempRect {
    constructor() {
        this.temp = undefined;
        this.location = undefined;
        this.textSize = 40;
    }

    setTemp(t) { this.temp = t; }
    setLocation(l) { this.location = l; }

    draw() {
        // background color
        colorMode(HSB);
        let hue = map(this.temp, -5, 10, 240, 0);
        fill(hue, 100, 100, 0.1);
        rect(0, 0, width, height);

        // text
        colorMode(RGB);
        stroke(255);
        fill(255);
        textAlign(CENTER);
        textSize(this.textSize * 4);
        text(this.temp,
        width/2, height/2+this.textSize * 2); // temp
        textSize(this.textSize);
        text(this.location, width/2 - this.textSize - 10, height/2 - this.textSize - 10);
    }
}