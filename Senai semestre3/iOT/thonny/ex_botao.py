from machine import Pin
from utime import sleep

pull_down = Pin(18, Pin.IN)
led_red = Pin(15, Pin.OUT)
led_green = Pin(16, Pin.OUT)
led_blue = Pin(17, Pin.OUT)



while True:
    #variavel que armazenará o estado do botão
    estado_botao = pull_down.value()
    
    if estado_botao == 0:
        #print("1 - Botão Não Pressionado! (HIGH)")
        print("0 - Botão Pressionado! (LOW)")
        led_red.value(0)
        sleep(0.5)
    
    else:
        #print("0 - Botão não pressionado! (LOW) ")
        print("1 - Botão não pressionado! (HIGH) ")
        led_red.value(1)
    sleep(0.5)