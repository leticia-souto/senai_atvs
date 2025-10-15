//Exercicio 1
// const estoque ={
//     caixa: 50,
//     palete: 10,
//     empilhadeira: 2
// };

// function verificarEstoque(produto, quantidade, callback){
//     return callback(produto, quantidade);
// }

// function validacaoEstoque(produto, quantidade){
//     if (estoque[produto] > quantidade){
//         console.log(`Pedido aprovado, estoque suficiente.`)
//     } else{
//         console.log(`Pedido negado, estoque insuficiente.`)
//     }
// }

// validacaoEstoque("caixa", 55)


//Exercicio 2
// class Produto{
//     constructor(nome, preco, quantidade){
//         this.nome = nome;
//         this.preco = preco;
//         this.quantidade = quantidade;
//     }

// valorTotal(){
//     let total = this.preco * this.quantidade
//     return total
// }

// reporEstoque(qtd){
//     let estoque = this.quantidade += qtd
//     return console.log(`Foram adicionados ${qtd} unidades ao estoque de ${this.nome}, agora há ${estoque}.`)
// }

// }

// let produto1 = new Produto("Leite", 2, 10)
// console.log(`O valor total do estoque de ${produto1.nome} é igual a R$${produto1.valorTotal()}`)
// produto1.reporEstoque(5)


//Exercicio 3
// class Pedido{
//     constructor(numeroPedido, nomeProduto, preco, quantidade){
//         this.numeroPedido = numeroPedido;
//         this.nomeProduto = nomeProduto;
//         this.preco = preco;
//         this.quantidade = quantidade;
//     }

// calcularTotal(){
//     return this.preco * this.quantidade
// }
// }

// let pedido1 = new Pedido(123, "Cola", 5, 5)
// console.log(`O pedido nº ${pedido1.numeroPedido}, contendo ${pedido1.quantidade} vezes o produto ${pedido1.nomeProduto} resulta em R$${pedido1.calcularTotal()}`)


//Exercicio 4
// class Veiculo{
//     constructor(placa, capacidade){
//         this.placa = placa;
//         this.capacidade = capacidade;
//     }
// }

// class Caminhao extends Veiculo{
//     constructor(placa, capacidade, eixo, motorista){
//         super(placa, capacidade)
//         this.eixo = eixo;
//         this.motorista = motorista
//     }

// podeTransportar(carga){
//     let capacidadeTotal = this.eixo * this.capacidade
//     if(carga > capacidadeTotal){
//         console.log(`Não é possível realizar a viagem, carga muito pesada.`)
//     }else{
//         console.log(`Possível realizar a viagem, o caminhão suporta ${capacidadeTotal}kg, a carga tem apenas ${carga}kg.`)
//     }
// }
// }

// class Van extends Veiculo{
//     constructor(placa, capacidade, motorista){
//         super(placa, capacidade)
//         this.motorista = motorista;
//     }

// podeTransportar(carga){
//     if(carga > this.capacidade){
//         console.log(`Impossível realizar a viagem, a carga é mais pesada que a capacidade da van.`)
//     }else{
//         console.log(`Possível realizar a viagem, a van suporta ${this.capacidade}kg, a carga tem ${carga}kg.`)
//     }
// }
// }

// let veiculo1 = new Caminhao("BJL4490", 8000, 2, "Mariano")
// veiculo1.podeTransportar(1000)

// let veiculo2 = new Van("LJB9044", 5000, "Rosiano")
// veiculo2.podeTransportar(6000)


//Exercicio 5
// class Funcionario{
//     constructor(nome, salarioBase){
//         this.nome = nome;
//         this.salarioBase = salarioBase;
//     }

// calcularSalario(){
//     return this.salarioBase
// }
// }

// class OperadorDeEmpilhadeira extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }

// calcularSalario(){
//     let total = this.salarioBase + (this.salarioBase * 0.10)
//     return total
// }
// }

// class GerenteDeLogistica extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }

// calcularSalario(){
//     let total = this.salarioBase + 2000
//     return total
// }
// }

// let funcionario1 = new OperadorDeEmpilhadeira("Joana", 4000)
// console.log(`A operadora de empilhadera ${funcionario1.nome} tem o salário mensal no valor de R$${funcionario1.calcularSalario()}`)

// let funcionario2 = new GerenteDeLogistica("Laísa", 5000)
// console.log(`A gerente de logística ${funcionario2.nome} tem o salário mensal de R$${funcionario2.calcularSalario()}`)


//Exercico 6
// class Almoxarifado{
//     #quantidade
//     nomeProduto
    
//     constructor(quantidade, nomeProduto){
//         this.#quantidade = quantidade;
//         this.nomeProduto = nomeProduto;

//     }

// adicionarProduto(qtd){
//     if(qtd != null && qtd > 0){
//         this.#quantidade = this.#quantidade + qtd
//         console.log(`${this.nomeProduto} Adicionadas.`)
//     }else{
//         console.log(`Não é possível adicionar essa quantidade de ${this.nomeProduto}.`)
//     }
// }

// retirarProduto(qtd){
//     if(qtd != null && qtd <= this.#quantidade){
//         this.#quantidade = this.#quantidade - qtd
//         console.log(`${this.nomeProduto} retiradas.`)
//     }else{
//         console.log(`Não é possível retirar essa quantidade de ${this.nomeProduto}.`)
//     }
// }

// consultarEstoque(){
//     return console.log(`Há ${this.#quantidade} unidade de ${this.nomeProduto} no estoque.`)
    
// }

// }

// let almoxarifado1 = new Almoxarifado(20, "Bolas de vôlei")
// almoxarifado1.adicionarProduto(20)
// almoxarifado1.retirarProduto(10)
// almoxarifado1.consultarEstoque()

