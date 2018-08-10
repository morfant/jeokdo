class br
{

  float x = 0;
  float y = 0;

  float wid = 100;
  float hei = 50;

  float r = 0;
  float g = 0;
  float b = 0;

  color c = color(r, g, b);


  br (float _wid, float _hei) {

    wid = _wid;
    hei = _hei;

  }

  br (int _x, int _y, float _wid, float _hei) {

    x = _x;
    y = _y;

    wid = _wid;
    hei = _hei;
  }



  void setColor(float _r, float _g, float _b) {

    // WRONG!!!
    //float r = _r;
    //float g = _g;
    //float b = _b;

    r = _r;
    g = _g;
    b = _b;
  }

  void drw(float xx, float yy) {

    x = xx;
    y = yy;

    float i = wid * 1.08;
    stroke(255, 255, 255);
    strokeWeight(0.1);
    //noStroke();
    fill(r, g, b, 255);    
    rect(x, y, wid, wid);
  }
}