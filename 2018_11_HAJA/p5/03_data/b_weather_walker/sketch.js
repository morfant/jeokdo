let places = ['seoul', 'daegu', 'busan', 'helsinki', 'moscow', 'london', 'nyc', 'rome', 'madrid', 'berlin', 'tokyo'];
let count = 0;
let place = places[0];

let placeName, temp, windDegree, windKPH;
let windVector = undefined;

let h = 0;
let m = 0;
let timeAsMinute, timeToPi;
let brightnessWithTime = 0;

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
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
    }
}


function updateData() {
    // start to run in sequence : getWeather() -> getGeo() -> getTime()
    let url = 'https://api.apixu.com/v1/current.json?key=96a9971dd31a456e9ce103938180411&q=' + place;
    loadJSON(url, getWeather);
}

function getWeather(weather) {

    placeName = weather.location.name;
    temp = weather.current.temp_c;
    windDegree = weather.current.wind_degree - 90 + 180;
    windKPH = weather.current.wind_kph;
    windVector = p5.Vector.fromAngle(radians(windDegree), windKPH/2);

    let geo_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + place + '&key=AIzaSyBP-VSHqfXwVyudRlQOnyhaIK4B3LrCnN4';
    loadJSON(geo_url, getGeo);
}

function getGeo(geo) {
    // console.log(geo);
    let lat = geo.results[0].geometry.location.lat;
    let lng = geo.results[0].geometry.location.lng; 

    let time_url = "http://api.geonames.org/timezoneJSON?lat=" + lat + "&lng=" + lng + "&username=xman";
    loadJSON(time_url, getTime);
    // console.log(time);
}

function getTime(time) {
    h = Number(time.time.split(' ')[1].split(':')[0]);
    m = Number(time.time.split(' ')[1].split(':')[1]);
    // console.log(h);
    // console.log(m);

    timeAsMinute = 60 * h + m;
    timeToPi = map(timeAsMinute, 0, 60*24, 0, TWO_PI);
    brightnessWithTime = 1 - (cos(timeToPi)+1)/2;
}

function setup() {

    updateData('seoul');

    createCanvas(600, 600);
    background(0);
    
    for (let i = 0; i < 200; i++) {
        walkers[i] = new Walker(20, 2, 2, 10);
    }
}

function draw() {
    colorMode(RGB);
    // background(brightnessWithTime * 60, brightnessWithTime * 115, brightnessWithTime * 205, brightnessWithTime * 55);
    background(brightnessWithTime * 60, brightnessWithTime * 115, brightnessWithTime * 205, 55);

    fill(255);
    textSize(40);
    text(placeName, width/2, 100);
    if (h != undefined && m != undefined) {
        if (String(h).length < 2) h = '0' + h;
        if (String(m).length < 2) m = '0' + m;
    }
    text(h + " : " + m , width/2, 300);
    text(temp, width/2, 500);

    for (let i = 0; i < 200; i++) {
        if (windVector != undefined) walkers[i].move(windVector);
        walkers[i].show(temp);
    }
}

function mouseClicked() {
    place = places[count++%places.length];
    updateData();
}