int relay_0 = 11;
int lightSensor = A5;

void setup() {
  Serial.begin(115200);
  pinMode(relay_0, OUTPUT);
  pinMode(lightSensor, INPUT);
}

void loop() {

    byte sensorVal = analogRead(lightSensor);
    Serial.println(sensorVal);
    delay(5);


//  if (Serial.available() > 0) {
//    
//    byte data = Serial.read();
//    
//    if (data == 1) {
//      digitalWrite(relay_0, HIGH);
//    } else {
//      digitalWrite(relay_0, LOW);
//    }
//    
//  }



}



