let pdf
let result;
let f
let lineHeight = 25 

function preload() {
	result = loadStrings('assets/code.js');
	f = loadFont('assets/NanumGothicCoding-Regular.ttf');
}

function setup() {
    
	createCanvas(700, lineHeight * result.length + 50, SVG);
	// createCanvas(800, 1800, SVG);

    pdf = createPDF();
	pdf.beginRecord();

	textFont(f)
	textSize(lineHeight * 0.8)

	noLoop()
}


function draw() {

	background(205)

	// console.log((result))
	// text(result, 100, 100)

	fill(10, 90, 25)
	for (let i = 0; i < result.length; i++) {
		if (result[i] == ' ') result[i] = '\n'
		else if (result[i].includes('function') == true) {
			// let t = result[i].split('{')[1]
			// console.log(t);
			
			fill(120, 80, 100)

		}
		else fill(10, 90, 25)
		text(result[i], 30, 40 + lineHeight * i)
	}


	// pdf.save()
	// save()

}