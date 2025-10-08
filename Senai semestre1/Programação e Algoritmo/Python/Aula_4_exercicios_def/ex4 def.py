#-*-coding: UTF-8-*-
'''
4) Faça um programa com uma função que receba a base
e a altura de um triângulo e retorne a sua área (A = (base
x altura) / 2).
'''
base=float(input("me de a base do triângulo"))
altura=float(input("me de a altura do triângulo"))
def area (base, altura):
    return base*altura/2
print (area(base,altura))
