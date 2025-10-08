# -*- coding: UTF -8 -*-

print("Me informe alguns números que direi quantos foram entre 100 e 200 para sair digite 0")

resultado = 0
while True:
    valor = float(input("Digite um valor ou 0 para sair"))
    if valor == 0:
        print("Você decidiu parar")
        break
    if valor >= 100 and valor <= 200:
        resultado = resultado + 1
print("A quantidade de números entre 100 e 200 digitados foi de:", resultado)
