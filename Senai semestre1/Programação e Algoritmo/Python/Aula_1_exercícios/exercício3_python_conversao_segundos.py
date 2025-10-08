# -*- coding: UTF - 8
print ("Digite uma quantidade de dias, horas, minutos e segundos que eu informarei a soma convertida em segundos")
valor1 = int(input("Digite uma quantidade de dias"))

valor2 = float(input("Digite uma quantidade de horas"))
valor3 = int(input("Digite uma quantidade de minutos"))
valor4 = float(input("Digite uma quatidade de segundos"))
resultado = (valor1 * 86.400) + (valor2 * 3600) + (valor3 * 60) + (valor4)

print("O resultado da soma é de:", resultado)
