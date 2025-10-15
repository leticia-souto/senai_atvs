//Exercicio 1
// class InstrumentoMusical{
//     tocar(){
//         console.log(`Produz um som genérico.`)
//     }
// }

// class Violao extends InstrumentoMusical{
//     tocar(){
//         console.log(`O violão faz (tananam)`)
//     }
// }

// class Piano extends InstrumentoMusical{
//     toca(){
//         console.log(`O piano faz `)
//     }
// }

// let instrumento = new Violao();
// instrumento.tocar();


//Exercicio 2
// class Funcionario{
//     constructor (nome, salario){
//         this.nome = nome
//         this.salario = salario
//     }
// }

// class Gerente extends Funcionario{
//     constructor(nome,salario, bonus){
//     super(nome, salario);
//     this.bonus = bonus

// }}

// let gerente1 = new Gerente("Heloísa", 1000, 50);
// console.log(`A gerente ${gerente1.nome} que tinha um salário de R$${gerente1.salario}, recebeu um bônus de R$${gerente1.bonus}`)


//Exercício 3
// class Veiculo{
//     constructor(marca, ano){
//         this.marca = marca;
//         this.ano = ano
//     }
// }

// class Carro extends Veiculo{
//     constructor(marca, ano, portas){
//         super(marca, ano);
//         this.portas = portas
//     }
// }

// class Moto extends Veiculo{
//     constructor(marca, ano, cilindradas){
//         super(marca, ano);
//         this.cilindradas = cilindradas
//     }
// }

// let moto1 = new Moto("Kawasaki", 2024 ,451 )
// console.log(`A moto ${moto1.marca} do ano ${moto1.ano} tem ${moto1.cilindradas}cc.`, )

//Exercicio 4
class Funcionario{
    constructor(salarioBase){
        this.salarioBase = salarioBase
    }
    calcularSalario(){
        return this.salarioBase
    }

}

class Gerente extends Funcionario{
    constructor(salarioBase){
        super(salarioBase);
    }
    calcularSalario(){      
        return this.salarioBase += (this.salario * 30 / 100)
        
    }    
}

class Desenvolvedor extends Funcionario{
    constructor(salarioBase){
        super(salarioBase);
    }
    calcularSalario(){
        return this.salarioBase += (this.salarioBase * 20 /100)
    }
}

let gerente1 = new Gerente(3000)
console.log(`O salário do gerente sofreu um aumento de 30% resultando em R$${gerente1.calcularSalario()} `)
