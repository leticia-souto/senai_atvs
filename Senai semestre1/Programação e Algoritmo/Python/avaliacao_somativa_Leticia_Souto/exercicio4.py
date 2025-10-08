"""
Cálculo de Desconto em Compra
Descrição:
Escreva um programa que receba o valor de uma compra e calcule um desconto de 10% se o valor for superior a R$100. Exiba o valor final da compra.

Entrada:
Um número real representando o valor da compra.
Saída:
O valor final da compra, com o desconto aplicado se necessário.
"""

# -*- coding: UTF -8 -*-

print("""
Esse programa irá receber o valor de uma compra e calcular o valor de desconto (10%) caso a compra seja superior a R$ 100,00
""")

def compra():
    valor_compra = float(input("Digite o valor total da compra: "))
    if valor_compra > 100:
        valor_desconto = valor_compra * 10 / 100
        valor_com_desconto = valor_compra - valor_desconto
        print(f"O valor final da compra é de {valor_com_desconto}!!")
    else:
        print(f"A compra ficou {valor_compra}. Não teve desconto! :(")

compra()
