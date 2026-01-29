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

class Veiculo{
    constructor(marca){
        this.marca = marca
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo){
        super(marca)
        this.modelo = modelo
    }

exibir(){
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
}
}

const carro1 = new Carro("Honda", "Civic")
carro1.exibir()