//Exercício 1
// class Produto{
//     constructor(nome, preco, quantidade){
//     this.nome = nome;
//     this.preco = preco;
//     this.quantidade = quantidade;

// }

// calcular(){
//     return console.log(`O valor total do estoque é de ${this.preco * this.quantidade}`)
// }}

// let produto1 = new Produto ("Leite", 2,5)
// produto1.calcular()

//Exercício 2
// class Filme{
//     constructor(titulo, diretor, ano){
//     this.titulo = titulo;
//     this.diretor = diretor;
//     this.ano = ano;
//     }

// exibir(){
//     return console.log(`O filme ${this.titulo} foi lançado em ${this.ano} e dirigido por ${this.diretor}.`)
// }}

// let filme1 = new Filme("Madagascar", "Tom McGrath e Eric Darnell", 2005)
// filme1.exibir()

//Exercício 3
// class Aluno{
//     constructor(nome,nota1,nota2){
//     this.nome = nome
//     this.nota1 = nota1
//     this.nota2 = nota2
//     }

// media(){
//     return (this.nota1 + this.nota2)/2
// }

// aprovacao(){
//     if (this.media() <0 & this.media() > 10){
//         return console.log("Média inválida")
//     } else if (this.media() >= 7){
//         return console.log(`Você foi aprovado com média ${this.media()}`)
//     } else{
//         return console.log(`Você foi reprovado com média ${this.media()}`)
//     }
// }}

// let aluno1 = new Aluno("Heloisa",10,5)
// aluno1.media()
// aluno1.aprovacao()

//Exercício 4
// class Retangulo{
//     constructor(base,altura){
//     this.base = base
//     this.altura = altura
//     }
// area(){
//     return this.base * this.altura
// }

// perimetro(){
//     return (this.base * 2) + (this.altura *2)
// }

// exibir(){
//     return console.log(`A área do retângulo é ${this.area()}cm² e o perímetro é ${this.perimetro()}cm`)
// }
// }

// let retangulo1 = new Retangulo(5,10)
// retangulo1.area()
// retangulo1.perimetro()
// retangulo1.exibir()

//Exercicio 5
// class Carro{
//     constructor(marcaModelo, combustivel){
//     this.marcaModelo = marcaModelo;
//     this.combustivel = combustivel;
//     }

// abastecer(litros){
//     if (this.marcaModelo < litros + this.combustivel){
//         return console.log(`Não cabe.`)
//     } else{
//         this.combustivel += litros
//         return console.log(`Tanque abastecido, agora você tem ${this.combustivel}L.`)
//     }
// }

// dirigir(km){
//     if (this.combustivel < km/10){
//         return console.log(`Quantidade de combustível insuficiente você tem apenas ${this.combustivel}L.`)
//     } else{
//         this.combustivel -= km/10
//         return console.log(`Possível concluir a viagem, restanto apenas ${this.combustivel}L.`)
//     }
// }
// }
// let carro1 = new Carro(30, 10)
// carro1.abastecer(25)
// carro1.dirigir(5)
