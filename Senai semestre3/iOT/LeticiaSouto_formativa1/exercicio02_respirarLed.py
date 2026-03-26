from machine import Pin, PWM
from utime import sleep

pull_down = Pin(17, Pin.IN)
led = PWM(Pin(16))

led.freq(1000)
led.duty_u16(0)


while True:
    for i in range(0 ,65535, 1000):
        led.duty_u16(i)
        
        sleep(0.2)
        print('led ligando...')
        
    for e in range(65535, 0, -1000):
        led.duty_u16(e)
        print('led desligado')
        
        sleep(0.5)