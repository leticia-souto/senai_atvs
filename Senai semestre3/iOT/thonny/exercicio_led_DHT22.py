from machine import Pin, PWM
from utime import sleep

from dht import DHT22

sensor_temp = DHT22(Pin(15))
led = PWM(Pin(16))

led_pwm.freq(1000)

while True:
    #diz ao sensor que ele iniciará/solicitará uma leitura
    sensor_temp.measure()
    
    #leitura da umidade
    umidade = sensor_temp.humidity()
    
    #leitura da temperatura
    temperatura = sensor_temp.temperature()
    
    
   if temperatura < 20:
       led.duty_u16(65535 * 10 /100 )
       print(f'Temperatura em {temperatura:.2f}°C!')
       

    elif temperatura > 19 and temperatura <31:
        led.duty_u16(65535 * 30 /100 )
        print(f'A temperatura atual é de {temperatura} ºC.')
        
        
    else:
        led.duty_u16(65535)
        print(f'A temperatura atual é de {temperatura} ºC.')
        
    
    sleep(2)