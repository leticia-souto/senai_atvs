from machine import Pin
from utime import sleep, sleep_ms

led_vermelho1 = Pin(12, Pin.OUT)
led_amarelo1 = Pin(15, Pin.OUT)
led_verde1 = Pin(14, Pin.OUT)

led_vermelho2 = Pin(18, Pin.OUT)
led_amarelo2 = Pin(17, Pin.OUT)
led_verde2 = Pin(16, Pin.OUT)

led_verde_pedestre = Pin(21, Pin.OUT)
led_vermelho_pedestre = Pin(20, Pin.OUT)

botao = Pin(19, Pin.IN)

semaforo1 = (led_amarelo1, led_verde1)
semaforo2 = (led_amarelo2, led_verde2)

while True:
    
    if botao.value() == 1:
        led_vermelho_pedestre.off()
        led_vermelho_pedestre.on()
    
        led_vermelho1.on()
        led_verde2.on()
        sleep(2)
        led_amarelo2.on()
        led_verde2.off()
        sleep(2)
        led_vermelho2.on()
        led_vermelho1.off()
        led_verde1.on()
        led_amarelo2.off()
        sleep(2)
        led_verde1.off()
        led_amarelo1.on()
        sleep(2)
        led_vermelho2.off()
        led_amarelo1.off()
        sleep(2)

    if botao.value() == 0:
        led_vermelho1.on()
        led_vermelho2.on()
        led_verde_pedestre.on()
        led_vermelho_pedestre.off()
        sleep(5)
        led_vermelho2.off()
