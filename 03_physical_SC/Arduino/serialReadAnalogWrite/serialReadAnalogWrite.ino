int ledPin = 11;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  byte brightness;

  if (Serial.available()) {
    brightness = Serial.read();
    analogWrite(ledPin, brightness);
  }

}
