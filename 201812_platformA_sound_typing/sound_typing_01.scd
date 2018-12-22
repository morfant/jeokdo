{SinOsc.ar(200, 0, 0.3)!2}.play;

{WhiteNoise.ar(0.3)!2}.play;

{Saw.ar(500, 0.3)!2}.play;

{LFNoise0.ar(500, 0.3)!2}.play

{BrownNoise.ar(0.3)!2}.play;

{Pulse.ar(200, 0.5, 0.3)!2}.play;

{LFTri.ar(200, 0, 0.3)!2}.play;


/*------------------------------------------*/


{SinOsc.ar(500, 0, 0.5) * SinOsc.kr(1).range(0, 1) !2}.play;

{SinOsc.ar(500, 0, 0.5) * Saw.kr(1/2).range(0, 1) !2}.play;

{SinOsc.ar(500, 0, 0.5) * LFNoise0.kr(10).range(0, 1) !2}.play;

{SinOsc.ar(500, 0, 0.5) * Pulse.kr(10).range(0, 1) !2}.play;

{SinOsc.ar(500, 0, 0.5) * Pulse.kr(10).range(0, SinOsc.kr(2).range(0, 1)) !2}.play;

{SinOsc.ar(500, 0, 0.5) * Pulse.kr(10).range(0, SinOsc.kr(LFNoise0.ar(1).range(0, 10)).range(0, 1)) !2}.play;

{SinOsc.ar(LFNoise0.kr(1).range(100, 300))}.play;

/*------------------------------------------*/

{SinOsc.ar( SinOsc.kr(1).range(10, 500), 0, 0.2 ) !2 }.play;

{SinOsc.ar( LFNoise0.kr(3).range(200, 300), 0, 0.2 ) !2 }.play;

Gui.


(
{SinOsc.ar(60.midicps, 0, 0.3)!2}.play;
{SinOsc.ar(64.midicps, 0, 0.3)!2}.play;
{SinOsc.ar(67.midicps, 0, 0.3)!2}.play;
)





/*------------------------------------------*/

Buffer



p = Platform.resourceDir +/+ "sounds/a11wlk01.wav";
b = Buffer.read(s, p);

b.play;

(
{PlayBuf.ar(
    1, //
    b, // bufnum
    1,
    Impulse.kr(10), // trigger
    LFNoise0.kr(10).range(0, s.sampleRate*5),
    1, // loop
    2  // doneAction
)}.play;
)

s.sampleRate

b = Buffer.loadDialog(s);




/*------------------------------------------*/




(


{SinOsc.ar(900, mul: 0.7) * Impulse.kr(1/2).range(0, 1) !2}.play;


{SinOsc.ar(100, mul: 0.5) * Pulse.kr(1).range(0, 1)!2}.play;



)



