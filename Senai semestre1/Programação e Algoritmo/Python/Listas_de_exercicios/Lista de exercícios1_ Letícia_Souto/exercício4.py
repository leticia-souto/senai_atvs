# -*- coding: UTF -*- 

print("Digite um número inteiro que informarei se ele é ímpar ou par.") 
num = int(input("Digite o número desejado.")) 
resposta = num % 2 

if resposta == 0:
    print("O número é par!") 
else:
    print("O número é ímpar!") 
