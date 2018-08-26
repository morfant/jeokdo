------------------------ 슈콜에서의 Serial 통신 ------------------------

SerialPort.listDevices;


<sc에서의 변수>
지역변수 / 전역변수 / 환경변수


<시리얼 포트의 물리적 속성>
시리얼 포트는 하나의 하드웨어적인 연결 관이라고 생각하면 좋습니다.
따라서 한 쪽이 먼저 점유하면 다른쪽에서 필요한 기능을 수행 할 수 없는 경우가 생깁니다.

그런 이유로,
슈콜에서 시리얼 포트를 열어놓으면 아두이노에서 프로그램 업로드가 안됩니다.
반대로 아두이노에서 시리얼 모니터 창을 열어 놓으면, 슈콜에서 시리얼 포트를 열 수 없습니다.
따라서 슈콜과 아두이노를 시리얼로 연결하는 경우 아두이노의 시리얼 모니터 창은 쓰지 않는 것으로 생각하는 것이 마음 편합니다.


(// port 열기
p = SerialPort(
    "/dev/tty.usbserial-00000000", // Serial device 의 이름을 복사해서 붙여 줍니다.
    baudrate: 115200,
    crtscts: true);
)

p; // 확인

// Serial port 를 열었으면 닫아야 합니다. 적어도 슈콜을 종료하기 전에는.
p.close;



// 1 : 슈콜 Buffer -> 시리얼 통신 -> 아두이노 -> LED 점멸 제어
// Arduino code : serialReadAnalogWrite
/*********************** Serial write (Send) *************************/
(

r = Routine({
    inf.do{|i|
		// 1) 증가했다 감소했다의 반복
		p.put(i.fold(0, 100).linexp(0, 100, 1, 255).asInteger.postln); // Fold (도움말 보기)


		// 2) Buffer에서 얻어 낸 값 보내기
		// [~ampL, ~ampR, ~freqL, ~freqR, ~hasFreqL, ~hasFreqR].postln;

		// 값을 아두이노에서 필요한 범위로 바꾸어 보내주어야 합니다.
		// p.put(~ampL.expexp(0.001, 0.2, 1, 255).asInteger.postln);
        0.02.wait;
    };
}).play;
)

// routine를 멈춘다.
r.stop;

// Serial port close
p.close;





// 2 : 적외선 거리센서 -> 아두이노 -> 시리얼 통신 -> 슈콜 Buffer 제어
// Arduino code : sensorReadSerialWrite
/*********************** Serial read (Receive) *************************/


- ascii 코드
http://www.pld.ttu.ee/~marek/PA_R4/ascii.html
10 : new line
13 : carriage return

10.asAscii; // 정수를 ascii 코드로
97.asAscii;


- string(문자열)에서의 +와 ++의 차이
t = "";
t;
t = t + 'a';
t = t + 'b';
t = t ++ 'c';


- Type Casting(타입 변환) : 필요에 따라 같은 값이이도 타입을 변환한다.
string -> int
"10".asInteger;

string -> float
"0.02".asFloat;

int, float -> string
10.asString;
0.02.asString;

symbol -> string
'a'.class;
'a'.asString.class;

string -> symbol
"a String".class;
"a String".asSymbol.class;


(// serial read routine
~buf_sound_1 = Synth(\bufPlaySend, [\buf, ~buf, \rate, 2, \trigFreq, 0.02, \sPos, s.sampleRate*(140.rand)]);

r= Routine({
    var byte, str, res, rate;

    inf.do{
		byte = p.read;
		// byte.postln;

		if (byte == 10, { // 10.asAscii => NL (New Line)

			str = "";

			while({ byte = p.read; byte !=13 }, { // SC의 While loop
				str= str++byte.asAscii; // string에서 +와 ++의 차이?
			});

			res = str.asInteger; // string to integer. 타입 변환. "Type casting"

			// rate = res.linlin(10, 500, 4, -4);
			// ~buf_sound_1.set(\rate, rate);
			("read value:"+res).postln;
			// ("rate:"+rate).postln;

		});


		0.0001.wait;


    };
}).play;



// Tip : cmd + . 을 할 때 함께 처리하고 싶은 일을 적어둔다.
// CmdPeriod.doOnce{
// r.stop;
// }


)

// serial read인 경우, cmd + . 을 실행해도 아두이노로부터 들어오는 값이 있으면 routine이 멈추지 않는다.
// 이 때 위의 CmdPeriod 를 사용하면 편리하다.

r.stop;
p.close;