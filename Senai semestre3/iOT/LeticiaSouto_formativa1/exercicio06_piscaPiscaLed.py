from machine import Pin, ADC,
from utime import sleep


led = Pin(16, Pin.OUT)
pot = ADC(28)




while True:
    leitura_pot = pot.read_u16()
    led.toggle()
    sleep(65535 / leitura_pot * 0.2)
    sleep(0.02)