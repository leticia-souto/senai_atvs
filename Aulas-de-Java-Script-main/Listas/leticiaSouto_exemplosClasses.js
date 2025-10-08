//Classe Abstrata
// class Funcionario{
//     constructor(nome, salarioBase){
//         if (new.target == Funcionario){
//             throw new Error("Erro: A classe Funcionario não pode ser instanciada. Use outra.")   
//         }
//         this.nome = nome;
//         this.salarioBase = salarioBase
//     }
//     calcularSalarioLiquido(){
//         throw new Error("Método ´calcularSalarioLiquido´ precisa ser implementado.")
//     }
// }

// class Vendedor extends Funcionario{
//     constructor(nome, salarioBase, comissao){
//         super(nome, salarioBase);
//         this.comissao = comissao;
//     }

//     calcularSalarioLiquido(){
//         return console.log(`O salário de ${this.nome} é igual a R$${this.salarioBase + this.comissao}`)
//     }
// }

// const vendedor1 = new Vendedor("Ana", 2500, 500);
// vendedor1.calcularSalarioLiquido()


//Classe Interna
// class Carro{
//     constructor(marca){
//         this.marca = marca;

//         this.Motor = class Motor{
//             ligar(){
//                 console.log("O motor está ligado.")
//             }
//         }
//     }
// }

// const meuCarro = new Carro("Toyota");
// const motorDoCarro = new meuCarro.Motor();
// console.log(`Carro da marca ${meuCarro.marca}`);
// motorDoCarro.ligar()


//Classe Anonima
const nomeDoItem = "Boné Edição Limitada";
const precoOriginal = 29.5;
const descontoFixo = 5.0;

const cupomUnico = new class{
    constructor(preco, desconto){
        this.preco = preco;
        this.desconto = desconto;
    }

aplicarDesconto(){
    return this.preco - this.desconto;
}

mostrarResultado(item){
    const precoFinal = this.aplicarDesconto();

    console.log("--- Processamento de cupom---");
    console.log(`Item: ${item}`);
    console.log(`Preço original: R$${this.preco}`);
    console.log(`Desconto Aplicado: R$${this.desconto}`)
    console.log(`Preço Final: R$${precoFinal}`);
}
} (precoOriginal, descontoFixo)

console.log("Sistema da Loja iniciando...");
cupomUnico.mostrarResultado(nomeDoItem);