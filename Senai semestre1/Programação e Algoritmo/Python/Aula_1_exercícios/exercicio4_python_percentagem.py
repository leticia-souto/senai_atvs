# -*- coding: UTF - 8
print ("Digite o seu salário e a porcentagem de seu aumento que te informarei de quanto foi seu aumento e o valor do seu salário atual")
valor1 =float(input("Digite o valor do seu salário"))
valor2 = float(input("Digite a porcentagem de aumento"))
porcen = float(valor1 * valor2) / 100
print ("O valor de aumento foi de:", porcen)
aumen =float(valor1 + porcen)
print("O valor do seu salário atual é de:", aumen)
