int count = 0;
float r = 6;

br[] brs = new br[500];

int numBr = 500;

void setup() {

  size(900, 900);
  frameRate(20);

  for (int i = 0; i < numBr; i++) {
    float s = sin(i);
    float c = cos(i);

    brs[i] = new br(50 + (i/200.0)*150*3*s, 100 + (i/200.0)*100*2.7*c);
  }
}


void draw() {
  background(0);

  doR(200);
}


float doR(float in) {

  //int num = 499 - ( (int)in - 499 );
  //println("num: " + num);
  

  float n = noise(in);
  println("n: " + n);
 
  in = in + n;

  for (int i = numBr; i > 0; i--) {
    brs[i].setColor((50 + i)*n, 0, 0);
    brs[i].drw(50+(width*n), 200 + 70*n);
  }
  
  
  //println("in: " + in);
  //println("n: " + n);
  
  if (n > 0.2) {
    doR(in);
  }

  return in;
}

//float test(float input) {

//  float i = input * 1.08;
//  //r = random(10, 100);
//  stroke(255, 255, 255);
//  //noStroke();
//  strokeWeight(1);
//  //noFill();
//  fill(200, 100, 100, 0.1);
//  rect(0, 0, i, i);

//  if (i < 4000) {
//    test(i);
//    //println("re: " + i);
//  }

//  return i;
//}