//ORIENTACAO A OBJETO
class Prato {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria
    }

    formatarPreco() {
        return `R$ ${this.preco.toFixed(2).replace(".", ",")}`
    }

    aplicarDesconto(percentual) {
        this.preco = this.preco * (1 - percentual / 100)
    }
} // fim da classe

const cardapio = [
    new Prato("Feijoada completo", 42.90, "prato principal"),
    new Prato("Moqueca de Peixe", 58.00, "Prato Principal"),
    new Prato("Coxinha artesanal", 8.50, "petisco"),
    new Prato("Brigadeiro Gourmet", 6.00, "sobremesa"),
    new Prato("Suco de Maracujá", 12.00, "Bebidas")
]

console.log("=== Pratos Criados ===")
cardapio.forEach(p => {
    console.log(`${p.nome} -> ${p.formatarPreco()}`)
})


//DOM
const containerCardapio = document.querySelector("#cardapio")

function criarCardPrato(prato) {
    const card = document.createElement("div")
    card.className = 'card'

    card.innerHTML = `
        <h3>${prato.nome}</h3>
        <span class="categoria">${prato.categoria}</span>
        <div class="preco">${prato.formatarPreco()}</div>
        `

    card.addEventListener('click', () => {
        alert(
            `🍽️ ${prato.nome} \n\n` +
            `Categoria: ${prato.categoria} \n` +
            `💵Preço: ${prato.formatarPreco()}`,

        )
    })
    return card
} // fim função criarCardPrato()


function renderizarCardapio(){
    containerCardapio.innerHTML = ""

    cardapio.forEach(prato => {
        const card = criarCardPrato(prato)

        containerCardapio.appendChild(card)

    })
}
renderizarCardapio()

cardapio[0].aplicarDesconto(20)

renderizarCardapio()



class Bebida {
    constructor(nome, preco, volume) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume
    }

    emLitros(){
        this.volume = this.volume / 1000
        return`${this.volume.toFixed(2).replace(".",",")}L`
    }

    descricao() {
        return `${this.nome} - ${this.volume}ml - R$ ${this.preco.toFixed(2).replace(".", ",")}`
    }

    
} // fim da classe

const bebida = [
    new Bebida("Suco de Uva", 12.00, 350),
    new Bebida ("Caldo de Cana", 15.00, 500 )
]

console.log("=== Bebidas Criadas ===")
bebida.forEach(b => {
    console.log(`${b.descricao()} -> ${b.emLitros()}`)
    
})
