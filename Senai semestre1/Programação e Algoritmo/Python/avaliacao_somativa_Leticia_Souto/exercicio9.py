"""
Escreva um programa que solicite um número inteiro e exiba todos os números de 1 até esse número.

Entrada:
Um número inteiro.

Saída:
A sequência de números de 1 até o número informado.
"""

# -*- coding: -8 -*-

print("Esse programa irá solicitar um número e mostrar todos os anteriores até chegar no número informado.")

numero = int(input("Digite um número inteiro: "))

for x in range (0, numero):
    x = x +1
    print(x)
