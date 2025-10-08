# -*- coding: UTF -8 -*-
import math

print("Digite um número que infomarei a raiz quadrada, caso seja negativo indicarei o quadrado desse número.")
num = float(input("Digite o número desejado."))

if num >= 0:
    raiz = math.sqrt(num)

    #print (" A raiz quadrada é igual a: %.2f "%raiz)
    print (f" A raiz quadrada é igual a: {raiz:.2f}")
else:
    potencia = num **2
    print ("A potencia do número é igual a:", potencia)
