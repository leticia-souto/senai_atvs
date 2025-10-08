"""
Escreva um programa que receba o peso e a altura de um aluno, calcule o IMC e classifique o resultado como "Abaixo do peso", "Peso ideal" ou "Acima do peso".

Fórmula:
IMC = peso / (altura * altura)

Entrada:
Dois números reais representando o peso e a altura do aluno.

Saída:
O valor do IMC e a classificação correspondente.
"""

# -*- coding: UTF - 8 -*-

print("Esse programa vai calcular o IMC de um aluno e classificar se o peso está ideal, acima do peso ou abaixo do peso")

def calculo_imc(i):
    print(f"Seu IMC é {i:.2f}")

peso = float(input("Digite o seu peso em kg: "))
altura = float(input("Digite a sua altura em metro: "))
imc = peso / (altura* altura)


if imc < 18.5:
    calculo_imc(imc)
    print("Você está abaixo do peso")

elif imc >= 18.5 and imc < 24.9:
    calculo_imc(imc)
    print("Você está no peso ideal.")

else:
    calculo_imc(imc)
    print("Você está acima do peso.")
