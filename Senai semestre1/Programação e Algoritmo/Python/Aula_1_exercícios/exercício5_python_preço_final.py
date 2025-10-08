# -*- coding: UTF - 8
print ("Digite o preço de um produto e o percentual de desconto, que eu informarei o valor do desconto e o valor final do produto")
preco = float(input("Digite o preço do produto"))
desc = float(input("Digite o percentual"))
per = (preco * desc)/100
resultado = preco - per
print ("O valor do desconto é:", per)
print ("O preço final é:", resultado)
