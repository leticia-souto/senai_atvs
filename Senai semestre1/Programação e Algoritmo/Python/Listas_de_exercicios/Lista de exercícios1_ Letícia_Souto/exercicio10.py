# -*- coding: UTF -8 -*- 

print("Informe três valores reais que direi se é possível formal um triangulo e qual o tipo de triangulo.") 

lado1 = float(input("Qual o primeiro valor real?")) 
lado2 = float(input("Qual o segundo valor real?")) 
lado3 = float(input("Qual o terceiro valor real?")) 
nao_triangulo = lado1 + lado2
nao_triangulo2 = lado1 + lado3
nao_triangulo3 = lado2 + lado3


if lado1 > nao_triangulo3 or lado2 > nao_triangulo2 or lado3 > nao_triangulo3:
    print("Não é um triângulo.")
elif lado1 != lado2 and lado2 != lado3 and lado1 =! lado3:
    print("Esse triangulo é escaleno!") 

elif lado1 == lado2 and lado2 != lado3:
    print("Esse triagngulo é isóceles!") 

elif lado1 == lado3 and lado3 != lado2:
    print("Esse triangulo é isóceles!") 

elif lado2 == lado3 and lado3 != lado1:
    print("Esse triangulo é isóceles!") 

elif lado1 == lado2 and lado2 == lado3:
    print("Esse triangulo é equilatero!")

