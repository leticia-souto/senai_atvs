# -*- coding: UTF -8 -*- 

print("Informe sua média e seu número de faltas que direi se voce foi aprovado, reprovado por faltas ou reprovado por média.") 

media = float(input("Qual foi a sua média?")) 
faltas = int(input("Qual foi a quantidade de faltas?")) 
limite_faltas = 80 * 25 / 100 

 

if media >= 7 and media <=10 and faltas < limite_faltas:
    print("Você foi aprovado!!!")  

elif limite_faltas < faltas and media >=7:
    print("Você foi reprovado por faltas!!")

elif media >=0 and media <7 and faltas < limite_faltas:
    print("Você foi reprovado pela média. Estude mais!!")

elif media >=0 and media <7 and faltas > limite_faltas:
    print("Você foi reprovado pela média e por faltas!") 

else:
    print("Média inválida!")
