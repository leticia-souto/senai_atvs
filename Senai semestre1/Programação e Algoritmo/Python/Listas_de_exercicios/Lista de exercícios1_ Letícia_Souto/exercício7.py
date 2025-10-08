# -*- coding: UTF -8 -*- 
print("Informe a quantidade de horas que voce trabalha que informarei seu salário e se há desconto de imposto de renda") 

horas_trabalhadas = float(input("Qual a quantidade de horas trabalhadas? ")) 
salario = horas_trabalhadas * 19.5 
desconto = salario * 10 / 100
salario_com_desconto = salario - desconto 

if salario > 1500:
    print("O seu salário é de:", salario_com_desconto ) 

else:
    print ("Seu salário é de:", salario) 
