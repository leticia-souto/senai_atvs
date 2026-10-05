import { useState } from "react";
import Selo from "./Selo";

function CardPrato({
  nome,
  preco,
  categoria,
  descricao,
  vegetariano = false,
  destaque = false,
  picante = false,
  disponivel = true,
  onAdicionar,
}) {
  const [quantidade, setQuantidade] = useState(1);
  const [curtidas, setCurtidas] = useState(1);
  const [mostrarDescricao, setMostrarDescricao] = useState(false);

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function alternarDescricao() {
    setMostrarDescricao(!mostrarDescricao);
  }

  function curtir() {
    setCurtidas(curtidas + 1);
  }

  function diminuir() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function aumentar() {
    if (quantidade < 10) {
      setQuantidade(quantidade + 1);
    }
  }

  function adicionar() {
    onAdicionar(quantidade, preco);
    setQuantidade(1);
  }

  return (
    <article className={destaque ? "card-prato destaque" : "card-prato"}>
      <span className="categoria">{categoria}</span>
      <h2>
        {categoria === "Sobremesa" ? "🍰" : ""}
        {nome}
      </h2>

      <div className="selos">
        {destaque && <Selo texto="Destaque" tipo="destaque" />}
        {vegetariano && <Selo texto="Vegetariano" tipo="vegetariano" />}
        {!disponivel && <Selo texto="Esgotado" tipo="esgotado" />}
        {picante && <Selo texto="Picante" tipo="picante"/>}
      </div>

      <p className="preco">{precoFormatado}</p>

      <button
        className="btn-mostrar-descricao"
        type="button"
        onClick={alternarDescricao}
      >
        {mostrarDescricao ? "Esconder descrição" : "Ver descrição"}
      </button>
      {mostrarDescricao && <p className="descricao">{descricao}</p>}

      {disponivel ? (
        <>
          <div className="quantidade">
            <button
              type="button"
              onClick={diminuir}
              aria-label={`diminuir quantidade de ${nome}`}
            >
              -
            </button>

            <span>{quantidade}</span>

            <button
              type="button"
              onClick={aumentar}
              aria-label={`aumentar quantidade de ${nome}`}
            >
              +
            </button>
          </div>

          <button type="button" className="btn-adicionar" onClick={adicionar}>
            Adicionar ao Pedido
          </button>
        </>
      ) : (
        <button type="button" className="btn-indisponivel" disabled>
          Indisponível
        </button>
      )}

      <button type="button" className="btn-curtir" onClick={curtir}>
        Curtir ({curtidas})
      </button>
    </article>
  );
}

export default CardPrato;
