# -*- coding: UTF - 8
print ("Digite a quantidades de cigarros fumados por dia e por quantos anos fumou/fuma que eu informarei a redução do seu tempo de vida")
cigarros = int(input("Digite quantidade de cigarros fumados por dia"))
anos = float(input("Digite por quantos anos fumou"))
dia1 = cigarros * 10
anos1 = (anos *365) * dia1 // 1440
print ("A quantidade de dias de vida perdidos foram de:", anos1) 
