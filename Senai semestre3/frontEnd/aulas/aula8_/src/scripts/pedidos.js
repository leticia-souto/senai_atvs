document.addEventListener("DOMContentLoaded", function(){
    RenderizarPedidos()
})

function RenderizarPedidos() {
  const lista = document.querySelector("#lista-pedidos")
  const spanTotal = document.querySelector("#valor-total")
  const spanResumo = document.querySelector("#valor-total-resumos")
  const spanContador = document.querySelector("#contador-itens")

  if (lista) return;

  const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")

  if(pedidos.length === 0){
    lista.innerHTML = 
    "<li class = 'pedido-vazio'>Nenhum pedido ainda. Acesse o" + "<a href= 'index.html'> Cardápio</a> Para Adicionar! </li>"

    if(spanTotal) spanTotal.textContent = "R$ 0,00"
    if(spanResumo) spanResumo.textContent = "R$ 0,00"
    if(spanContador) spanContador.textContent = "0 itens"

  }

  lista.innerHTML = ""

  let total = 0


  // Passo 2: cria o <span> com o texto
  const textoSpan = document.createElement("span");
  textoSpan.innerHTML =

  // Passo 3: cria o botão ✕
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "✕";
  btnRemover.classList.add("btn-remover");



  btnRemover.addEventListener("click", () => {
    itemLi.remove();

    const badge = cardOrigem.querySelector(".badge-adicionado");
    if (badge) badge.remove();

    if (listaResumo.children.length === 0) {
      secaoResumo.style.display = "none";
    }
  });

  
  itemLi.appendChild(textoSpan);
  itemLi.appendChild(btnRemover);
  listaResumo.appendChild(itemLi);
}