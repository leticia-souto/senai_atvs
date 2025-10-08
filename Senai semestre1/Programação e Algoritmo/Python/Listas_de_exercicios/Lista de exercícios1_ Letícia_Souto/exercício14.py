# -*- coding: UTF -8 -*- 

print("Me informe o valor do produto que direi o novo valor com o lucro. Sendo o valor menor que R$ 20,00 com lucro de 45% e valor maior que R$ 20,00 com lucro de 30%") 

valor_produto = float(input("Qual o valor do produto?"))  

if valor_produto > 20:
    lucro30 = (valor_produto * 30 / 100) + valor_produto 
    print("O novo valor de venda para o produto é de:", lucro30) 

else:
    lucro45 = (valor_produto * 45 / 100) + valor_produto
    print("O novo valor de venda para o produto é de:", lucro45) 
