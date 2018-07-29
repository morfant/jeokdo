(
SynthDef(\gobeat, {|freq = 240, dur = 0.2, gate = 1, amp = 0.5|
	var env = EnvGen.kr(Env.perc(0.01, dur), gate, doneAction: 2);
	var sig = SinOsc.ar(freq, 0, env);
	Out.ar(0, Pan2.ar(sig)*amp);
}).add;
)