//Exercicio1

//Exercicio 5
// class Produto{
//     constructor(nome, preco, estoque){
//         this.nome = nome;
//         this.preco = preco;
//         this.estoque = estoque;
//     }

// vender(quantidade){
//     return console.log(`O novo estoque de ${this.nome} é de ${this.estoque -= quantidade}.`)

// } 
// }

// produto1 = new Produto("Maça", 2, 40)
// produto1.vender(10)


//Exercicio 6
// class ContaEnergia{
//     constructor(consumoKwh, valorPorKwh){
//         this.consumoKwh = consumoKwh;
//         this.valorPorKwh = valorPorKwh;
//     }

// conta(){
//     return this.consumoKwh * this.valorPorKwh
// }
// }

// let contaEnergia1 = new ContaEnergia(160, 2)
// console.log(`O valor da conta foi de R$${contaEnergia1.conta()}`)


//Exercico 7
// class Aluno{
//     constructor(nota1, nota2, nota3){
//         this.nota1 = nota1;
//         this.nota2 = nota2;
//         this.nota3 = nota3;
//     }

// media(){
//     return (this.nota1 + this.nota2 + this.nota3)/3
// }

// aprovado(){
//     if(this.media() <0 && this.media >10){
//         console.log("Nota inválida!")
//     }else if (this.media() >= 7 && this.media() <=10){
//         console.log(`Aluno aprovado com média ${this.media().toFixed(2)}`)
//     }else{
//         console.log(`Aluno reprovado com média ${this.media().toFixed(2)}`)
//     }
// }
// }

// let aluno1 = new Aluno (10,5,7);
// aluno1.media();
// aluno1.aprovado()


//Exercicio 8
// class Cinema{
//     constructor(nome, capacidade, ingressosVendidos){
//         this.nome = nome;
//         this.capacidade = capacidade;
//         this.ingressosVendidos = ingressosVendidos;
//     }

// venderIngressos(qtd){
//     let vendidos = this.capacidade -= this.ingressosVendidos
//     if (qtd > vendidos){
//         console.log(`Não há lugares disponíveis, tente outra quantidade.`)
//     }else{
//         return console.log(`${qtd} ingressos foram comprados para a sessão ${this.nome}, restam ${this.capacidade - qtd} lugares.`)
//     }
// }
// }

// let cinema1 = new Cinema(`Madagascar`, 50, 20);
// cinema1.venderIngressos(5)


//Exercico 9
// class Biblioteca{
//     constructor(){
//         this.titulo = []
//     }

// adicionarLivro(livro){
//     return this.titulo.push(livro)
// }

// removerLivro(livro){
//     return this.titulo.pop(livro)
// }

// listarLivros(){
//     return this.titulo
// }}

// let biblioteca1 = new Biblioteca()
// biblioteca1.adicionarLivro(`É Assim que acaba`)
// console.log(biblioteca1.listarLivros())
// biblioteca1.removerLivro(`É Assim que acaba`)


//Exercicio 10
// class Cofrinho{
//     #valorNotas
//     #valorMoedas

// constructor(valorMoedas, valorNotas){
//     this.#valorMoedas = valorMoedas;
//     this.#valorNotas = valorNotas;
// }

// depositar(valorNotas, valorMoedas){
//     this.#valorNotas += valorNotas
//     this.#valorMoedas += valorMoedas
// }

// retirar(valorMoedas, valorNotas){
//     this.#valorMoedas -= valorMoedas
//     this.#valorNotas -= valorNotas
// }

// exibirSaldo(){
//     return this.#valorMoedas +this.#valorNotas
// }
// }

// let cofrinho1 = new Cofrinho(100, 20)
// cofrinho1.depositar(50,20)
// cofrinho1.retirar(10,10)
// console.log(`Você possui R$${cofrinho1.exibirSaldo()} em seu cofrinho. `)


//Exercicio 11 - NÃO ENTENDI COMO FAZER
// class Banco{
//     #numero
//     #titular
//     #saldo

//     constructor(numero, titular, saldo){
//         this.#numero = numero;
//         this.#titular = titular;
//         this.#saldo = saldo;
//     }

// abrirConta(nomeTitular, saldoInicial){
//     nomeTitular = this.#titular
//     saldoInicial = this.#saldo
    
// }
// }



//Exercicio 12 - Não sei fazer
class Pedido{
    #itens = []


}




//Exercicio 13
// class UsuarioSenha{
//     #login
//     #senha

// constructor(login, senha){
//     this.#login = login;
//     this.#senha = senha;
// }

