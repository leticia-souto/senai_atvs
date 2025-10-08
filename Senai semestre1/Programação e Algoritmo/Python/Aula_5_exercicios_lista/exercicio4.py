# -*- coding: UTF-8 -*-

print("Esse programa irá receber caracteres minúsculos e mostrar quantos foram consoantes")

L = ['a', 'e', 'i', 'o', 'u']
X = [ ] 
cont = 0
v = 0

while v <10:
    letra = input("Digite uma letra minúscula: ")

    if letra in L:
        cont = cont + 0
        v = v + 1
        X. append(letra)

    else:
        cont = cont + 1
        v = v+1
        X. append(letra)

print(f"O total de consoantes digitadas foi de {cont}")
