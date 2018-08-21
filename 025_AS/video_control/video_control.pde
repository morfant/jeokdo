/*
1. 비디오 재생의 기본
 : 속도, 방향, 시작지점 선택
 
 
 * Processing에서 역방향 재생시 유의점
 모든 codec을 지원하는 것은 아니다 ==> Theora codec은 되지만, H.264는 안된다.
 https://github.com/processing/processing-docs/commit/163cb8b0a91b467f85d90aa8d3ebb21cfb870b36
 
 
 Theora codec으로의 변환
 
 - GUI tool
 http://www.mirovideoconverter.com/download_osx.html
 
 - Command line tool
 http://v2v.cc/~j/ffmpeg2theora/download.html 혹은 brew install ffmpeg2theora
 
 
 
 
 2. 다른 신호에 묶어서 trigger 하기
 : 예를 들면, OSC
 
 */


import processing.video.*;
Movie myMovie;


float spd = 1.0;
int step = 10;
boolean isMousePressed = false;

void setup() {
  size(1000, 500);
  //myMovie = new Movie(this, "drone_soft_landing_no_audio.ogv");
  myMovie = new Movie(this, "drone_soft_landing.ogv");

  myMovie.loop();

  colorMode(HSB, 255);
}

void draw() {

  background(0);

  if (myMovie.available()) {
    myMovie.read();
  }



  // handling step
  
  
  
  // with mouseY
  //step = (int)map(mouseY, 0, height, 1, 200);

  // with sin graph
  //step = abs((int)(sin((float)(frameCount/4)) * 100));
  
  
  //println(step);



  // Apply step on video pixels
  if (myMovie.time() > 0) {    
    //makeStepInPixels(myMovie, (int)mouseY);
    if (step != 0) {    
      makeStepInPixels(myMovie, step);
    }
    //image(myMovie, mouseX - myMovie.width/2, mouseY - myMovie.height/2);
  } else {
    myMovie.jump(myMovie.duration());
  };


  // current position control with mouse X
  if (!isMousePressed) {
    float ratio = mouseX / (float) width;    
    myMovie.jump(ratio * myMovie.duration());
  }


  //println(myMovie.time());
}


void makeStepInPixels(PImage img, int step) {


  float alpha = 200;
  for (int i = 0; i < img.height; i+=step) {
    for (int j = 0; j < img.width; j+=step) {
      color c = img.pixels[j + img.width*i];
      //stroke(c);
      //strokeWeight(40.0);
      //noFill();
      noStroke();
      fill(c, alpha);
      
      // Try other shapes
      //rect(j + (width - img.width)/2, i + (height - img.height)/2, step, step);
      ellipse(j + (width - img.width)/2, i + (height - img.height)/2, step, step);
      
      
    }
  }
}



void mousePressed() {
  isMousePressed = true;
  myMovie.speed(4.0);
}

void mouseReleased() {
  isMousePressed = false;
}


void keyPressed() {
  if (key == 'a') {
    noCursor();
  } else if (key == 'b') {
    cursor(ARROW);
  } else if (key == 'r') {

    myMovie.jump( map( random(0, 100), 0, 100, 0, myMovie.duration()));
    step = (int)random(1, 40);
    
    
  } else if (key == 'n') {
    myMovie.speed(1.0);
  }
}
