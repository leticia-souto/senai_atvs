from machine import Pin
from utime import sleep

pull_down = Pin(17, Pin.IN)
led = Pin(16, Pin.OUT)


while True:
    estado_botao = pull_down.value()
    
    if estado_botao == 1:
        print("1 - Botão Pressionado! (LOW)")
        led.value(1)
        sleep(0.5)
    
    else:
        print("0 - Botão não pressionado! (HIGH) ")
        led.value(0)
        sleep(0.5)