var current = "A"
var next = ""
var count = 0
var posY = 20
var s = []

function setup() {
    
	createCanvas(400, 400);
	angleMode(DEGREES)

	background(50);
	stroke(255);
	strokeWeight(2)
	noFill();

	// console.log("Generation " + count + ": " + current)
	current = "F[RF[RF]LF]F"

}


function draw() {

	var step_size = 100
	var tx = width/2
	var ty = height/2
	var ta = 90 

	for (var c of current) {
		// console.log(i)
		if (c == 'F') {
			var new_x = tx + (step_size * cos(ta))
			var new_y = ty - (step_size * sin(ta))
			line(tx, ty, new_x, new_y)
			tx = new_x
			ty = new_y

		} else if (c == 'L') {
			ta += 90

		} else if (c == 'R') {
			ta -= 90
		} else if (c == '[') {
			s.push(tx)
			s.push(ty)
			s.push(ta)
		} else if (c == ']') {
			ta = s.pop()
			ty = s.pop()
			tx = s.pop()
		} else {

		}


	}

}

function mouseClicked() {

	for (var i = 0; i < current.length; i++) {
		let c = current[i]

		if (c == 'A') {
			next+="AB"
		} else if (c == 'B') {
			next+="A"
		}
	}

	current = next
	next = ""
	count++

	// console.log("Generation " + count + ": " + current)
	text("Generation " + count + ": " + current, 0, posY)
	posY+=20

}


