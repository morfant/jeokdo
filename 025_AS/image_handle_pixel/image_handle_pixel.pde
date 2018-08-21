
void setup() {

  size(600, 600);
  PImage myImage = loadImage("sample_600.jpg");

  int step = 30;

  for (int i = 0; i < height; i+=step) {
    for (int j = 0; j < width; j+=step) {
      color c = myImage.pixels[j + width*i];
      println(c);
      //fill(255, 0, 0);
      stroke(c);
      //noFill();
      fill(c);
      rect(j, i, step, step);
    }
  }
}


void draw() {
  
  // grid with step test
  //background(255);

  //int step = 5;

  //for (int i = 0; i < height; i+=step) {
  //  for (int j = 0; j < width; j+=step) {
  //    //color c = pixels[j+width*i];
  //    //fill(255, 0, 0);
  //    stroke(0);
  //    noFill();
  //    rect(j, i, step, step);
  //  }
  //}
  
}
