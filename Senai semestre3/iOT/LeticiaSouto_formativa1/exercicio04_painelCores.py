from machine import Pin
from utime import sleep

led_red = PWM(Pin(16))
led_blue = Pin(18, Pin.OUT)
led_green = Pin(19, Pin.OUT)

led_red.duty_u16(0)
led_red.freq(1000)

pot = ADC

While True:
    led_green.value(0)
    led_blue.value(0)
    
    leitura_pot = pot.read_u16()
    led_red.duty(leitura_pot)
    
    print('Valor da Leitura do Potenciometro', leitura_pot)
    sleep(0.2)