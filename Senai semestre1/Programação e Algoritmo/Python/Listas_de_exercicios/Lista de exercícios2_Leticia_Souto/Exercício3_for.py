# -*- coding: UTF -8 -*-

print("Digite um númer que darei o seu fatorial")
valor = int(input("Digite o número:"))
multiplicacao = 1

for numero in range (valor, 0, -1):
    multiplicacao = multiplicacao * numero
print("O resultado da fatoração é:", multiplicacao)
