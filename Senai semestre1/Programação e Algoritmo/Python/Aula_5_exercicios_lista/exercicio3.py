# -*- coding: UTF-8 -*-

print("Esse programa irá pedir 4 notas e ao final mostrá-las junto com a média.")

L = [ ]
soma = 0
valor = 0

while valor < 4:
    nota = float(input("Digite a nota: "))
    valor = valor + 1
    soma = soma + nota
    L. append(nota)

media = soma / 4

print(f"Suas notas foram {L}")
print(f"A sua média foi {media:.2f}")
