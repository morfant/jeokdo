
/*

개념도

https://drive.google.com/open?id=1Hb5XqUgjJNJCh-q9WIE6NIDMaf519AOBKh-nQRjgZSw
*/



/* 라이브러리?

준비된 기본 기능 이외의 것들을 추가로 사용하기 위해 만들어진 것 - add on, 확장 기능..
프로세싱에도 여러가지 라이브러리 들이 있다. 이를 사용하는 기본적인 방법을 알아보자.

osc 통신을 위해서도 별도의 라이브러리가 필요하다 - oscP5

1) 설치


2) 사용



*/


// OSC 라이브러리를 사용하기 위한 준비
// Documentation
// http://www.sojamo.de/libraries/oscP5/reference/index.html

import oscP5.*;
import netP5.*;
  
OscP5 oscP5;
NetAddress oscDestAddr;
String OSC_DEST_ADDR = "127.0.0.1"; // OSC Destination Address
// 127.0.0.1 = localhost = 내 컴퓨터

int SC_OSC_PORT = 57120; // sc 는 osc 통신에 고정된 포트를 사용한다

boolean flag;
Bubble[] bubbles = new Bubble[100];


void setup() {

  size(1400, 900);
  smooth();
  background(255, 255); // white
  flag = false;
  
  for (int i = 0; i < bubbles.length; i++) {
    bubbles[i] = new Bubble(random(width), random(height) );
  }
  
  // OSC 통신을 위한 준비
  // 1) 받기
  oscP5 = new OscP5(this, 12000); // 프로세싱이 receive 할 포트 번호
  
  // 2) 보내기
  oscDestAddr = new NetAddress(OSC_DEST_ADDR, SC_OSC_PORT); // addr, port
  
}


void draw() {

  if (!flag) {
    surface.setLocation(0, 0);
    flag = true;
  }
    
  for (int i = 0; i < bubbles.length; i++) {
    
    bubbles[i].isDead();
    
    if (bubbles[i].isAlive == true) {
      bubbles[i].floating();
    } else {
      bubbles[i].down();
    }
    
    bubbles[i].draw();
  }
  
  //saveFrame("frames/####.png");
  
  
}

/***** Out of draw() *****/








/******************************* 
         OSC handling
********************************/


// osc send를 위해 별도의 함수를 만든다.
void sendOsc(int msg_1, float msg_2, float msg_3) { // 
  
  OscMessage m = new OscMessage("/dead");
  
  m.add(msg_1);
  m.add(msg_2);
  m.add(msg_3);

  /* send the message */
  oscP5.send(m, oscDestAddr);
}


// osc 메시지가 수신 될 때 실행되는 함수
void oscEvent(OscMessage msg) {

  /*
  OSC 메시지의 구조
  : 물리적 주소(ip addr) + Address Pattern (+ type 매칭)  
  */
  
  // sc에서 osc를 수신할 때와 마찬가지로 메시지가 어떤 형태로 들어오는지 파악해야 한다. 보내는 쪽에서 정한 형태를 참고. 
  println(msg.arguments()); // 전체 메시지
  println(msg.arguments()[0]); // 전체 메시지 중 첫 번째
  
  print("### received an osc message.");
  print(" addrpattern: " + msg.addrPattern()); // print() 명령 - 콘솔에 표시 ==> 원하는 addrPattern만을 수신할 수도 있다.
  println(" typetag: " + msg.typetag()); // print() 명령에서 '+'연산의 의미
  
  /*
  print() vs println()
  addrPattern, typetag
  */
  
}





// TEST
// mousePressed() : 마우스를 클릭 했을 때 - 안의 내용이 - 실행되는 함수

/*
void mousePressed() {
  
  
  //println(mouseX);
  //println(mouseY);
  
  // 지역 변수의 사용 - 한 번쓰고 버린다
  //OscMessage m = new OscMessage("/click");
  OscMessage m = new OscMessage("/sc_is_waiting_you");
  
  m.add(0); // 사람 구분자
  m.add(mouseX);
  m.add(mouseY);
  // 255 이라는 int 을 메시지로 보낸다.

  oscP5.send(m, oscDestAddr); 
}
*/
