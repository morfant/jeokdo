// SynthDef의 정의


(

SynthDef.new(\deadOrAlive,

	{
	|
		freq = 100, amp = 0.5,
		atkTime = 0.03, relTime = 0.2,
		lr = 0,
		gate = 1
	|

	var env = EnvGen.kr(Env.perc(atkTime, relTime), gate, doneAction: 2);
	var sig = SinOsc.ar(freq, mul: amp);

	Out.ar(0, Pan2.ar(sig*env, lr));
	}

).add;



SynthDef.new(\bubble,

	{
	|
		freq = 100, amp = 0.5,
		atkTime = 0.03, relTime = 0.2,
		lr = 0,
		gate = 1
	|

	var env = EnvGen.kr(Env.perc(atkTime, relTime), gate, doneAction: 2);
	var sig = SinOsc.ar(freq * SinOsc.kr(1/2).range(0, 1), mul: amp);

	Out.ar(0, Pan2.ar(sig*env, lr));
	}

).add;

)



SynthDef는 설계도일뿐 소리는 아니다.
SynthDef를 이용해 소리를 낼 때는 Synth를 이용한다.


// Synth(소리내고자 하는 SynthDef의 이름, 적용하고자 하는 아규먼트와 그 값들의 짝
Synth(\deadOrAlive, [\freq, 100, \atkTime, 0.01, \relTime, 0.4]);

Synth(\bubble,[\freq, 100, \atkTime, 0.01, \relTime, 0.4]);
