# -*- coding: UTF -8 -*-

print("Esse programa irá identificar os divisores de um número")

valor = int(input("Digite um número"))
for x in range (1,valor):
    if valor % x == 0:
        print(f" O número {x} é um divisor")
        
