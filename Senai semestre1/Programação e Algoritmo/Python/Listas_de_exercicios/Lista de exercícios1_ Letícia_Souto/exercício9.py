# -*- coding: UTF -8 -*- 
print("Me diga o seu peso(kg) e sua altura (metros) que direi se você está com o peso adequado.") 

peso = float(input("Qual é o seu peso?")) 
altura = float(input("Qual é a sua altura?")) 
imc = peso / (altura**2) 

 

if imc < 20:
    print("Você está abaixo do peso!") 

elif imc >= 20 and imc <=25:
    print("Seu peso está normal!") 

elif imc >25 and imc <=30:
    print("Você está sobre peso!") 

elif imc >30 and imc <= 40:
    print("Você está obeso!") 

else:
    print("Você está obeso mórbido!")
