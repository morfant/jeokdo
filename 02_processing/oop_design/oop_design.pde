/*
복습

- 함수 만들기에 숙달되기

- 이전 시간의 예제 이렇게 저렇게 변형 해보기

- backgrond() 와 레이어의 개념

- frame의 개념

*/




/*

<이미지와 사운드의 관계 맺기 설계>

* 뭐든지 설계는 중요함 *


0. 전체 컨셉에 대한 질문들 - 어떤 느낌의 이미지/사운드의 조합을 원하는가 ==> 그것을 위해 어떤 연결 방식을 사용하는 것이 적당한가
  이미지의 변화가 사운드의 변화를 제어 vs 사운드의 변화가 이미지의 변화를 제어 vs 두 요소 방식의 복합적 사용
    : 어떤 방식을 주로 사용할 것인가 


1. 이미지의 구조/작동방식 설계

  1) 하나의 단계(phase)에 대한 설계
    background() - 레이어의 개념, 잔상
    
  
  2) 단계들의 시간적 진행
  
      a) 스케쥴링 : '시계'를 만들어 시간에 맞춰 이벤트가 발생하도록 하는 방식 - 정해진 시간에 정해진 단계(Phase)로 넘어간다
      b) 메뉴얼 : 버튼, 마우스 클릭 등 인터렉션을 통해 이벤트의 발생을 제어하는 방식
      c) 확률에 의한 진행 : 랜덤한 수의 주사위 던지기를 통해 진행 방향, 단계 등을 제어하는 방식
      
      또 어떤 것들이 있을 수 있을지 상상해 보자.
        관객과의 상호작용 결과를 통해 진행여부를 제어하는 방식...
      

2. 사운드의 구조/작동방식 설계

    어떤 느낌의 소리들로 구성할 것인가
    몇 개의 소리가 적당한가
    이미지와 연결되는 방식은? - 이미지가 어떤 상태일 때 소리를 낼 것인가  
  
  1) 하나의 단계(phase)에 대한 설계
    어떤 소리를 이용할 것인가?
    어떤 소리들로 구성할 것인가?
      짧은 소리들을 수 백개 - 뜻밖의 결과가 나올 수 있다 : 실험이 필요하다
      긴 소리들로 엠비언트와 같은 코드 진행
      .
      .
      .
      

  
  2) 단계들의 시간적 진행      
    스케쥴링 : '시계'를 만들어 시간에 맞춰 이벤트가 발생하도록 하는 방식 - 정해진 시간에 정해진 단계(Phase)로 넘어간다
    메뉴얼 : 버튼, 마우스 클릭 등 인터렉션을 통해 이벤트의 발생을 제어하는 방식
    확률에 의한 진행 : 랜덤한 수의 주사위 던지기를 통해 진행 방향, 단계 등을 제어하는 방식
      

 
 
 
<설계에서 구현으로>

구현을 위해서는 말 할 필요도 없고,
제대로 된 설계를 위해서도 이미지와 사운드를 담당하는 툴의 전반적인 기능에 대한 숙지가 필요하다.

이를 위해서는 개인적으로 숙련도를 높이는 수밖에 없다.

===> 그러나 역설적이게도, 숙련도를 높이는 가장 좋은 방법은 알고 있는 것만으로 작업을 진행하는 것이다.
작업을 진행하는 과정에서 필요한 것들과 알고 싶은 것들이 생기고 그것이 학습을 위해서 가장 좋은 동기 부여가 될 수 있다. 

이번 워크숍의 마지막 20분 동안 알고 있는 것만으로 10초 정도의 작업을 진행해 보자.

*/


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
  
}

void draw() {
  
  // draw() 안에서 background()의 역할 
  background(255);


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
