/*

SC -> serial -> control LED brightness

*/


int ledPin = 11;

void setup() {
  
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  
  byte brightness;

  if (Serial.available()) {
    brightness = Serial.read();
    analogWrite(ledPin, brightness);
  }

}
