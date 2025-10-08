#-*-coding: UTF-8-*-
'''
9) Escreva um programa, com uma função que imprima o
conceito de um aluno, dada a sua nota. Supor, apenas,
notas inteiras. O critério para conceitos é o seguinte:

Nota

Conceito

notas inferiores a 3

Conceito E

notas de 3 a 5

Conceito D

notas 6 e 7

Conceito C

notas 8 e 9

Conceito B

nota 10

Conceito A
'''
nota=int(input("coloque sua nota INTEIRA"))
def conceito (n):
    if n <3:
        return 'conceito E'
    elif n >=3 and n <=5:
        return 'concito D'
    elif n ==6 or n ==7:
        return 'conceito C'
    elif n ==8 or n ==9:
        return 'conceito B'
    elif n ==10:
        return 'conceito A'
    else:
        return 'nota inválida'
    
print (conceito(nota))
