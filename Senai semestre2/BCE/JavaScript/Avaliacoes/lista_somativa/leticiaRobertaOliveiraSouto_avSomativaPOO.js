//Exercicio 1 
// const candidatos ={
//     Ana: true,
//     Bruno: false,
//     Carla: true,
//     Daniel: false
// };

// function verificarCandidato(nome,callback){
//     return validarAprovacao(nome, callback);
// }

// function validarAprovacao(nome){
//     if(candidatos[nome] = false){
//         console.log(`Candidato reprovado.`)
//     }else{
//         console.log(`Candidato aprovado para a próxima fase.`)
//     }
// }

// verificarCandidato("Ana", false, validarAprovacao)
// verificarCandidato("Bruno", true, validarAprovacao)
// verificarCandidato("Carla", true, validarAprovacao)
// verificarCandidato("Daniel", false, validarAprovacao)


//Exercio 2
// class Colaborador{
//     constructor(nome, cargo, salario){
//         this.nome = nome;
//         this.cargo = cargo;
//         this.salario = salario
//     }

// aumentarSalario(percentual){
//     let aumento = this.salario * percentual / 100
//     return this.salario + aumento
    
// }

// exibirDados(){
//     return`
//     Colaborador: ${this.nome}
//     Cargo: ${this.cargo}
//     Salario com aumento: R$${this.aumentarSalario()}
//     `
// }
// }

// let colaborador1 = new Colaborador("Leticia", "gerente de vendas", 3000)
// colaborador1.aumentarSalario(10)
// console.log(colaborador1.exibirDados())


//Exercicio 3
// class FolhaDePagamento{
//     constructor(nomeColaborador, cargo, salarioBase, diasTrabalhados){
//         this.nomeColaborador = nomeColaborador;
//         this.cargo = cargo;
//         this.salarioBase = salarioBase;
//         this.diasTrabalhados = diasTrabalhados
//     }

// calcularSalarioMensal(){
//     let salarioTotal = this.salarioBase / 30 * this.diasTrabalhados
//     return salarioTotal
// }

// resumoPagamento(){
//     return `
//     Nome colaborador:${this.nomeColaborador}
//     Cargo:${this.cargo}
//     Dias Trabalhados:${this.diasTrabalhados}
//     Valor a receber: R$${this.calcularSalarioMensal().toFixed(2)}
//     `
// }
// }

// let folhaPagamento = new FolhaDePagamento("João", "Operador de máquinas", 2000, 200)
// folhaPagamento.calcularSalarioMensal()
// console.log(folhaPagamento.resumoPagamento())


// //Exercicio 4
// class Contrato{
//     constructor(colaborador, dataInicio, tipo, salarioBase){
//         this.colaborador = colaborador;
//         this.dataInicio = dataInicio;
//         this.tipo = tipo;
//         this.salarioBase = salarioBase
//     }

// calcularSalario(){
//     return this.salarioBase
// }
// }

// class CLT extends Contrato{
//     constructor(colaborador, dataInicio, tipo, salarioBase, bonusPercentual){
//         super(colaborador, dataInicio, tipo, salarioBase)
//         this.bonusPercentual = bonusPercentual
//     }

// calcularSalario(){
//     let salario = this.salarioBase *  this.bonusPercentual / 100
//     if(this.bonusPercentual > 15){
//         console.log(`O percentual de bônus não pode ser superior a 15%.`)
//     }else{
//         return this.salarioBase + salario
//     }
// }

// detalhesContrato(){
//     return`
//     Colaborador: ${this.colaborador}
//     Data de Início: ${this.dataInicio}
//     Tipo: ${this.tipo}
//     Salario com bônus: R$${this.calcularSalario()}
//     `
// }
// }

// class Estagiario extends Contrato{
//     constructor(colaborador, dataInicio, tipo, salarioBase, horasSemanais){
//         super(colaborador, dataInicio, tipo, salarioBase)
//         this.horasSemanais = horasSemanais
//     }
    
// calcularSalario(){
//     let salarioTotal = this.salarioBase + (this.horasSemanais * 20)
//     return salarioTotal
// }

// detalhesContrato(){
//     return`
//     Colaborador: ${this.colaborador}
//     Data de Inicio: ${this.dataInicio}
//     Tipo: ${this.tipo}
//     Salario total: ${this.calcularSalario()}
//     `
// }
// } 

// let contrato1 = new CLT("João", "1 de agosto", "1 ano de contrato", 3000, 10)
// contrato1.calcularSalario()
// console.log(contrato1.detalhesContrato())

// let contrato2 = new Estagiario("Maria", "2 de janeiro", "2 anos de contrato", 2000, 5)
// contrato2.calcularSalario()
// console.log(contrato2.detalhesContrato())


//Exercico 5
// class Funcionario{
//     constructor(nome, salarioBase){
//         this.nome = nome;
//         this.salarioBase = salarioBase
//     }

// calcularSalario(){
//     return this.salarioBase
// }
// }

// class AssistenteRH extends Funcionario{
//     constructor(nome,salarioBase){
//         super(nome, salarioBase)
//     }

// calcularSalario(){
//     return this.salarioBase += (this.salarioBase * 5 / 100)
// }
// }

// class AnalistaRH extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }

// calcularSalario(){
//     return this.salarioBase += (this.salarioBase * 15 / 100)
// }
// }

// class GerenteRH extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }

// calcularSalario(){
//     return this.salarioBase += 3000
// }
// }

// const funcionarios = [
//     new GerenteRH("João", 3000),
//     new AnalistaRH("Maria", 2000),
//     new AssistenteRH("Laura", 1000),
//     new AnalistaRH("Bruno", 2000),
//     new AssistenteRH("Mario", 1000)
// ]

// for(let i = 0; i < funcionarios.length; i++){
//     let f = funcionarios[i]
//     console.log(`${f.nome} tem um salário de R$${f.calcularSalario().toFixed(2)}`)
// }


//Exercicio 6
// class BancoDeHoras{
//     #horas
//     constructor(horas, colaborador){
//         this.#horas = horas;
//         this.colaborador = colaborador
//     }

// adicionarHoras(qtd){
//     return this.#horas += qtd
// }

// retirarHoras(qtd){
//     return this.#horas -= qtd
// }

// consultarHoras(){
//     return this.#horas
// }
// }

// let bancoHoras = new BancoDeHoras(20,"Maria")
// bancoHoras.adicionarHoras(10)
// bancoHoras.retirarHoras(5)
// console.log(`O total de horas do colaborador ${bancoHoras.colaborador} foi de ${bancoHoras.consultarHoras()}.`)