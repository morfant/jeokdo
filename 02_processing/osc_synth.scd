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


a = Synth(\deadOrAlive, [\freq, 100, \atkTime, 0.01, \relTime, 0.4]);
