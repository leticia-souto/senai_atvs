# -*- coding: UTF -8 -*- 

print("Esse programa irá mostrar a tubuada de sua preferencia , de 1 a 10.") 


def multiplicacao(n):
    for x in range (1,11):
        print(f"{n} X {x} = {n * x}")
tabuada = int(input("Digite a tubuada desejada:"))

if tabuada >=1 and tabuada <=10:
    multiplicacao(tabuada)

else:
    print("Erro!") 
