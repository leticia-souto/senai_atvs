# -*- coding: UTF -8 -*-

print("Esse programa irá somar todos os valores positivos inseridos nele e encerrará quando um número negativo for digitado")

resultado = 0

while True:
    valor = float(input("Digite um valor positivo ou um negativo para encerrar o programa"))
    if valor < 0:
        print("Você decidiu parar!")
        break
    resultado = resultado + valor
print(f"A soma dos números positivos é {resultado}.")
