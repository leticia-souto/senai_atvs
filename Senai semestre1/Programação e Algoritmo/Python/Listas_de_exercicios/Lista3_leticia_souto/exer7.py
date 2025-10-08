# -*- coding: UTF – 8 -*- 

print("Esse programa irá executar o cálculo entre dois números de sua preferencia e com a operacao de sua preferencia, soma, subtracao, divisao, multiplicacao.") 

operacao = input("Insira a operaçao que deseja (/ para divisão, + para adição, - para subtração e * para multiplicação):") 

 
def soma():
    valor1 = float(input("Digite o primeiro valor: "))
    valor2 = float(input("Digite o segundo valor: "))
    return (valor1 + valor2) 

 
def subtracao():
    valor1 = float(input("Digite o primeiro valor: "))
    valor2 = float(input("Digite o segundo valor: "))
    return (valor1-valor2) 

 
def divisao():
    valor1 = float(input("Digite o primeiro valor: "))
    valor2 = float(input("Digite o segundo valor: "))
    return (valor1 / valor2) 

 
def multiplicacao():
    valor1 = float(input("Digite o primeiro valor: "))
    valor2 = float(input("Digite o segundo valor: "))
    return (valor1 * valor2) 

if operacao == "+":
    print(soma()) 

elif operacao == "-":
    print(subtracao()) 

elif operacao == "/":
    print(divisao())  

elif operacao == "*":
    print(multiplicacao()) 

else:
    print("ERRO!!!") 
