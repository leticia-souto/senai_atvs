"""
escreva um programa que solicite 5 notas de um aluno, calcule a média e informe se o aluno foi aprovado (média >= 6) ou reprovado.

Entrada:
Cinco números reais representando as notas do aluno.

Saída:
A média do aluno e a mensagem "Aprovado" ou "Reprovado".
"""

# -*- coding: UTF -8 -*-

print("Esse programa irá calcular a média de 5 notas e informar o estado de aprovação")


def notas():
    nota = 0
    for x in range(1,6):
        nota1 = float(input("Digite o valor da nota, até 10: "))
        nota = nota + nota1
        media = nota / 5
    if media >= 6 and media <=10:
        print("Você foi aprovado!!")
    elif media >=0 and media <6:
        print("Você foi reprovado!")
    else:
        print("Erro! Média inválida.")

notas()
        
