from machine import Pin
from utime import sleep

pull_down = Pin(2, Pin.IN)
led = Pin(13, Pin.OUT)


while True:
    estado_botao = pull_down.value()
    
    if estado_botao == 0:
        print("0 - Botão Pressionado! (LOW)")
        led.value(1)
        sleep(1.0)
    
    else:
        print("1 - Botão não pressionado! (HIGH) ")
        led.value(0)
        sleep(1.0)