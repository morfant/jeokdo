
------------------------ Buffer? 사용하기 ------------------------


Buffer


파일 불러오기

~buf = Buffer.loadDialog(s); // loadDialog의 아규먼트와 역할 살펴봅시다!



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
SynthDef(\bufPlay, {| out = 0, buf = 0, rate = 1, loop = 1, sPos = 0, trigFreq = 2 |
	var trig = Impulse.kr(trigFreq);
    Out.ar(out,
		Amplitude.ar(
        PlayBuf.ar(buf.numChannels, buf, BufRateScale.kr(buf) * rate, trig, sPos, loop, doneAction: 2)
		)
    )
}).add;
);


// SynthDef -> Synth (설계도 -> 실제 소리)
~buf_sound_0 = Synth(\bufPlay, [\buf, b, \rate, 2, \trigFreq, 10]);


// 여러 아규먼트 값을 바꿔보면서 기능을 파악해 봅시다.
~buf_sound_0.set(\rate, 1, \sPos, s.sampleRate*(140.rand), \trigFreq, 0.02);




------------------------ 실시간으로 Amplitude 받기 ------------------------

(
SynthDef(\bufPlaySend, {
	| out = 0, buf = 0, rate = 1, loop = 1, sPos = 0, trigFreq = 2, sendFreq = 60 |
	var trig = Impulse.kr(trigFreq);
	var bufPlay = PlayBuf.ar(buf.numChannels, buf, BufRateScale.kr(buf) * rate, trig, sPos, loop, doneAction: 2);
	var amplitude = Amplitude.kr(bufPlay);
	var sendTrig = Impulse.kr(sendFreq);
	SendReply.kr(sendTrig, '/ampOfBuf', amplitude);
    Out.ar(out, bufPlay);
}).add;
);




(
~oo.free;
~oo = OSCdef(\listener,
	{ |msg, time, addr, recvPort|

		msg[3..].postln;
		// time.postln;
		// addr.postln;
		// recvPort.postln;

		~amp = msg[3];


}, '/ampOfBuf');

);

( // receive

~osc_receive.free; // 메모리에서 지운다

~osc_receive = OSCFunc(
	{
	| msg, time, addr, recvPort | // argument, 혹은 parameter 라고 부른다.

}, '/ampOfBuf'); // OSC 통신의 어드레스 패턴
)


// SynthDef -> Synth (설계도 -> 실제 소리)
~buf_sound_1 = Synth(\bufPlaySend, [\buf, b, \rate, 2, \trigFreq, 0.02, \sPos, s.sampleRate*(140.rand)]);

// 여러 아규먼트 값을 바꿔보면서 기능을 파악해 봅시다.
~buf_sound_1.set(\rate, 0.1, \sPos, s.sampleRate*(140.rand), \trigFreq, 0.02, \sendFreq, 30);



// Sending audio parameters over a network via OSC
// Since SendReply can only respond to the host, this shows how
// to send data to a separate target through sclang.
(
SynthDef(\amplitudeAnalysis, {|in=0, rate=60|
	var input = SoundIn.ar(0);
    var amp = Amplitude.kr(input);
    var freq = Pitch.kr(input);
    var trig = Impulse.kr(rate);
    SendReply.kr(trig, '/analysis', amp);
}).add;
)

// example target address - insert your target host & port here
~testNetAddr = NetAddr("127.0.0.1", 5000);
~mySynth = Synth(\amplitudeAnalysis);

(
OSCdef(\listener, {|msg|
    var data = msg[3..];
    data.postln;
	//     ~testNetAddr.sendMsg("data", data);
}, '/ampOfBuf');
)

~mySynth.set(\rate, 60); // slow it down...



m = [ 00, 1141, -1, 0.0075821145437658, 11 ];


m[3..]





------------------------ Serial Send ------------------------

SerialPort.listDevices;

(
p.close;
p = SerialPort(
    "/dev/tty.usbserial-00000000",
    baudrate: 115200,
    crtscts: true);
)




// Serial port 를 열었으면 반드시 닫는다!!
p.close;
~amp = 0;
//send serial data - slow pulsating
(
r= Routine({
    inf.do{|i|
		//         p.put(i.fold(0, 100).linexp(0, 100, 1, 255).asInteger.postln);
		// (i.fold(0, 100).linexp(0, 100, 1, 255).asInteger.postln);
		p.put(~amp.linexp(0.0, 1.0, 1, 255).asInteger.postln);
        0.02.wait;
    };
}).play;
)

4.fold(0, 100)




