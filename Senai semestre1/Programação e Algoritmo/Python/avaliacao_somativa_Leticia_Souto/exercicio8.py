"""
Escreva uma função saudacao que receba um nome e exiba a mensagem "Olá, [nome]! Seja bem-vindo!". Solicite o nome do usuário e utilize a função para exibir a saudação.

Entrada:
Uma string representando o nome do usuário.

Saída:
A mensagem de saudação personalizada.
"""
# -*- coding: -8 -*-

print("Esse programa irá fazer uma saudação para a pessoa indicada.")

def saudacao(n):
    print(f"Olá, {n}! Seja bem-vindo(a)!")

nome = input("Digite seu nome: ")

saudacao(nome)
    
