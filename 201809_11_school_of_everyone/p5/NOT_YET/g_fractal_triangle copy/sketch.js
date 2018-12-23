//using recursive algorithm from Dan Lidral Porter presented in
// https://www.youtube.com/watch?v=vLlbEZt-3j0

var coor;

function setup() {
	createCanvas(500, 500);
	background(100);
    coor = [1, 1];
    
}

function draw() {
	
	for (var i = 0; i < 100; i++) {
		point(coor[0] * height/2, height*0.9-coor[1] * height/2);
		coor = sifs(coor);
	}
}

function sifs([x, y]) {
	var x2 = x / 2;
	var y2 = y / 2;
	var answer = [
		[x2, y2],
		[x2 + 0.5, y2 + 0.86],
		[x2 + 1, y2]
    ];
	return random(answer);
}