# -*- coding: UTF-8 -*-
print("Me informe o valor da casa que deseja comprar, o valor do seu salário e a quantidade de anos que deseja pagar que direi se pode comprá-la e o valor de cada prestação")

valor_casa = float(input("Qual o valor da casa?"))
salario = float(input("Qual é o valor do seu salário?"))
quantidade_anos = float(input("Em quantos anos deseja pagar?"))

valor_prestacao = valor_casa / quantidade_anos
porcentagem_salario = (salario * 30 / 100) 

if valor_prestacao < porcentagem_salario:
    print("O valor de cada prestação é de:", valor_prestacao)
else:
    print("Você não pode comprar a casa!")
