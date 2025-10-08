# -*- coding: UTF-8 -*-
print("""Digite dois números que eu informarei a soma deles.
caso esse número seja maior que 20 irei somá-lo com 8 e se for menor que 20 subtrairei 5""")
valor1 = float(input("Digite o primeiro número"))
valor2 = float(input("Digite o segundo valor"))
resultado = valor1 + valor2

if resultado <= 20:
    print("A soma é igual a:", resultado - 5)
else:
    print("A soma é igual a:" , resultado + 8)
