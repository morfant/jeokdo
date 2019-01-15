var current = ['F']
var next = [] 
var count = 0
var posY = 20
var s = []

function setup() {
    
	createCanvas(500, 500);
	angleMode(DEGREES)

	background(50);
	stroke(255, 100);
	strokeWeight(0.5)
	noFill();

}


function draw() {

	stroke("grey")
	strokeWeight(0.3)
	line(0, height/2, width, height/2)
	line(width/2, 0, width/2, height)

	var step_size = 1
	var tx = width/2
	var ty = height/2

	var ta = 90 

	if (count > 0) {
		console.log(current)
		stroke("pink")
		strokeWeight(1)
		for (var c of current) {
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


}

function mouseClicked() {

	next = []
	for (var c of current) {
		if (c == 'F') {
			next.push('R', 'F', 'L', 'F')
		} else {
			next.push(c)
		}
	}

	current = next
	count++

	// console.log(Array.isArray(current))
}


