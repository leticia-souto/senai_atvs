from machine import Pin, PWM, ADC,
from utime import sleep

botao1 = Pin(17, Pin.IN)
botao2 = Pin(18, Pin.IN)
led = PWM(Pin(16))


led.freq(1000)
led.duty_u16(0)


while True:
    estado_botao1 = pull_down.value()
    estado_botao2 = pull_down.value()
    
    if estado_botao1 == 1: 
    led.duty_u16(estado_botao1 + 1000 )
    
    sleep(0.5)