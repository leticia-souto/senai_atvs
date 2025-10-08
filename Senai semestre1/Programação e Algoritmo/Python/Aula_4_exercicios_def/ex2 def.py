#-*-coding: UTF-8-*-
'''
2) Faça um programa com uma função que receba dois
números e retorne True se o primeiro número for
múltiplo do segundo.
'''
n=float(input("coloque o primeiro número"))
n1=float(input("coloque o segundo número"))
def conta (n,n1):
    return(n % 2==0)
print (conta (n,n1))
