# -*- coding: UTF -8 -*- 

print("""Informe seu salário bruto e o valor da prestação do imóvel que deseja comprar, que direi se o empréstimo será concedido, lembrando que se o valor da parcela ultrapassar 30% do valor do salário o empréstimo será negado.""") 

salario = float(input("Qual é valor do salário?")) 
valor_prestacao = float(input("Qual é o valor de cada prestação?")) 
porcentagem_salario = salario * 30 / 100 

if valor_prestacao <= porcentagem_salario:
    print("O empréstimo foi concedido!!") 
else:
    print("O empréstimo foi negado!!") 

 

