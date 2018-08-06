
// OSC 라이브러리를 사용하기 위한 준비
// Documentation
// http://www.sojamo.de/libraries/oscP5/reference/index.html

import oscP5.*;
import netP5.*;
  
OscP5 oscP5;
NetAddress oscDestAddr;
String OSC_DEST_ADDR = "127.0.0.1"; // OSC Destination Address
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
  oscP5 = new OscP5(this, 12000);
  
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
      
  
  
}

/******************************* 
         OSC handling
********************************/


// mousePressed() : 마우스를 클릭 했을 때 - 안의 내용이 - 실행되는 함수
void mousePressed() {
  
  // 지역 변수의 사용 - 한 번쓰고 버린다
  OscMessage m = new OscMessage("/click");
  
  m.add(8880);
  // 255 이라는 int 을 메시지로 보낸다.

  /* send the message */
  oscP5.send(m, oscDestAddr); 
}


void sendOsc(int m1, float m2) {
  
  OscMessage m = new OscMessage("/dead");
  
  m.add(8880);

  /* send the message */
  oscP5.send(m, oscDestAddr);
}


// osc 메시지가 수신 될 때 실행되는 함수
void oscEvent(OscMessage msg) {

  /*
  
  OSC 메시지의 구조
  Address Pattern
  
  
  Type Tag
  
  */
  
  println(msg.get(0).intValue());
  print("### received an osc message.");
  print(" addrpattern: " + msg.addrPattern()); // print() 명령 - 콘솔에 표시
  println(" typetag: " + msg.typetag()); // print() 명령에서 '+'연산의 의미
  
  /*
  print() vs println()
  addrPattern, typetag
  */
  
}
