function Header({totalItens}) {
  return (
    <header className="header">
      <h1 style={{ fontSize: "2rem", fontStyle: "italic", color: "#ce1616" }}>
        TechFood - Sabor e Saber
      </h1>
      <p>O sabor que ensina! 😊</p>
      <p className="carrinho">Itens no Pedido: {totalItens}</p>
    </header>
  );
}

export default Header;
