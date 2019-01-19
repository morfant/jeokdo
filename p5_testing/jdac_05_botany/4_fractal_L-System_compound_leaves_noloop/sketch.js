var current = [...'A0;']
var axiom = current
var next = []
var count = 0
var s = []

var D = 0
var R = 0
var slider
var col = 0

function setup() {

	slider = createSlider(100, 2000, 10, 10)
	createCanvas(1000, 1000);
	angleMode(DEGREES)
	colorMode(HSB)

	D = 4 // density of lines
	R = 1.12 // how toll ? 

	for (let i = 0; i < 30; i++) {
		getResult()
	}
	// console.log(current.join(''));
	noLoop()
}


function draw() {

	background(197, 42, 63, 0.5)

	// Angle in degrees
	var theta = 30 
	var step_size = 2 
	var step_radius = 5 

	// Initial theta, position
	var ta = 90 
	var tx = width/2 
	var ty = height 
	var th_step = 0.003
	var hue_max = 80 
	var hue_min = 40
	var th = hue_min 
	col = th

	// stroke(200, 100, 100)
	stroke(0, 0, 90)
	fill(count * 10, 100, 100)
	strokeWeight(1)

	if (current.length > 0) {
		// stroke(100, random(150), 150, 255 - (count * 20))
		// stroke("SteelBlue")
		for (let i = 0; i < current.length; i++) {
			let c = current[i]
			let vx = 0
			if (c == 'F') {

				stroke(col, 80, 90)
				strokeWeight(2)
				// noStroke(0)
				let val = []
				for (let j = 1; j < 10; j++) {
					let v = current[i + j]
					if (v == ';') {
						break
					} else {
						val.push(v)
					}
				}
				vx = parseFloat(val.join(''))
				// console.log("vx: " + vx);

				var new_x = tx + vx * (step_size * cos(ta))
				var new_y = ty - vx * (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
			} else if (c == 'D') { // F+F

				let c = current[i]
				let vx = 0
				let val = []
				for (let j = 1; j < 10; j++) {
					let v = current[i + j]
					if (v == ';') {
						break
					} else {
						val.push(v)
					}
				}
				vx = parseFloat(val.join(''))
				// console.log("vx: " + vx);


				var new_x = tx + vx* (step_size * cos(ta))
				var new_y = ty - vx* (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
				ta += theta
				var new_x = tx + vx * (step_size * cos(ta))
				var new_y = ty - vx * (step_size * sin(ta))
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

				let val = []
				for (let j = 1; j < 10; j++) {
					let v = current[i + j]
					if (v == ';') {
						break
					} else {
						val.push(v)
					}
				}

				// console.log(val.length)
				if (val.length > 0) vx = parseFloat(val.join(''))
				else vx = theta
				// console.log(theta)
				// console.log(vx)

				// console.log("+");
				ta += vx
				// console.log(ta);
				// ta += (theta + wind * noise(frameCount/20)) 
			} else if (c == '-') { // right

				let val = []
				vx = theta
				for (let j = 1; j < 10; j++) {
					let v = current[i + j]
					if (v == ';') {
						break
					} else {
						val.push(v)
					}
				}

				if (val.length > 0) vx = parseFloat(val.join(''))
				else vx = theta

				ta -= vx
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
				fill(100, 100, 100)
				ellipse(tx, ty, step_radius)
			} else if (c == 'H') {
				th += th_step
				if (th > hue_max) {
					th = th - (hue_max - hue_min)
				}
				fill(th, 100, 100, 0.2)
				col = th
			}
		}
	}
}

function getResult() {
	next = []
	for (var i = 0; i < current.length; i++) {

		let c = current[i]
		let x = 0

		// Rules
		if (c == 'F') {
			let val = []
			for (let j = 1; j < 10; j++) {
				let v = current[i + j]
				if (v == ';') {
					break
				} else {
					val.push(v)
				}
			}
			x = parseFloat(val.join(''))
			var t = x * R
			next.push(..."F"+t+";")
		} else if (c == "A") {
			let val = []
			for (let j = 1; j < 10; j++) {
				let v = current[i + j]
				if (v == ';') {
					break
				} else {
					val.push(v)
				}
			}
			x = parseFloat(val.join(''))

			if (x == 0) {
				next.push(..."F1;H[+;A"+D+";][-;A"+D+";]F1;HA0;")
			} else if (x > 0) {
				var t = x - 1
				next.push(..."A"+t+";")
			}
		} else if ('0123456789'.indexOf(c) === -1) {
			// if (c !== ";") {
				// console.log("not number")
				// console.log(c)
				next.push(c)
			// }
		}
	}

	current = next
	// console.log(current)
	// console.log(current.join(''))
	// count++

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		current = axiom
		next = []
	}
}