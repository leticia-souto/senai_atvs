import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import Footer from "./components/Footer";

const cardapio = [
  {
    id: 1,
    nome: "Feijoada",
    preco: 42.9,
    categoria: "Prato Principal",
    descricao: "Feijoada especial e fresquinha"
  },

  {
    id: 2,
    nome: "Moqueca",
    preco: 49.9,
    categoria: "Prato Principal",
    descricao: "Uma das especialidades da casa"
  },

  {
    id: 3,
    nome: "Pudim",
    preco: 15.0,
    categoria: "Sobremesa",
    descricao: "Pudim de Leite especial da casa"
  },

  {
    id: 4,
    nome: "Parmegiana de Carne",
    preco: 45.0,
    categoria: "Prato Principal",
    descricao: "Com molho especial da casa"
  },

  {
    id: 5,
    nome: "Morango Cravejado",
    preco: 12.0,
    categoria: "Sobremesa",
    descricao: "Preparado com muito amor"
  },
];

function App() {
  return (
    <main className="app">
      <Header/>

      <p>Cardapio com {cardapio.length} itens</p>

      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
          />
        ))}
      </section>

      <Footer/>
    </main>
  );
}

export default App
