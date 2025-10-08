#-*-coding: UTF-8-*-
'''
1) Faça um programa com uma função que retorne o
maior de dois números.
'''
n=float(input("coloque o primeiro número"))
n1=float(input("coloque o segundo número"))
def maior (n,n1):
    if n>n1:
        return n
    elif n==n1:
        return "Números iguais"
    else:
        return n1
    
print (maior(n,n1))
