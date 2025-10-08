#-*-coding: UTF-8-*-
'''
10) Escreva um programa, com uma função que leia 2
valores (A e B), calcule e mostre a soma dos números
ímpares entre eles (inclusive A e B). Nesse caso, considere
que só serão informados valores inteiros positivos e que A é
menor do que B.
'''

def f():
    n=int(input("coloque o primeiro valor"))
    n1=int(input("coloque o segundo valor"))
    acum=0
    
    if n>=n1:
        print('valor inválido')
        
    else:
        for v in range (n,n1+1):
            if v%2 !=0:
                acum=acum + v
    print(acum)
(f())
