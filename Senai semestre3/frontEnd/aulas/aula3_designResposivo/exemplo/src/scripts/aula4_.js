class Prato{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco
    }

    exibirEmReais(total){
        return "R$" + total.toFixed(2)
    }
}

const lasanha = new Prato("Lasanha Bolonhesa", 45.00)


alert('Seja Bem-Vindo ao restaurante Sabor & Saber')

console.log('Teste')

const cliente = prompt('Seja Bem-Vindo, cliente! Para um atendimento personalizado, digite seu nome:')

let nomeFormatado = cliente.trim().toUpperCase()

alert(`Olá ${nomeFormatado}!!`)

const horaAgora = new Date()

const hora = horaAgora.getHours()

if(hora < 11){
    alert(`Bom Dia, ${nomeFormatado}, aproveite as delícias do café da manhã!`)
    console.log('Antes das 11.')
} else{
    alert(`Boa Tarde, ${nomeFormatado}, aproveite as iguarias do alomoço!`)
    console.log('Depois das 11.')
}



const querPrato = confirm(`Fala meu bom homem, ${nomeFormatado}, deseja um prato?`)

if(querPrato){
    let quantidade = prompt('Hoje temos Lasanha a Bolonhesa, quantas gostaria?')
    let total = lasanha.preco * quantidade
    //alert(total)
    alert(`Bacana, o seu total de ${lasanha.nome} é de ${lasanha.exibirEmReais(total)}`)

} else{
    alert('Ok, obrigado pela visita, volte sempre!')
}