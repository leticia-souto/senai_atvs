# -*- coding: UTF -8 -*-
print("Digite um número que direi se ele é múltiplo de 3.") 

num = float(input("Digite o número")) 

resposta =  num % 3 

if resposta == 0:
    print("O número é múltiplo de 3.") 

else:
    print("O número não é múltiplo de 3.") 
