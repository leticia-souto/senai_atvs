# -*- coding: UTF -8 -*-

resultado = 0
print("Esse programa irá mostras a quantidades de números positivos digitados")

while True:
    valor = float(input("Digite um positivo ou um negativo para sair"))
    if valor < 0:
        print("Você decidiu parar!")
        break
    resultado = resultado + 1
print("A quantidade de números digitados foi de:", resultado)
