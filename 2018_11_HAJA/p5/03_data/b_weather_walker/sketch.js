let weather;
let walkers = [];

class Walker{
    constructor(_size, _rand_x, _rand_y, _col) {
        this.x = width/2;
        this.y = height/2;
        this.color = _col;
        this.size = _size;
        this.rand_x = _rand_x;
        this.rand_y = _rand_y;
    }

    move(wind) {
        this.x = this.x + random(-this.rand_x, this.rand_x) + wind.x;
        this.y = this.y + random(-this.rand_y, this.rand_y) + wind.y;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    show(temp) {
        colorMode(HSB);
        let hue = map(temp, -10, 40, 240, 0);
        fill(hue, 100, 100, 0.5);
        ellipse(this.x, this.y, this.size, this.size);
    }
}

function preload() {

    let url = 'https://api.apixu.com/v1/current.json?key=96a9971dd31a456e9ce103938180411&q=NYC';
    weather = loadJSON(url);

}

function setup() {
    createCanvas(600, 600);
    background(0);
    
    for (let i = 0; i < 200; i++) {
        walkers[i] = new Walker(20, 5, 5, 10);
    }
    
}

function draw() {

    let place = weather.location.name;
    let temp = weather.current.temp_c;
    let isDay = weather.current.is_day;
    let windDegree = weather.current.wind_degree;
    let windKPH = weather.current.wind_kph;
    let rain = weather.current.precip_mm;
    
    let windVector = p5.Vector.fromAngle(radians(windDegree), windKPH/2);

    colorMode(RGB);
    textSize(40);
    if (isDay == 0) {
        background(0);
        fill(255);
    } else {
        background(255);
        fill(0);
    }
    text(place, width/2, 100);

   for (let i = 0; i < 200; i++) {
        walkers[i].move(windVector);
        walkers[i].show(temp);
    }
    
}
