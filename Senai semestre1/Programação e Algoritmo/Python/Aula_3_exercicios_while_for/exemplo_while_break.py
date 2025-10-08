# -*- coding: UTF -8-*-
s = 0

while True:
    v = int(input("Digite um número a somar ou 0 para sair: "))
    if v == 0:
        break

    s = s + v
print (f" A soma é {s}")
