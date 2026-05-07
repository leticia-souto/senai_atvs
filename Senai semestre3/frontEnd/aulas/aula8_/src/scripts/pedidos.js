document.addEventListener("DOMContentLoaded", function () {
  RenderizarPedidos()
})

function RenderizarPedidos() {
  const lista = document.querySelector("#lista-pedidos")
  const spanTotal = document.querySelector("#valor-total")
  const spanResumo = document.querySelector("#valor-total-resumos")
  const spanContador = document.querySelector("#contador-itens")

  if (lista) return;

  const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")

  if (pedidos.length === 0) {
    lista.innerHTML =
      "<li class = 'pedido-vazio'>Nenhum pedido ainda. Acesse o" + "<a href= 'index.html'> Cardápio</a> Para Adicionar! </li>"

    if (spanTotal) spanTotal.textContent = "R$ 0,00"
    if (spanResumo) spanResumo.textContent = "R$ 0,00"
    if (spanContador) spanContador.textContent = "0 itens"

  }

  lista.innerHTML = ""

  let total = 0

  pedidos.forEach(function (pedido, indice) {

    const li = document.createElement("li")
    li.classList.add("item-pedido")


    //informações - TEXTO
    const textoSpan = document.createElement("span");
    textoSpan.innerHTML = "<strong>" + pedidos.nome + "</strong>"
      + "-" + pedidos.qtd + "x" + "R$"
      + pedidos.preco.toFixed(2).replace(".", ",")
      + "<span class = 'subtotal-item'> R$" + pedidos.subtotal.toFixed(2).replace(".", ",")
    z
    // botão p remover prato
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "✕";
    btnRemover.classList.add("btn-remover"); z


    //alterar - mudou
    btnRemover.addEventListener("click", () => {
      const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")

      lista.splice(indice, 1)
      localStorage.setItem("techfood_pedidos")
      RenderizarPedidos()

    }); // fim btn remover
    li.appendChild(textoSpan);
    li.appendChild(btnRemover);
    lista.appendChild(li);

    total += pedido.subtotal

    //mais um trecho
    const totalFmt = "R$" + total.toFixed(2).replace(".",",")

  }) //fim pedidos.forEach


}

function configurarLimparPedidos(){
  const btn = document.querySelector("#btn-limpar-pedidos")

  if(!btn) return

  btn.addEventListener("click", function(){
    localStorage.removeItem("techfood_pedidos")
    RenderizarPedidos();
  })
}