# -*- coding: UTF -8  

 

print("Esse programa irá calcular o volume de um cilindro.") 

def calcular_volume():
    raio = float(input("Digite o valor do raio."))
    altura = float(input("Digite o valor da altura."))
    pi = 3.14
    volume = pi * (raio **2) * altura
    print(f"O volume do cilindro é de {volume:.2f}")
    
calcular_volume()
