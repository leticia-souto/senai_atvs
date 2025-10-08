#-*-coding: UTF-8-*-
'''
6) Faça um programa com uma função que necessite de
um argumento. A função retorna o valor do caractere 'P',
se o seu argumento for positivo, e 'N', se o seu argumento
for zero ou negativo.
'''
valor=float(input("digite o valor e eu falarei se é negativo ou positivo"))
def PouN (v):
    if v <=0:
        return "N"
    else:
         return "P"
print(PouN(valor))
