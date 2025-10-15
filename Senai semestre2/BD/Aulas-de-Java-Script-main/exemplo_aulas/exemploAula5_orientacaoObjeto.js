// class ContaBancaria{
// 	#saldo
// 	numeroConta
	
// 	constructor(saldo, numeroConta){
// 		this.#saldo = saldo
// 		this.numeroConta = numeroConta
// 	}
	
// 	get getSaldo() {return this.#saldo}


// 	}

//     let conta1 = new ContaBancaria(1250, "R2D2")

//     console.log(conta1.numeroConta)
//     console.log(conta1.getSaldo)


// class ContaBancaria{
// 	#saldo
// 	numeroConta
	
// 	constructor(saldo, numeroConta){
// 		this.#saldo = saldo
// 		this.numeroConta = numeroConta
// 	}
	
// 	get getSaldo() {return this.#saldo}

//     set setSaldo(value) {
// 	return this.#saldo = value
// }


// 	}

    // let conta1 = new ContaBancaria(1250, "R2D2")

    // console.log(`saldo get: ${conta1.getSaldo}`)

    // conta1.setSaldo = 150
    // console.log(`saldo alterado pelo set:${conta1.getSaldo}`)

// class ContaBancaria{
// 	#saldo
// 	numeroConta
	
// 	constructor(saldo, numeroConta){
// 		this.#saldo = saldo
// 		this.numeroConta = numeroConta
// 	}
	
// 	get getSaldo() {return this.#saldo}

//     set setSaldo(value) {
// 	return this.#saldo = value
// }


	

// set setSaldo(value) {
//     if(value != null && value > 0){
//         this.#saldo = value
//     } else{
//         console.log(`saldo inválido`)
//     }
// }}

//     let conta1 = new ContaBancaria(1250, "R2D2")

    
//     console.log(conta1.numeroConta)
//     console.log(conta1.getSaldo)

//     conta1.setSaldo = 5000
//     console.log(conta1.getSaldo)



//EXEMPLO 2

// class Animal {
//     fazerSom(){
//         console.log(`emite um som genérico.`)
//     }
// }

// class Cachorro extends Animal{
//     fazerSom(){
//         console.log(`auau`)
//     }

// }

// let animal = new Animal();
// animal.fazerSom()

// let cachorro = new Cachorro();
// cachorro.fazerSom()



//Super classe pai e super filha

class Animal {
    nome
    constructor(nome){
        this.nome = nome
    }
    }

class Cachorro extends Animal{
    constructor(nome){
        super(nome)
    }

    fazerSom(){
        console.log(`auau`)
    }

}


let cachorro = new Cachorro(`Rex`);
console.log(`nome do cachorro é ${cachorro.nome}`)


