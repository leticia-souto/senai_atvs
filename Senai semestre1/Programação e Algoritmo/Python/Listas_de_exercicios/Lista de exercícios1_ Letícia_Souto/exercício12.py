# -*- coding: UTF -8 -*-
print("Digite dois números inteiros que garantirei que eles fiquem em ordem crescente")

num1 = int(input("Digite o primeiro número."))
num2 = int(input("Digite o segundo número."))

if num1 > num2:
    print("A ordem crescente é de:", num2, num1)
elif num2 > num1:
    print("A ordem crescente é de:", num1, num2)
else:
    print("Os números são iguais, não é possível verificar o maior!")
