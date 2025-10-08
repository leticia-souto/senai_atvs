# -*- coding: UTF -8 -*-
print("""
Diga a quantidade de KWh consumidas e o tipo de instalação de seu imóvel que direi o preço a pagar pelo fornecimento de energia elétrica
Residencial
Até 500
R$ 0,40
Até 1000
R$ 0,65

Comercial
Até 2500
R$ 0,55
Até 5000
R$ 0,60

Industrial
Até 10000
R$ 0,55
Até 15000
R$ 0,60
.""")
quantidade_kwh = int(input("Qual é a quantidade de KWh consumida?"))
tipo_instalacao = input("Qual é o tipo de intalação? Digite R para residencial, I para industrial e C para comercial.")
if quantidade_kwh <= 500 and tipo_instalacao == "R":
    total_pagar = quantidade_kwh * 0.4
    print("O preço a pagar pelo fornecimento de energia é de:", total_pagar)
elif quantidade_kwh >500 and quantidade_kwh <= 1000 and tipo_instalacao == "R":
    total_pagar = quantidade_kwh * 0.65
    print("O preço a pagar pelo fornecimento de energia é de:", total_pagar)
elif quantidade_kwh >1000 and quantidade_kwh <= 2500 and  tipo_instalacao == "C":
    total_pagar = quantidade_kwh * 0.55
    print("O preço a pagar pelo fornecimento de energia é de:", total_pagar)
elif quantidade_kwh >2500 and quantidade_kwh <= 5000  and tipo_instalacao == "C":
    total_pagar = quantidade_kwh * 0.6
    print ("O preço a pagar pelo fornecimento de energia é de:", total_pagar)
elif  quantidade_kwh > 5000 and quantidade_kwh <= 10000 and tipo_instalacao == "I":
    total_pagar = quantidade_kwh * 0.55
elif quantidade_kwh >10000 and quantidade_kwh <= 15000 and tipo_instalacao == "I":
    total_pagar = quantidade_kwh * 0.6
    print ("O preço a pagar pelo fornecimento de energia é de:", total_pagar)
else:
    print("Erro!!!")
