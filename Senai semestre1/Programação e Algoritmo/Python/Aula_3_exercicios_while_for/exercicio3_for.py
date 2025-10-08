# -*- coding: UTF -8 -*-

print("Esse programa vai imprimir a média de números positivos digitados")

valor_repetir = int(input("Digite a quantidade de vezes a ser repetidas"))
acum = 0

for v in range (0 , valor_repetir):
    valor_conta = float(input("Digite o valor:"))
    acum = acum + valor_conta
    media = acum / valor_repetir

print (f"A média dos valores é {media: .2f}" )
