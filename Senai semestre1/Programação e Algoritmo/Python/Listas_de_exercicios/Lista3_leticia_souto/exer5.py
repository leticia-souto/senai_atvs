# -*- coding: UTF -8 -*- 

 

print("Esse programa irá validar se um número é primo.") 

 

def numero_primo():
    numero = int(input("Digite o número desejado: "))
    if numero < 2:
        print("Não é um número primo.")
        return
    for x in range(2, numero):
        if numero % x == 0:
            print("Não é um número primo.")
            return

    else:
        print("É um número primo.")
        return 

numero_primo() 
