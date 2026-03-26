from machine import Pin, PWM, ADC,
from utime import sleep

pull_down = Pin(17, Pin.IN)
led = PWM(Pin(16))
pot = ADC(28)

led.freq(1000)
led.duty_u16(0)


while True:
    leitura_pot = pot.read_u16()
    led.duty_u16(leitura_pot)
    
    print("Valor Leitura potenciômetro", leitura_pot)
    sleep(0.5)
