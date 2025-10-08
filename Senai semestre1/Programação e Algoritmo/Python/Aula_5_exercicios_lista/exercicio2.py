# -*- coding: UTF -8 -*-

print("Esse programa irá ler 10 números e mostrá-los na ordem inversa.")

L = [ ]
x = 0

while x < 10:
    valor = float(input("Digite o valor desejado: "))
    L. append (valor)
    x = x+1
print(L)

for r in range (len(L) -1, -1, -1):
    print(L[r])
