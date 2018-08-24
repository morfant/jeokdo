int val = 0;

// the setup function runs once when you press reset or power the board
void setup() {

  Serial.begin(115200);
  
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(A0, INPUT);
}

// the loop function runs over and over again forever
void loop() {


//  val = digitalRead(A0);
  val = analogRead(A0); // 0 ~ 1023

  Serial.println(val);
//  delay(500);


  // blinking
//  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  digitalWrite(12, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(val);                       // wait for a second
//  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  digitalWrite(12, LOW);    // turn the LED off by making the voltage LOW
  delay(val);                       // wait for a second

  delay(1);
  
}
