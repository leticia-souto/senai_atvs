# -*- coding: UTF - 8 -
print("Me diga o seu sálario que direi o valor do aumento")
salario = float(input("Qual o valor do seu salário?"))
aumento1 = (salario * 10 / 100) 
aumento2 = (salario * 15 / 100) 
if salario >=1250:
    print("Seu aumento foi de:", aumento2)
else:
    print("Seu aumento foi de:",aumento1)
