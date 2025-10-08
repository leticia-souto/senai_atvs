# -*- coding: UTF -8-
print ("Diga a velocidade de seu carro que informarei se você foi multado.")
velocidade = float(input("Qual a velocidade do veículo?"))
multa = (velocidade-80) * 5
if velocidade <= 80:
                   print("Você não levou multa! Está dentro do limite de velocidade!!")
else:
    print ("Você foi multado, o valor da multa é de:", multa)
