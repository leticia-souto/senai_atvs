# -*- coding -8 -*-

print("Esse programa irá mostar o total de pessoas com menos de 21 anos e o total de pessoas com mais de 50 anos.")

idade_menos_21 = 0
idade_mais_50 = 0
while True:
    idade = int(input("Digite a idade ou -99 para encerrar o programa:"))
    if idade == -99:
        print("Você decidiu parar!")
        break
    elif idade >= 0 and idade <21:
        idade_menos_21 = idade_menos_21 + 1
    elif idade > 50:
        idade_mais_50 = idade_mais_50 +1
print(f"O total de pessoas com mais de 50 anos é de {idade_mais_50}.")

print(f"O total de pessoas com menos de 21 anos é de {idade_menos_21}.")
