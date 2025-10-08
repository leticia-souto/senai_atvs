"""
Escreva um programa que solicite um número inteiro e verifique se ele é divisível por 3 e 5. Exiba a mensagem correspondente.

Entrada:

Um número inteiro.

Saída:


A mensagem "Divisível por 3 e 5" ou "Não divisível por 3 e 5".
"""

# -*- coding: UTF -8 -*-

print("Esse programa irá validar se um número inteiro é divisível por 3 e 5")

def divisao():
    numero = int(input("Digite um número inteiro: "))
    if numero % 3 == 0 and numero % 5 == 0:
        print(f"{numero} é divisível por 5 e por 3!!")
    else:
        print(f"{numero} não é divisível por 3 e 5! :(")

divisao()
