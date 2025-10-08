# -*- coding: UTF -8 -*- 

print("Me informe a idade de um indivíduo, que indicarei a classificação de faixa etária a qual ela se adequa.")

idade = int(input("Digite a idade.")) 

if idade <= 2:
    print("A classificação da faixa etária é: bebê.") 

elif idade >2 and idade <= 12:
    print("A classificação da faixa etária é: criança.") 

elif idade >12 and idade <23:
    print("A classificação da faixa etária é: adolescente.") 

elif idade >=23 and idade <70:
    print("A classificação da faixa etária é: adulto.") 

else:
    print("A classificação da faixa etária é: idoso.") 
