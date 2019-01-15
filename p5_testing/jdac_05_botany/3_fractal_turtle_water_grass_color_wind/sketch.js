// var current = [...'F']
var current = [...'F[LF]F[RF]']
// var current = [...'FRFRFRF']
var next = [] 
var count = 0
var posY = 20
var s = []

function setup() {
    
	createCanvas(900, 1200);
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

	background(255)
	// Angle in degrees
	var angle = 20 
	var step_size = 10
	var step_radius = 10
	var wind = 10

	// Initial angle, position
	var ta = 90 
	var tx = width/2 
	var ty = height
	var th = 0

	stroke(0, 100, 100, 0.1)
	fill(th, 100, 100, 0.1)
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
			} else if (c == 'L') {
				ta += (angle + wind * noise(frameCount/20)) 
			} else if (c == 'R') {
				// ta -= angle
				ta -= (angle + (1 - noise(frameCount/20))) 
			} else if (c == '[') {
				s.push(tx)
				s.push(ty)
				s.push(ta)
			} else if (c == ']') {
				ta = s.pop()
				ty = s.pop()
				tx = s.pop()
			} else if (c == 'C') {
				ellipse(tx, ty, step_radius)
			} else if (c == 'H') {
				th = (th + 5) % 360
				fill(th, 100, 100, 0.1)
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
			next.push(...'F[HRF]F[LFC]')
			

		} else {
			next.push(c)
		}
	}

	current = next
	// redraw()
	count++

	// console.log(Array.isArray(current))
}


