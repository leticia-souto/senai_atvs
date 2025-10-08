#-*-coding: UTF-8-*-
'''
8) Escreva um programa, com uma função para ler a idade
de uma pessoa e informar a sua classe eleitoral, conforme:

Não-eleitor (abaixo de 16 anos).

Eleitor obrigatório (entre 18 e 65 anos).

Eleitor facultativo (entre 16 e 18 ou maior de 65
anos).
'''
idade=int(input("digite sua idade"))
def classe_eleitoral (n):
    if n <16:
        return 'não-eleitor'
    elif n >=16 and n <18 or n >65:
        return 'eleitor facultativo'
    else:
        return 'eleitor obrigatótio'
print (classe_eleitoral (idade))
