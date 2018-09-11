파일 불러오기
~buf_0 = Buffer.loadDialog(s); // loadDialog의 아규먼트와 역할 살펴봅시다!

정해진 파일 읽어오기
(
b = Buffer.read(s, "/Users/giy/jeokdo/gwangsung_joong/sounds/piano_1.wav");
~buf_0 = Buffer.read(s, "/Users/giy/jeokdo/gwangsung_joong/sounds/piano_1.wav");
~buf_1 = Buffer.read(s, "/Users/giy/jeokdo/gwangsung_joong/sounds/piano_2.wav");
~buf_2 = Buffer.read(s, "/Users/giy/jeokdo/gwangsung_joong/sounds/sine.wav");
~buf_3 = Buffer.read(s, "/Users/giy/jeokdo/gwangsung_joong/sounds/stream.wav");
~buf_4 = Buffer.read(s, "/Users/giy/jeokdo/gwangsung_joong/sounds/taaa.wav");
~buf_5 = Buffer.read(s, "/Users/giy/jeokdo/gwangsung_joong/sounds/tung.wav");
);


// play
~buf_0.play;
~buf_1.play;
~buf_2.play;
~buf_3.play;
~buf_4.play;
~buf_5.play;

~buf_0.numFrames/s.sampleRate;
b;

(
SynthDef(\bufPlay, {
	| out = 0, buf = nil, rate = 1, loop = 0, sPos = 0, trigFreq = 2, gate = 1, amp = 0.8, rel = 1.0 |
	var env = EnvGen.kr(Env.linen(0.01, rel), gate, doneAction: 2);
	Out.ar(out,
		Pan2.ar(env * PlayBuf.ar(2, buf, BufRateScale.kr(buf) * rate, 1, sPos, loop),
		0, amp));
}).add;
);



~sound = Synth(\bufPlay, [buf: ~buf_0, rel: ~buf_0.numFrames/s.sampleRate/1.2, rate: 1.2, amp: 1.4 ]);
~sound = Synth(\bufPlay, [buf: ~buf_1, rel: ~buf_1.numFrames/s.sampleRate/0.6, rate: 0.6, amp: 0.8]);

~sound = Synth(\bufPlay, [buf: ~buf_2, rel: ~buf_2.numFrames/s.sampleRate/0.5, rate: 0.5, amp: 0.3]);
~sound = Synth(\bufPlay, [buf: ~buf_3, rel: ~buf_3.numFrames/s.sampleRate/1, rate: 1, amp: 0.8]);
~sound = Synth(\bufPlay, [buf: ~buf_4, rel: ~buf_4.numFrames/s.sampleRate/1, rate: 1, amp: 0.9]);
~sound = Synth(\bufPlay, [buf: ~buf_5, rel: ~buf_5.numFrames/s.sampleRate/1, rate: 1, amp: 0.5]);

