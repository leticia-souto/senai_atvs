# -*- coding: UTF -8 -*-

print("Esse programa irá mostrar o maior número e o menor número digitado.")

numero = float(input("Digite um valor:"))

maior_numero = numero
menor_numero = numero

while True:
    numero1 = float(input("Digite um número ou um negativo para encerrar o programa: "))

    if numero1 < 0:
        print("Você decidiu parar o programa!")
        break

    elif numero1 < menor_numero:
        menor_numero = numero1

    elif numero1 > maior_numero:
        maior_numero = numero1
        
if maior_numero == menor_numero:
    print("Os números digitados são iguais, não há menor e maior.")

else:
    print(f"""O maior número é {maior_numero},
o menor número é {menor_numero}.""")

        
