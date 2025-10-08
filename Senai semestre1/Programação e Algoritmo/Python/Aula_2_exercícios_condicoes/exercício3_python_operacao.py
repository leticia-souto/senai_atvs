# -*- coding: UTF - 8 -
print("Digite dois valor e me informe qual operação deseja realizar, soma, subtração, divisão ou multiplicação, que informarei o resultado")
valor1 = float(input("Qual é o primeiro valor?"))
valor2= float(input("Qual o segundo valor?"))
operacao = input("Qual a operação que deja realizar?")
if operacao == "soma":
    print ("O resultado da operação é igual a:", valor1 + valor2)
elif operacao == "subtração":
    print ("O resultado da operacao é igual a:", valor1 - valor2)
elif operacao == "multiplicação":
    print("O resultado da operação é igual a:", valor1 * valor2)
elif operacao == "divisão":
    print("O resultado da operação é igual a:", valor1 / valor2)
