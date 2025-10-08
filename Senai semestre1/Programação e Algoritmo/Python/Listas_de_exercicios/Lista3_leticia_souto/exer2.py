# -*- coding: UTF -8 -*- 

 

print('Esse programa irá dizer se um número  perfeito ou não.') 

 

def numero_perfeito ():
    numero = int(input('Digite o número: '))
    soma = 0
    for x in range (1, numero):
        if numero % x == 0:
            soma = soma + x

        elif soma == numero:
            print(f'{numero} é um número perfeito')
            return
        else:
            print(f'{numero} nao é um número perfeito.') 

numero_perfeito() 