// autenticar(login, senha){
//     if(this.#login == login && this.#senha == senha){
//         return console.log("Autenticação completa.")
//     }else{
//         return console.log("Login ou senha incorreto.")
//     }
// }

// alterarSenha(senhaAntiga, senhaNova){
//     if(senhaAntiga == this.#senha){
//         return console.log(`Mudança de senha concluída com sucesso, agora sua senha é ${senhaNova}`)
//     }else{
//         return console.log('Senha Antiga incorreta, tente novamente.')
//     }
// }
// }

// let usuarioSenha1 = new UsuarioSenha("Heloisa", 1234)
// usuarioSenha1.autenticar("Leticia", 1234);
// usuarioSenha1.alterarSenha(1234, 12345)


//Exercicio 14
// class Funcionario{
//     constructor(nome, salarioBase){{
//         this.nome = nome;
//         this.salarioBase = salarioBase;
//     }}
// }

// class FuncionarioCLT extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }

// salarioLiquido(){
//     let desconto = this.salarioBase  * 5 / 100;
//     let comissao = this.salarioBase * 10 / 100;
//     return (this.salarioBase + comissao) - desconto
// }
// }

// class FuncionarioPJ extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }

// salarioLiquido(){
//     return this.salarioBase
// }
// }

// class Estagiario extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }

// salarioLiquido(){
//     return this.salarioBase - (this.salarioBase * 5 / 100)
// }
// }

// let funcionario1 = new FuncionarioCLT("Leticia", 1000)
// console.log(`Salário do CLT: ${funcionario1.salarioLiquido()}`)

// let funcionario2 = new FuncionarioPJ("Letícia", 1000)
// console.log(`Salário do PJ: ${funcionario2.salarioLiquido()}`)

// let funcionario3 = new Estagiario("Letícia", 1000)
// console.log(`Salário do Estagiário: ${funcionario3.salarioLiquido()}`)



//Exercicio 15 - NÃO ACABEI
// class Investimento{

// calcularRendimento(valor, meses){
//     return valor * meses
// }
// }

// class RendaFixa extends Investimento{
    
// calcularRendimento(valor, meses){
//     let lucro = valor + (valor * 0.007 * meses)
//     return lucro
// }
// }

// class CDB extends Investimento{

// calcularRendimento(valor, meses){
//     let lucro = valor + (valor * 0.001 * meses)
//     let total = lucro - (lucro * 0.15)
//     return total
// }
// }

// let investimento1 = new RendaFixa()
// console.log(`O valor de rendido da Renda Fixa foi de R$${investimento1.calcularRendimento(1000, 6)}`)

// let investimento2 = new CDB()
// console.log(`O valor rendido de CDB foi de R$${investimento2.calcularRendimento(1000, 6)}`)



//Exercicio 16
// class Imposto{

// calcular(valor){
//     return valor
// }
// }

// class ICMS extends Imposto{
//     calcular(valor){
//         return valor - (valor * 18 / 100);
//     }
// }

// class ISS extends Imposto{
//     calcular(valor){
//         return valor - (valor * 5 / 100)
//     }
// }

// class IRPF extends Imposto{
//     calcular(valor){
//         if(valor < 2000){
//             return console.log("Isento de IRPF!")
//         } else if(valor > 2000 && valor <= 5000){
//             return valor - (valor * 15 /100)
//         } else{
//             return valor - (valor * 27.5 / 100)
//         }
//     }
// }

// let imposto1 = new ICMS()
// console.log(`O valor do imposto ICMS é de R$${imposto1.calcular(1000)}`)

// let imposto2 = new ISS()
// console.log(`O valor do imposto ISS é de R$${imposto2.calcular(2000)}`)

// let imposto3 = new IRPF()
// console.log(`O valor do imposto IRPF é de R$${imposto3.calcular(5000)}`)



//Exercico 17 - NÃO ACABEI
// class AplicacaoFinanceira{

// simular(valor,meses){
//     return valor * meses
// }
// }

// class Poupanca extends AplicacaoFinanceira{
    
// simular(valor, meses){
//     return valor + (valor * 0.006 * meses)
// }
// }

// class TesouroDireto extends AplicacaoFinanceira{

// simular(valor, meses){
//     let lucro = valor +(valor * 0.008 * meses)
//     let total = lucro - (lucro * 0.10)
//     return total
// }
// }

// class Criptomoeda extends AplicacaoFinanceira{

// simular(valor, meses){

// }
// }

// let aplicacao1 = new Poupanca()
// console.log(`Poupança: R$${aplicacao1.simular(2000, 6)}`)

// let aplicacao2 = new TesouroDireto()
// console.log(`Tesouro Direto: R$${aplicacao2.simular(2000, 6)}`)
