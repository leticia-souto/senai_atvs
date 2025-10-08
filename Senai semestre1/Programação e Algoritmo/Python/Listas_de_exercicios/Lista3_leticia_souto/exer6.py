# -*- coding: UTF -8 -*- 

print('Esse programa irá converterr temperatura de graus celsius para fahreinheit e vice-versa') 

def conversao():
    tipo_conversao = input('Qual é a conversao desejada? Use C para celsius e F para fahreinheit.')
    temperatura = float(input('Digite a temperatura desejada: '))

    if tipo_conversao == 'C':
        resultado = temperatura * 1.8 + 32
        print(f'A temperatura em °F é de {resultado:.2f}')
        return

    elif tipo_conversao == 'F':
        resultado = (temperatura - 32) / 1.8
        print(f'A temperatura em °C é de {resultado:.2f}')
        return

    else:
        print('Erro!')
        return 

conversao() 
