# -*- coding: UTF - 8
print ("Digite a quantidade de km percorridos por seu carro alugado e a quantidade de dias do aluguel que eu informarei o preço a pagar em reais.")
km = float(input("Digite a quantidade de km percorridos"))
km1 = km * 0.15
dias1 = int(input("Digite a quantidade de dias alugados"))
dias2 = dias1 * 60
prec = km1 + dias2
print ("O preço total a pagar é de: %.2f" %prec)
