#-*-coding: UTF-8-*-
'''
5) Faça um programa com uma função que receba o
raio (R) de um círculo e retorne a sua área (A = PI * R2).
'''
raio=float(input("coloque o raio do circulo"))
def area (r):
    conta= 3,14* (r*r)
    return conta
print ("a area é", area(raio))
