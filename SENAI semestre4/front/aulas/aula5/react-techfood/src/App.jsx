import { useState } from "react";
import Header from "./components/Header";
import SecaoCardapio from "./components/SecaoCardapio";
import Footer from "./components/Footer";
import { cardapio } from "./data/cardapio";
import "./App.css";

const categorias = ["Pratos Principais", "Sobremesas", "Bebidas"];

function App() {
  const [totalItens, setTotalItens] = useState(0);
  const [totalValor, setTotalValor] = useState(0);

  function adicionarAoPedido(quantidade, preco) {
    setTotalItens(totalItens + quantidade);
    setTotalValor(totalValor + quantidade * preco);
  }

  function limparPedido() {
    setTotalItens(0);
    setTotalValor(0);
  }

  const totalFormatado = totalValor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <main className="app">
      <Header totalItens={totalItens} />

      <p>Cardapio com {cardapio.length} itens</p>

      {categorias.map((categoria) => (
        <SecaoCardapio
          key={categoria}
          titulo={categoria}
          pratos={cardapio.filter((prato) => prato.categoria === categoria)}
          onAdicionar={adicionarAoPedido}
        />
      ))}

      <p>Total do pedido: {totalFormatado}</p>

      <button
        className="btn-limpar-pedido"
        type="button"
        onClick={limparPedido}
      >
        Limpar Pedido
      </button>

      <Footer />
    </main>
  );
}

export default App;
