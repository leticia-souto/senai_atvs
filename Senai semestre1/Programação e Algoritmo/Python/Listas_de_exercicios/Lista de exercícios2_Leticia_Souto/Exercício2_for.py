# -*- coding: UTF -8 -*-

print("Esse programa irá imprimir a soma dos primeiros 50 números pares")

soma = 0

for pares in range (0, 101, 2):
    soma = soma + pares
print("A soma dos primeiros 50 números pares é de:", soma)
