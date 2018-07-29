// eq
~masterEQ = ChannelEQ.new(2, s, 0, 0);
~masterEQ.gui.onSelect('x_flat');


// 속도 설정
TempoClock.default.tempo_(55/60); // 기본 시계. 60/60 일 경우 1.0.wait의 1.0이 실제 1초가 된다.

// 속도 설정에 따른 1.0.wait의 속도 비교
{2.do{|i| i.postln; 1.0.wait;}}.fork;


(// sequence
~key_house = 0;
~amp_house = 0.12;

// #1
~h1 = Pdef(\seq_house_1,
	Pbind(
		\instrument, "house",
		\freq, Pseq([
			Pseq(([71, 68, 64]+~key_house).midicps, 4), // c3 = 60
			Pseq(([71, 68, 65]+~key_house-2).midicps, 4),
		], inf),
		\delta, Pseq([
			Pseq([2, 1, 1]/1, 1),
		], inf),
		\dur, Pseq([
			Pseq([2, 1, 1]*1.1, 1),
		], inf),
		\amp, Pseq([0.4, 0.3, 0.24]*~amp_house, inf),
	)
// ).quant_(4).play;
).quant_(0).play;


// #2
~h2 = Pdef(\seq_house_2,
	Pbind(
		\instrument, "house2",
		\dur, Pseq([
			Pseq([2, 1, 1]*0.7, 1),
		], inf),
		\freq, Pseq([
			Pseq(([71, [66, 67, 69], 68, 64]).midicps, 4),
			Pseq(([71, 68, 65]+~key_house-2).midicps, 4),
		], inf),
		\delta, Pseq([
			Pseq([2, 1, 1]*(1-0.01), 1),
		], inf),
		\amp, Pseq([0.4, 0.3, 0.24]*~amp_house, inf),

	)
// ).quant_(4).play;
).quant_(0).play;
)




(// sound 1
SynthDef("house", {
	arg out = 0, freq = 50, amp = 0.2, gate = 1, atkTime = 0.3, relTime = 0.1;
	var env;
	env = EnvGen.kr(Env.perc(), gate, doneAction: 2);
	Out.ar(out, SinOsc.ar(#[1, 1.5, 3] * freq) * amp * env);
}).add;
)



(// sound 2
SynthDef("house2", {
	arg out = 0, freq = 50, amp = 0.2, gate = 1, atkTime = 0.3, relTime = 0.1;
	var env;
	env = EnvGen.kr(Env.perc(), gate, doneAction: 2);
	Out.ar(out, Saw.ar(#[1, 1.5, 3] * SinOsc.kr(1)) * amp * env);
}).add;
)