from machine import Pin
from utime import sleep

led_red = Pin(15, Pin.OUT)
led_green = Pin(16, Pin.OUT)
led_blue = Pin(17, Pin.OUT)

while True:
    print("vermelho")
    led_red.value(1)
    led_green.value(0)
    led_blue.value(0)
    sleep(1)
    
    print("azul/roxo")
    led_red.value(1)
    led_green.value(0)
    led_blue.value(1)
    sleep(1)
    
    print("azul claro")
    led_red.value(0)
    led_green.value(1)
    led_blue.value(1)
    sleep(1)