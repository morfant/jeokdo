var n = 1;
var size_;
function setup() {
  if(window.innerWidth>window.innerHeight)size_=window.innerHeight;
  else size_=window.innerWidth;
    createCanvas(size_,size_);
    background(0);
    noStroke();
    noSmooth();
    fill(255);
}

function windowResized() {
    if(window.innerWidth>window.innerHeight){
		resizeCanvas(window.innerHeight, window.innerHeight);
	size_=window.innerHeight;}
	else {
		resizeCanvas(window.innerWidth, window.innerWidth);
	size_=window.innerWidth;}
  background(0);
  n=1;
}

function draw() {

	background(0);
	drawRect(n);

}

function drawRect(n) {
    var level = pow(3, n);
    var xOffset = width / level;
    var yOffset = height / level;
    for (var x = 0; x < level ; x++)
    {
        for (var y = 0; y < level ; y++)
        {
            if (x % 3 == 1 && y % 3 == 1) rect(x*xOffset, y*yOffset, xOffset,yOffset);
        }
	}
}

function mouseClicked() {
	
	if (n < 5) n++;
	else if (n == 5) n = 0;
	console.log(n);
}