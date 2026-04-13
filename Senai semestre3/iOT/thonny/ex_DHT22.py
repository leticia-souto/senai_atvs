from machine import Pin
from utime import sleep

from dht import DHT22

sensor_temp = DHT22(Pin(15))

while True:
    #diz ao sensor que ele iniciará/solicitará uma leitura
    sensor_temp.measure()
    
    #leitura da umidade
    umidade = sensor_temp.humidity()
    
    #leitura da temperatura
    temperatura = sensor_temp.temperature()
    
    print(f"A umidade é {umidade:.2f}")
    print(f"A temperatura é {temperatura:.2f}°C")
    
    sleep(2)
    