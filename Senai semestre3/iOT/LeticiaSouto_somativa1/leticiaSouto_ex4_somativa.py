from machine import Pin
from utime import sleep

vermelho = Pin(13, Pin.OUT)
amarelo = Pin(14, Pin.OUT)
verde = Pin(15, Pin.OUT)


btnUp = Pin(16, Pin.IN)
btnDown = Pin(17, Pin.IN)

carga = 0
estado = "parado"

ultimo_estado_btnDown = 0
utimo_estado_btnUp = 0

while True:
    estado_atual_btnDown = pull_down.value()
    estado_atual_btnUp = pull_up.value()

    if estado_atual_btnDown == 1 and ultimo_estado_btnDown == 0:
        estado = "carregando"
        print(estado)
        print("carregador conectado")

        else:
            print(estado)
            print("carregador desconectado")
    
    ultimo_estado_btnDown = estado_atual_botaoDown
    sleep(0.01)
    
    for c in range (0, 65535, 5):
        if estado = "carregando":
            c = (carga + 5)
            porcentagem = int((c * 100) / 65535)

        elif porcentagem < 20:
            vermelho.on()
            print("Bateria Fraca")

        elif porcentagem >= 20 and carga < 80:
            amarelo.on()
            print("Bateria Média")
        
        elif porcentagem >= 80 and carga < 101:
            verde.on()
            print("Bateria Cheia")
        sleep(0.5)

    if estado_atual_btnUp == 1 and utimo_estado_btnUp == 0 :
        estado = "descarregando"
        print(estado)
        print("Motor Ligado - consumindo bateria")

        else:
            estado = "parado"
            print(estado)
            print("Motor Desligado.")
            
    estado_atual_btnUp = utimo_estado_btnUp
    sleep(0.01)
    
    for j in range (65535, 0, 5):
        if estado = "descarregando":
            j = (carga - 5)
            porcentagem = int((j * 100) / 65535)
            print(f"Nível da Bateria: {porcentagem}%)
        
        sleep(0.5)