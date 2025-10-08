# -*- coding: UTF -8 -*- 

print("Digite sua média que direi se foi aprovado, reprovado ou ficou de recuperação") 

media = float(input("Qual foi a sua média?")) 

if media >=7 and media <= 10:
    print("Você foi aprovado!!!") 

elif media <=3 and media >=0:
    print("Você foi reprovado! Estude mais!!!") 

else:
    print("Você ficou de recuperação!") 
