// var current = [...'F']
// var current = [...'F[LLF]FR[RF]']
// var current = [...'F-F-F-F]']
var current = [...'G]']
// var current = [...'FRFRFRF']
var next = [] 
var count = 0
var posY = 20
var s = []

function setup() {
    
	createCanvas(800, 800);
	angleMode(DEGREES)
	colorMode(HSB)

	background(255);
	stroke(255, 100);
	strokeWeight(0.5)
	noFill();


	stroke("grey")
	strokeWeight(0.3)
	line(0, height/2, width, height/2)
	line(width/2, 0, width/2, height)

	// noLoop()

}


function draw() {

	background(0)
	// Angle in degrees
	var theta = 60 
	var step_size = 5 
	var step_radius = 10 
	var wind = 10

	// Initial theta, position
	var ta = 30 
	var tx = 0 
	var ty = height
	var th = 0
	var th_step = 3
	var hue_max = 230
	var hue_min = 100

	stroke(200, 100, 100)
	fill(count * 10, 100, 100)
	strokeWeight(1)

	if (current.length > 0) {
		// stroke(100, random(150), 150, 255 - (count * 20))
		// stroke("SteelBlue")
		for (var c of current) {
			if (c == 'F') {
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
			} else if (c == 'D') { // F+F
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
				ta += theta
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y

			} else if (c == 'G') { // F-F
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
				ta -= theta
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
			} else if (c == 'f') {
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				tx = new_x
				ty = new_y
			} else if (c == '+') { // left
				ta += theta
				// ta += (theta + wind * noise(frameCount/20)) 
			} else if (c == '-') { // right
				ta -= theta
				// ta -= (theta + (1 - noise(frameCount/20))) 
			} else if (c == '[') {
				s.push(tx)
				s.push(ty)
				s.push(ta)
			} else if (c == ']') {
				ta = s.pop()
				ty = s.pop()
				tx = s.pop()
			} else if (c == 'C') {
				noStroke()
				ellipse(tx, ty, step_radius)
			} else if (c == 'H') {
				th += th_step
				if (th > hue_max) {
					th = th - (hue_max - hue_min)
				}
				fill(th, 100, 100, 0.5)
			}
		}
	}



}

function mouseClicked() {

	next = []
	for (var c of current) {
		// Rules
		if (c == 'F') {
			// next.push('R', 'F', 'L', 'F')
			// next.push('F', '[', 'L', 'F', ']', 'F', '[', 'R', 'F', ']')
			// next.push(...'F[LF]F[RF]')
			// next.push(...'FRFLFLFFRFRFLF')
			// next.push(...'FLFFRFFRFRFLFLFFRFRFLFLFFLFFRF')
			// next.push(...'F[LLF]F') 
			// next.push(...'F[HRF]F[LFC]')
			// next.push(...'F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF')
			next.push(...'FF-F-F-F-FF')
		} else if (c == 'f') {
			next.push(...'ffffff')
		} else if (c == 'D'){ // F+F : foward, turn left, foward
			next.push(...'G+D+G')
		} else if (c == 'G'){ // F-F : foward, turn right, foward
			next.push(...'D-G-D')
		} else {
			next.push(c)
		}
	}

	current = next
	// redraw()
	count++

	// console.log(Array.isArray(current))
}


