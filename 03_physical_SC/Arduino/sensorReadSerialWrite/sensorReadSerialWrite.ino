/*

CDS -> serial -> SC : Playbuf의 rate 조절

*/


int lightSensor = A5;

void setup() {
  Serial.begin(115200);
  pinMode(lightSensor, INPUT);
}

void loop() {

    byte sensorVal = analogRead(lightSensor);
    Serial.println(sensorVal);
    delay(50); // 시리얼을 보내는 쪽의 속도가 받는 쪽의 속도 보다는 늦어야 한다 (1초에 20번)

}



