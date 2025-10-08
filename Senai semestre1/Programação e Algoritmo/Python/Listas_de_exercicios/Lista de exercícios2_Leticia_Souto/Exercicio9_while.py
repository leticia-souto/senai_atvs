# -*- coding: UTF -8 -*-

print(" Esse programa irá mostrar a quantidade de números positivos e números negativos digitados e será encerrado quando foi digitade um número maior que 1000.")

numeros_positivos = 0
numeros_negativos = 0

while True:
    numero = float(input("Digite um número positivo ou um número maior que 1000 para encerrar o programa:"))
    if numero > 1000:
        print("O programa foi encerrado.")
        break
    elif numero > 0:
        numeros_positivos = numeros_positivos + 1
    elif numero < 0:
        numeros_negativos == numeros_negativos + 1
print(f"A quantidade de números positivos foi de {numeros_positivos} e a quantidade de números negativos foi de {numeros_negativos}.")
