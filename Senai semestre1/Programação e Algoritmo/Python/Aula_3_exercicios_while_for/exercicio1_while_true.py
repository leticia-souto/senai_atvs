# -*- coding: UTF -8 -*-
print("Esse programa vai mostrar o triplo de um valor, caso seja inserido o número -999 o programa será encerrado")

while True:
    numero = float(input("Digite um número: "))
    if numero == -999:
        print("Você decidiu parar.")
        break
    soma =  numero * 3
    print("O resultado é:",soma)
