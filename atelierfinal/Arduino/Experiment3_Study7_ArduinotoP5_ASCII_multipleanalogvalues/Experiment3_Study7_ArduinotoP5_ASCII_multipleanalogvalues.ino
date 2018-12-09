#include <NewPing.h>

#define TRIGGER_PIN  8  
#define ECHO_PIN     11  
#define MAX_DISTANCE 400 

int brightness = 0;     
const byte RedLED = 9;                 
int invertedbrightness = 0;

// Variables:-
long lDistancecm;                       
unsigned long mS;                       
unsigned long median_uS;                

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE); // NewPing setup of pins and maximum distance.

void setup() 
{
    pinMode(RedLED, OUTPUT);
  Serial.begin(9600); 
}

void loop() 
{
  delay(50);                      
  unsigned int uS = sonar.ping(); 
  Serial.print("Ping: ");
  Serial.print(uS / US_ROUNDTRIP_CM); 
  Serial.println("cm");
  
  median_uS = sonar.ping_median(5);  

    lDistancecm = sonar.convert_cm(median_uS); 
    
    {
        brightness = (byte)map(lDistancecm, 5, 400, 255, 0);
        if (lDistancecm = 0){ 
          brightness = 0;

         }else{
         invertedbrightness = 255 - brightness;
         analogWrite(RedLED, invertedbrightness);               
        }
   
    }
    delay(50);                                .
}
