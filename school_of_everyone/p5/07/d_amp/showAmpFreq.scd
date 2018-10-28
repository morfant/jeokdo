Quarks.install("https://github.com/supercollider-quarks/MP3.git");


b = MP3.readToBuffer(s,  "/Users/giy/jeokdo/school_of_everyone/p5/07/d_amp/assets/letter.MP3")
b.play;

FreqScope.new(900, 600);

// view scope in server menu