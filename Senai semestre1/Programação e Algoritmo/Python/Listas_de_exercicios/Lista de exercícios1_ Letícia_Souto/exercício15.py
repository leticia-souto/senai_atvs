# -*- coding: UTF -8 -*- 

print("Informe a temperatura atual que eu indicarei se está, muito frio, frio, agradável, calor ou muito calor.") 

temperatura = float(input("Qual é a temperatura atual?")) 

if temperatura <16:
    print("Está muito frio!!") 

elif temperatura >=16 and temperatura <23:
    print("Está frio!") 

elif temperatura >=23 and temperatura <26:
    print("Está agradável!!") 

elif temperatura >=26 and temperatura <30:
    print("Está calor!!")  

else:
    print("Está muito calor!!") 
