// URL da API que busca os produtos do seu backend (Node.js + MySQL)
const API_CARDAPIO_URL = "http://localhost:3000/produtos";

document.addEventListener("DOMContentLoaded", function () {
    renderizarCardapio();
    inicializarVitrine();
    atualizarContadorPedidos(); // Garante que o contador do menu inicia com o que está no localStorage
});

// Busca os produtos diretamente do seu backend na porta 3000
async function buscarProdutos() {
    const resposta = await fetch(API_CARDAPIO_URL);
    if (!resposta.ok) throw new Error("Erro ao buscar dados do servidor.");
    return await resposta.json();
}

// Renderiza a vitrine de pratos dinamicamente
async function renderizarCardapio() {
    const grid = document.querySelector("#grid-cardapio");
    if (!grid) return;

    grid.innerHTML = "<p class='loading'>Carregando cardápio...</p>";

    try {
        const respostaDeDados = await buscarProdutos();
        
        // 🔍 DEBUG: Mostra no Console do navegador exatamente o que o backend enviou
        console.log("Dados recebidos do backend:", respostaDeDados);

        // Proteção: Trata o retorno caso ele venha direto em Array ou envelopado pelo Express
        let produtos = [];
        if (Array.isArray(respostaDeDados)) {
            produtos = respostaDeDados;
        } else if (respostaDeDados && Array.isArray(respostaDeDados.produtos)) {
            produtos = respostaDeDados.produtos;
        } else if (respostaDeDados && Array.isArray(respostaDeDados.dados)) {
            produtos = respostaDeDados.dados;
        } else {
            throw new Error("O backend não retornou uma lista válida de produtos.");
        }

        grid.innerHTML = "";

        if (produtos.length === 0) {
            grid.innerHTML = "<p class='loading'>Nenhum prato cadastrado no momento.</p>";
            return;
        }

        produtos.forEach(function (produto) {
            const card = document.createElement("article");
            card.classList.add("card");
            card.setAttribute("data-id", produto.id);

            // Imagem padrão caso o prato não possua foto cadastrada em Base64
            const fotoExibir = produto.fotoBase64 || "src/images/default-plate.png";

            card.innerHTML =
                `<img src="${fotoExibir}" alt="${produto.nome}" class="card-img"/>` +
                `<h3>${produto.nome}</h3>` +
                `<p class='desc'>${produto.descricao || 'Sem descrição disponível.'}</p>` +
                `<div class='quantidade-box'>` +
                `<button class='btn-qtd btn-menos'>-</button>` +
                `<span class='qtd-valor'>1</span>` +
                `<button class='btn-qtd btn-mais'>+</button>` +
                `</div>` +
                `<span class='preco' data-preco='${produto.preco}'>` +
                `R$ ${parseFloat(produto.preco).toFixed(2).replace(".", ",")}` +
                `</span>` +
                `<button class='btn-pedido'>Pedir Agora</button>`;

            grid.appendChild(card);
        });

        // Inicializa os efeitos visuais nos novos cards injetados
        inicializarHoverCards();

    } catch (erro) {
        console.error("Erro detalhado no processamento:", erro);
        grid.innerHTML = "<p class='loading erro'>Erro ao carregar o cardápio. Verifique se o servidor backend está rodando.</p>";
    }
}

// Controla as animações de aproximação (Hover) nos cards
function inicializarHoverCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });
    });
}

// Escuta os cliques de aumentar/diminuir quantidade e o botão de Pedir
function inicializarVitrine() {
    const main = document.querySelector("main");
    if (!main) return;

    main.addEventListener("click", (event) => {
        const clicado = event.target;

        if (clicado.classList.contains("btn-menos")) {
            const box = clicado.parentElement;
            const spanQtd = box.querySelector(".qtd-valor");
            const valorAtual = Number(spanQtd.textContent);
            spanQtd.textContent = Math.max(1, valorAtual - 1);
            atualizarPrecoCard(box);
            return;
        }

        if (clicado.classList.contains("btn-mais")) {
            const box = clicado.parentElement;
            const spanQtd = box.querySelector(".qtd-valor");
            spanQtd.textContent = Number(spanQtd.textContent) + 1;
            atualizarPrecoCard(box);
            return;
        }

        if (clicado.classList.contains("btn-pedido")) {
            event.preventDefault();
            const card = clicado.parentElement;
            const produtoId = Number(card.getAttribute("data-id"));
            const quantidade = Number(card.querySelector(".qtd-valor").textContent);

            salvarPedido(produtoId, quantidade, clicado);
        }
    });
}

// Atualiza o preço exibido no card proporcionalmente à quantidade selecionada
function atualizarPrecoCard(box) {
    const card = box.parentElement;
    const spanPreco = card.querySelector(".preco");
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));
    const quantidade = Number(box.querySelector(".qtd-valor").textContent);

    const total = precoUnitario * quantidade;
    spanPreco.textContent = "R$ " + total.toFixed(2).replace(".", ",");
}

// Salva a intenção de compra temporariamente no LocalStorage do navegador
function salvarPedido(produtoId, quantidade, botao) {
    const card = botao.parentElement;
    const nome = card.querySelector("h3").textContent;
    const preco = parseFloat(card.querySelector(".preco").getAttribute("data-preco"));
    const subtotal = preco * quantidade;

    const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");

    lista.push({
        produto_id: produtoId,
        quantidade,
        nome,
        preco,
        subtotal,
    });

    localStorage.setItem("techfood_pedidos", JSON.stringify(lista));

    // Feedback visual de sucesso temporário no botão
    botao.textContent = "✓ Adicionado!";
    botao.style.backgroundColor = "#27ae60";
    botao.disabled = true;

    atualizarContadorPedidos();

    setTimeout(function () {
        botao.textContent = "Pedir Agora";
        botao.style.backgroundColor = "";
        botao.disabled = false;

        const box = card.querySelector(".quantidade-box");
        if (box) {
            box.querySelector(".qtd-valor").textContent = "1";
            atualizarPrecoCard(box);
        }
    }, 1500);
}

// Altera o número indicador (badge) no menu superior da aplicação
function atualizarContadorPedidos() {
    const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");
    const total = lista.reduce(function (acc, p) { return acc + p.quantidade; }, 0);

    const linkMenu = document.querySelector("#menu a[href='pedidos.html']");
    if (!linkMenu) return;

    let badge = linkMenu.querySelector(".badge-menu");
    if (!badge) {
        linkMenu.insertAdjacentHTML("beforeend", "<span class='badge-menu'>0</span>");
        badge = linkMenu.querySelector(".badge-menu");
    }

    badge.textContent = total;
    linkMenu.classList.add("menu-ativo");
}