var current = [...'F[LF]F[RF]']
var next = [] 
var s = []
 
function setup() {
 
	createCanvas(900, 1200, SVG); // canvas의 크기를 결정
	angleMode(DEGREES)
	colorMode(HSB)
 
	for (let i = 0; i < 5; i++) {
		mouseClicked()	
	}
 
	noLoop()
}
 
 
function draw() {
 
	background(0, 0, 100)
 
	// Angle in degrees
	var angle = 20 
	var step_size = 10 
 
	// Initial angle, position
	var ta = 90 
	var tx = width/2 
	var ty = height
 
	fill(60, 15, 100, 0.1)
	strokeWeight(0.3)
	for (var k = 0; k < 10; k++) {
		ellipse(
			100 + noise(k) * 30,
			230 + noise(k/10) * 22,
			80 * random(0.9, 1.1), 80 * random(0.9, 1.1)
		)
	}
 
	if (current.length > 0) {
		for (var c of current) {
			if (c == 'F') {
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				stroke(0, 100, 0, 0.3)
				strokeWeight(1)
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
			} else if (c == 'L') {
				ta += angle
			} else if (c == 'R') {
				ta -= angle
			} else if (c == '[') {
				s.push(tx)
				s.push(ty)
				s.push(ta)
			} else if (c == ']') {
				ta = s.pop()
				ty = s.pop()
				tx = s.pop()
			} 
		}
	}
}
 
function mouseClicked() {
	next = []
	for (var c of current) {
		// Rules
		if (c == 'F') {
			next.push(...'F[HRF]F[LFC]')
		} else {
			next.push(c)
		}
	}
}