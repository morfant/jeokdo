------------------------ Buffer? 샘플러? ------------------------
Buffer

샘플을 불러와서 사용하는 일종의 ‘샘플러’.
그 조작 가능성이 거의 무한합니다..


파일 불러오기
~buf = Buffer.loadDialog(s); // loadDialog의 아규먼트와 역할 살펴봅시다!

정해진 파일 읽어오기
~buf = Buffer.read(s, "/Users/giy/Desktop/201804_monthly.wav");


// action 아규먼트의 사용 예제 - 버퍼를 불러오자마자 뭔가를 하고 싶을 때
(
~buf = Buffer.loadDialog(s, action: { arg buffer;
    x = { PlayBuf.ar(buffer.numChannels, buffer, BufRateScale.kr(buffer)) }.play;
});
)

// play
~buf.play;


// 좀 더 복잡한 조작을 위해 PlayBuf를 품은 SynthDef로 만들어 봅시다.

// Trig 신호?
{Impulse.kr(1)}.plot(1);
{Impulse.kr(10)}.plot(1);


(
SynthDef(\bufPlay, {
	| out = 0, buf = nil, rate = 1, loop = 1, sPos = 0, trigFreq = 2 |
	var trig = Impulse.kr(trigFreq);
    Out.ar(out, PlayBuf.ar(2, buf, BufRateScale.kr(buf) * rate, trig, sPos, loop, doneAction: 2));
}).add;
);


// SynthDef -> Synth (설계도 -> 실제 소리)
~buf_sound_0 = Synth(\bufPlay, ["buf", ~buf, "rate", 1, "trigFreq", 0.00001, "loop", 0]);


// 여러 아규먼트 값을 바꿔보면서 기능을 파악해 봅시다.
~buf_sound_0.set(\rate, 1.7, \sPos, s.sampleRate*(140.rand), \trigFreq, 1);




------------------------ 실시간으로 Amplitude 받기 ------------------------

슬라이드 참고
https://drive.google.com/open?id=1y1TVYOPuWhjNGWBJBXHb8kkfGkvu7XelpJMwEZbSpvE


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

	SendReply.kr(sendTrig, '/ampOfBuf', amp_);
	SendReply.kr(sendTrig, '/freqOfBufL', freq_[0]);
	SendReply.kr(sendTrig, '/freqOfBufR', freq_[1]);

    Out.ar(out, bufPlay);
}).add;
);


OSCdef




( // Serial로 보내기 전에 중간 OSC에서 먼저 받아서 전달

// ~destNetAddr = NetAddr("127.0.0.1", 5000); // Processing 등 바로 osc를 receive 할 수 있는 대상이 있다면,

OSCdef(\o1,
	{
		| m, t, a, r | // argument : 이름을 바꿔도 순서대로 들어오는 값에는 변함이 없다.

		m.postln;
		// ("amp left: " + msg[3] + " | amp right: " + msg[4]).postln;

		~ampL = m[3];
		~ampR = m[4];

		// 바로 OSC로 보내기
	// ~destNetAddr.sendMsg("data", data);

}, '/ampOfBuf'); // SynthDef에서 정의한 message name과 일치 해야 합니다


OSCdef(\o2,
	{
		| msg, time, addr, recvPort | // argument

		// msg.postln;
		// ("freq left: " + msg[3] + " | hasPitch left: " + msg[4]).postln;

		~freqL = msg[3];
		~hasFreqL = msg[4];

}, '/freqOfBufL'); // SynthDef에서 정의한 message name과 일치 해야 합니다

OSCdef(\o3,
	{
		| msg, time, addr, recvPort | // argument

		// msg.postln;
		// ("freq right: " + msg[3] + " | hasPitch right: " + msg[4]).postln;

		~freqR = msg[3];
		~hasFreqR = msg[4];

}, '/freqOfBufR'); // SynthDef에서 정의한 message name과 일치 해야 합니다


// SynthDef -> Synth (설계도 -> 실제 소리)
~buf_sound_1 = Synth(\bufPlaySend, [\buf, ~buf, \rate, 2, \trigFreq, 0.02, \sPos, s.sampleRate*(140.rand)]);


)



// 여러 아규먼트 값을 바꿔보면서 기능을 파악해 봅시다.
~buf_sound_1.set(\sendFreq, 2);
~buf_sound_1.set(\rate, 0.5, \sPos, s.sampleRate*(140.rand), \trigFreq, 0.02, \sendFreq, 20);
~buf_sound_1.free;
