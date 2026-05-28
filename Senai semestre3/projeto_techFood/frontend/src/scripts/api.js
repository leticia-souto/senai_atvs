const BASE_URL = "http://localhost:3000"

//1. buscar produtos
async function buscarProdutos() {
    //realizar conexão (Espera até receber respostas)
    const response = await fetch(`${BASE_URL}/produtos`)

    const dados = await response.json()

    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)

    return dados.dados
}

//2. Criar Pedido
async function criarPedido(cliente, itens) {
    //solicita comunicação e execulta o método post (publica o cliente e os itens do pedido)
    const response = await fetch(`${BASE_URL}/pedidos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cliente, itens })
    })

    const dados = await response.json()

    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)

    return dados
}

//3. Buscar pedidos - (foco para a cozinha e ter acesso aos pedidos)
async function buscarPedidos() {
    const response = await fetch(`${BASE_URL}/pedidos`)

    const dados = await response.json()

    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)

    return dados
}

//4. Deletar pedido
async function deletarPedido(id) {
    //chamamos o método DELETE (apagar do banco de pedidos)
    const response = await fetch(`${BASE_URL}/pedidos/${id}`, {
        method: "DELETE",

    })

    const dados = await response.json()

    if(response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    
    return dados
}

//5. Atualizar status do pedido
async function atualizarStatusPedido(id, atualizaStatus) {
    const response = await fetch(`${BASE_URL}/pedidos/${id}/status,`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({atualizaStatus: novoStatus}),
    })

    const dados = await response.json()

    if(!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)

    return dados
}