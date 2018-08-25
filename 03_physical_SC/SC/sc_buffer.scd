
------------------------ Buffer? 사용하기 ------------------------


Buffer


파일 불러오기
~buf = Buffer.loadDialog(s); // loadDialog의 아규먼트와 역할 살펴봅시다!

정해진 파일 읽어오기
~buf = Buffer.read(s, "/Users/giy/Desktop/201804_monthly.wav");

b = Buffer.read(s, "/Users/giy/Desktop/201804_monthly.wav");


// action 아규먼트의 사용 예제 - 버퍼를 불러오자 마자 뭔가를 하고 싶을 때
(
~buf = Buffer.loadDialog(s, action: { arg buffer;
    x = { PlayBuf.ar(buffer.numChannels, buffer, BufRateScale.kr(buffer)) }.play;
});
)



// play
~buf.play;





// 좀 더 복잡한 조작을 위해 PlayBuf를 품은 SynthDef로 만들어 봅시다.
// SynthDef 에 대한 약간의 복습이 필요?

(
SynthDef(\bufPlay, {| out = 0, buf = nil, rate = 1, loop = 1, sPos = 0, trigFreq = 2 |
	var trig = Impulse.kr(trigFreq);
    Out.ar(out,
		Amplitude.ar(
        PlayBuf.ar(2, buf, BufRateScale.kr(buf) * rate, trig, sPos, loop, doneAction: 2)
		)
    )
}).add;
);


// SynthDef -> Synth (설계도 -> 실제 소리)
~buf_sound_0 = Synth(\bufPlay, [\buf, ~buf, \rate, 2, \trigFreq, 10]);


// 여러 아규먼트 값을 바꿔보면서 기능을 파악해 봅시다.
~buf_sound_0.set(\rate, 1.7, \sPos, s.sampleRate*(140.rand), \trigFreq, 0.0002);




------------------------ 실시간으로 Amplitude 받기 ------------------------

<SC의 구조와 메시징>

도움말에서
Client vs Server

SendReply는 server의 메시지를 client로 보냅니다.
server는 client에서 바로 값을 읽을 수 없는 UGEN들의 세상.
amplitude tracking을 위해 마련된 Amplitude 역시 UGEN이고 이는 서버에서 작동합니다.
따라서 이 값을 client 쪽으로 가져와 사용하기 위해서는 SendReply의 기능이 필요합니다.


(
SynthDef(\bufPlaySend, {
	| out = 0, buf = 0, rate = 1, loop = 1, sPos = 0, trigFreq = 2, sendFreq = 60 |
	var trig = Impulse.kr(trigFreq);
	var bufPlay = PlayBuf.ar(2, buf, BufRateScale.kr(buf) * rate, trig, sPos, loop, doneAction: 2);
	var amp_ = Amplitude.kr(bufPlay);
	var freq_ = Pitch.kr(bufPlay);
	var sendTrig = Impulse.kr(sendFreq); // 신호를 보내는 속도(해상도)를 결정할 수 있다
	SendReply.kr(sendTrig, '/ampOfBuf', [amp_]);
	SendReply.kr(sendTrig, '/freqOfBufL', freq_[0]);
	SendReply.kr(sendTrig, '/freqOfBufR', freq_[1]);
    Out.ar(out, bufPlay);
}).add;
);


( // Serial로 보내기 전에 중간 OSC에서 먼저 받아서 전달

// ~destNetAddr = NetAddr("127.0.0.1", 5000); // Processing 등 바로 osc를 receive 할 수 있는 대상이 있다면,

~osc_mediate_amp.free; // 메모리에서 지움
~osc_mediate_amp = OSCFunc(
	{
		| msg, time, addr, recvPort | // argument

		var data = msg[3..];

		// msg.postln;
		// ("amp left: " + msg[3] + " | amp right: " + msg[4]).postln;

		~ampL = msg[3];
		~ampR = msg[4];

		// 바로 OSC로 보내기
		// ~destNetAddr.sendMsg("data", data);

}, '/ampOfBuf'); // SynthDef에서 정의한 message name과 일치 해야 합니다


~osc_mediate_freq_left.free; // 메모리에서 지움
~osc_mediate_freq_left = OSCFunc(
	{
		| msg, time, addr, recvPort | // argument

		// msg.postln;
		// ("freq left: " + msg[3] + " | hasPitch left: " + msg[4]).postln;

		~freqL = msg[3];
		~hasFreqL = msg[4];

}, '/freqOfBufL'); // SynthDef에서 정의한 message name과 일치 해야 합니다


~osc_mediate_freq_right.free; // 메모리에서 지움
~osc_mediate_freq_right = OSCFunc(
	{
		| msg, time, addr, recvPort | // argument

		// msg.postln;
		// ("freq right: " + msg[3] + " | hasPitch right: " + msg[4]).postln;

		~freqR = msg[3];
		~hasFreqR = msg[4];

}, '/freqOfBufR'); // SynthDef에서 정의한 message name과 일치 해야 합니다


)


// SynthDef -> Synth (설계도 -> 실제 소리)
~buf_sound_1 = Synth(\bufPlaySend, [\buf, ~buf, \rate, 2, \trigFreq, 0.02, \sPos, s.sampleRate*(140.rand)]);

// 여러 아규먼트 값을 바꿔보면서 기능을 파악해 봅시다.
~buf_sound_1.set(\rate, 0.5, \sPos, s.sampleRate*(140.rand), \trigFreq, 0.02, \sendFreq, 30, \sendFreq, 20);

~buf_sound_1.free;

------------------------ 아두이노로 Serial 통신을 통해 값 보내기 ------------------------

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

Function

~openSerialPort = {| portName |
	return
	SerialPort(
    "/dev/tty.usbserial-00000000", // Serial device 의 이름을 복사해서 붙여 줍니다.
    baudrate: 115200,
    crtscts: true);
)
}

(// port 만들기
p.close; // 새로 만들기 전에 기존에 열었던 시리얼 포트를 닫습니다.
p = SerialPort(
    "/dev/tty.usbserial-00000000", // Serial device 의 이름을 복사해서 붙여 줍니다.
    baudrate: 115200,
    crtscts: true);
)

p;

// Serial port 를 열었으면 반드시 닫아야 합니다!!
p.close;


/*********************** Serial write *************************/
(
r.stop;
r = Routine({
    inf.do{|i|
		// 증가했다 감소했다의 반복
		// p.put(i.fold(0, 100).linexp(0, 100, 1, 255).asInteger.postln); // Fold (도움말 보기)

		[~ampL, ~ampR, ~freqL, ~freqR, ~hasFreqL, ~hasFreqR].postln;

		// 값을 아두이노에서 필요한 범위로 바꾸어 보내주어야 합니다.
		p.put(~ampL.expexp(0.001, 0.2, 1, 255).asInteger.postln);
        0.02.wait;
    };
}).play;
)

r.stop;p.close;



/*********************** Serial read *************************/
(
r= Routine({
    var byte, str, res;
    inf.do{|i|
		i.postln;
        /*if(p.read==10, {
            str = "";
            while({byte = p.read; byte !=13 }, {
                str= str++byte.asAscii;
            });
            res= str.asInteger;
            ("read value:"+res).postln;
        });
		*/
		0.0001.wait;


    };
}).play;
)

r.stop;
p.close;

