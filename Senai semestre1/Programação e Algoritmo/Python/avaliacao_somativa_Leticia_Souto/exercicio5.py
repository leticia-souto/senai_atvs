"""
Cálculo de Conta de Restaurante com Desconto
Descrição:
Escreva um programa que solicite o preço de 5 pratos e calcule o total da conta. Se o total for maior que R$200, aplique um desconto de 5% e exiba o valor final.

Entrada:
Cinco números reais representando os preços dos pratos.

Saída:
O valor total da conta, com o desconto aplicado se necessário.
"""

# -*- coding: UTF -8 -*-

print("Esse programa irá mostrar o valor total da compra de 5 pratos, caso o resultado for maior que R$ 200,00 será aplicado um desconto de 5%")

prato1 = float(input("Digite o valor do primeiro prato:"))
prato2 = float(input("Digite o valor do segundo prato:"))
prato3 = float(input("Digite o valor do terceiro prato:"))
prato4 = float(input("Digite o valor do quarto prato:"))
prato5 = float(input("Digite o valor do quinto prato:"))

soma = prato1 + prato2 + prato3 + prato4 + prato5

if soma > 200:
    desconto = soma - (soma * 5 / 100)
    print(f"O valor da conta foi R${desconto} ,com desconto!")

else:
    print(f"O valor da conta foi de R$ {soma} ,não teve desconto! :(")
        

        
    





