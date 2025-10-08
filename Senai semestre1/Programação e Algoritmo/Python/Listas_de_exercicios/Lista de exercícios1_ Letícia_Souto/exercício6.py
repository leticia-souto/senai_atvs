# -*- coding: UTF -8 -*- 

print("Digite dois números inteiros que direi se o primeiro é divisível pelo segundo.") 

num1 = int(input("Digite o primeiro valor.")) 
num2 = int(input("Digite o segundo valor.")) 
resposta = num1 % num2 

if resposta == 0:
    print("O primeiro número é divisível pelo segundo!!") 

else:
    print("Não é possível a divisão!") 
