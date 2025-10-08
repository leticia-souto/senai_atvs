#-*-coding: UTF-8-*-
'''
7) Faça um programa com uma função chamada
somaImposto. A função possui dois parâmetros formais:
taxaImposto, que é a quantia de imposto sobre vendas
expressa em porcentagem, e custo, que é o custo de um
item antes do imposto. A função "altera" o valor de custo
para incluir o imposto sobre vendas.

'''
somaimposto=float(input("digite o imposto"))
custo=float(input("digite o custo"))
def novo_custo ():
    global somaimposto,custo
    valor=somaimposto*custo/100
    custo=valor+custo
    return custo
print (novo_custo())
