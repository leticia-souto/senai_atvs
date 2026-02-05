//Exercicio1
/*
Crie uma classe chamada pessoa que possua:
-idade
-nome
Crie um método apresentar() que exiba no console o nome e idade da pessoa
*/


// class Pessoa {
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }

// apresentar(){
//     console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
// }
// }

// const pessoa1 = new Pessoa(Moniquinha, 16)
// pessoa1.apresentar()


//Exercicio2
/*
Classe Simples (Produto)

Crie uma classe Produto com:
-nome
-preco

Crie um método mostrarPreco() que exiba:
o nome do produto e seu preço.
*/

// class Produto{
//     constructor(nome, preco){
//         this.nome = nome
//         this.preco = preco
//     }

// mostrarPreco(){
//     console.log(`Produto: ${this.nome}, preço: R$${this.preco}`)
// }
// }

// const produto1 = new Produto("Bananinha da Moniquinha", 5 )
// produto1.mostrarPreco()


//Exercicio 3
/*
Crie uma clase Funcionario com:
-nome

Crie uma classe Gerente que herda de Funcionario e possui:
-setor

Crie um método que exiba o nomr e o setor do gerente.
*/

// class Funcionario{
//     constructor(nome){
//         this.nome = nome
//     }
// }

// class Gerente extends Funcionario{
//     constructor(nome, setor){
//         super(nome)
//         this.setor = setor
//     }


// mostrarDados(){
//     console.log(`Nome: ${this.nome}, Sertor: ${this.setor}`)
// }
// }

// const gerente1 = new Gerente("Moniquinha", "RH")
// gerente1.mostrarDados()



/*
Exericio 4 - Herança

Crie uma classe Veiculo com:
-marca

Crie uma classe Carro que herda de Veiculo e possui:
-modelo

Crie um método que exiba a marca e o modelo do carro.
*/

// class Veiculo{
//     constructor(marca){
//         this.marca = marca
//     }
// }

// class Carro extends Veiculo{
//     constructor(marca, modelo){
//         super(marca)
//         this.modelo = modelo
//     }

// exibir(){
//     console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
// }
// }

// const carro1 = new Carro("Honda", "Civic")
// carro1.exibir()



/*
Exercicio 5- Encapsulamento

Crie uma classe Conta onde:
- o saldo seja um atributo privado
-exista um método depositar(valor)
- exista um método mostrarSaldo()
*/

// class Conta{
//     #saldo

//     constructor(){
//         this.#saldo = 0
//     }

// depositar(valor){
//     if(valor <= 0){
//         console.log(`Valor Inválido!!`)
//     } else{
//         this.#saldo += valor
//     }   
// }

// mostrarSaldo(){
//     console.log(`O saldo disponível na conta é de ${this.#saldo}`)
// }
// }

// const conta1 = new Conta()
// conta1.depositar(0)
// conta1.mostrarSaldo()
// conta1.depositar(200)
// conta1.mostrarSaldo()



/*
Exercício 6- Encapsulamento

Crie uma classe Aluno onde:
-a nota seja um atributo privado
- exista um método definirNota(nota)
- exista um método mostrarNota()
*/

// class Aluno{
//     #nota
//     constructor(){
//         this.#nota = 0
//     }

// definirNota(nota){
//     if(nota < 0 || nota > 10){
//         console.log(`Nota Inválida!`)
//         this.#nota = -1
//     } else{
//         this.#nota = nota
//     }  
// }

// mostrarNota(){
//     if(this.#nota == -1 ){
//         console.log(`Nenhuma nota foi determinada ao aluno.`)
//     } else{
//         console.log(`A nota determinada ao Aluno é de ${this.#nota.toFixed(2)}`)
//     }  
// }
// }

// const aluno1 = new Aluno()
// aluno1.definirNota(8)
// aluno1.mostrarNota()