
import { useState } from "react";
import CardPrato from "./CardPrato";

function Galeria() {
  
const pratos = [
  {
    id: 1,
    nome: "Salgados Artesanais",
    categoria: "Salgados",
    imagem: "/imagens/Salgado.jpg",
    descricao:
      "Pequenas criações artesanais, preparadas com cuidado e ingredientes selecionados.",
  },
  {
    id: 2,
    nome: "Steak Tartare",
    categoria: "Entradas",
    imagem: "/imagens/tartar-01.png",
    fotos: [
      "/imagens/tartar-01.png",
      "/imagens/tartar-02.png",
      "/imagens/tartar-03.png",
    ],
    descricao:
      "Steak Tartare apresentado em diferentes composições, com atenção à textura, aos acompanhamentos e a apresentação.",
  },
  {
    id: 3,
    nome: "Salgados Artesanais",
    categoria: "Salgados",
    imagem: "/imagens/Croissant.jpg",
    descricao:
      "Croissants de massa folhada, com camadas delicadas e acabamento dourado.",
  },
  {
    id: 4,
    nome: "Penne ao Pomodoro",
    categoria: "Massas e Risotos",
    imagem: "/imagens/penne-pomodoro.png",
    descricao:
      "Penne envolvido em molho de tomate, finalizado com ervas frescas.",
  },
  {
    id: 5,
    nome: "Massa com Camarões",
    categoria: "Massas e Risotos",
    imagem: "/imagens/massa-camaroes.png",
    descricao:
      "Massa com camarões e molho de tomate, em uma combinação de sabores marcantes.",
  },
  {
    id: 6,
    nome: "Massa Recheada",
    categoria: "Massas e Risotos",
    imagem: "/imagens/massa-recheada.png",
    descricao:
      "Massa recheada apresentada com molho cremoso e finalização delicada.",
  },
  {
    id: 7,
    nome: "Risoto Especial",
    categoria: "Massas e Risotos",
    imagem: "/imagens/risoto.png",
    descricao:
      "Risoto de textura cremosa, servido com apresentação elegante.",
  },
  {
    id: 8,
    nome: "Chocolate Artesanal",
    categoria: "Confeitaria",
    imagem: "/imagens/chocolate.png",
    descricao:
      "Preparação de chocolate com textura intensa, ideal para compor sobremesas especiais.",
  },
  {
    id: 9,
    nome: "Momentos Doces",
    categoria: "Confeitaria",
    imagem: "/imagens/sobremesa.jpg",
    descricao:
      "Doces artesanais com cobertura cremosa e apresentação acolhedora.",
  },
  {
    id: 10,
    nome: "Sobremesa Folhada",
    categoria: "Confeitaria",
    imagem: "/imagens/sobremesa-folhada.png",
    descricao:
      "Camadas crocantes de massa folhada, creme delicado e frutas frescas.",
  },
  {
    id: 11,
    nome: "Torta de Amêndoas",
    categoria: "Confeitaria",
    imagem: "/imagens/torta-amendoas.png",
    descricao:
      "Torta de acabamento dourado, com amêndoas laminadas e cobertura brilhante.",
  },
];


  const [categoria, setCategoria] = useState("Todos");

  // Guarda o prato escolhido para visualizar os detalhes
  const [pratoSelecionado, setPratoSelecionado] = useState(null);

  
const navegarPrato = (direcao) => {
  const indiceAtual = pratosFiltrados.findIndex(
    (prato) => prato.id === pratoSelecionado?.id
  );

  const proximoIndice =
    (indiceAtual + direcao + pratosFiltrados.length) %
    pratosFiltrados.length;

  setPratoSelecionado(pratosFiltrados[proximoIndice]);
};


  const categorias = [ "Todos",
  "Entradas",
  "Massas e Risotos",
  "Salgados",
  "Confeitaria"];

  const pratosFiltrados = pratos.filter((prato) => {
    return categoria === "Todos" || prato.categoria === categoria;
  });

  return (
  <section
    id="galeria"
    className="container portfolio-container"
  >

      <span className="portfolio-destaque">
        CRIAÇÕES AUTORAIS
      </span>

      <h2>Portfólio Gastronômico</h2>

      <p className="subtitulo">
        Conheça algumas criações que representam a essência
        da nossa proposta gastronômica.
      </p>

      <div className="filtros" aria-label="Filtrar pratos por categoria">
        {categorias.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategoria(item)}
            className={categoria === item ? "ativo" : ""}
            aria-pressed={categoria === item}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="galeria-grid">
        {pratosFiltrados.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            categoria={prato.categoria}
            imagem={prato.imagem}
            onVerDetalhes={() => setPratoSelecionado(prato)}
          />
        ))}
      </div>

      {pratoSelecionado && (
        <div
          className="modal-overlay"
          onClick={() => setPratoSelecionado(null)}
        >
          <div
            className="modal-conteudo"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            onClick={(evento) => evento.stopPropagation()}
          >
            <button
              type="button"
              className="modal-fechar"
              onClick={() => setPratoSelecionado(null)}
              aria-label="Fechar detalhes do prato"
            >
              ×
            </button>

            
<div className="modal-imagem-container">

  <img
    src={pratoSelecionado.imagem}
    alt={pratoSelecionado.nome}
  />

  {pratosFiltrados.length > 1 && (
    <>
      <button
        type="button"
        className="modal-seta modal-seta-esquerda"
        onClick={() => navegarPrato(-1)}
        aria-label="Prato anterior"
      >
        &#10094;
      </button>

      <button
        type="button"
        className="modal-seta modal-seta-direita"
        onClick={() => navegarPrato(1)}
        aria-label="Próximo prato"
      >
        &#10095;
      </button>
    </>
  )}

</div>


            <span className="modal-categoria">
              {pratoSelecionado.categoria}
            </span>

            <h3 id="modal-titulo">
              {pratoSelecionado.nome}
            </h3>

            <p>{pratoSelecionado.descricao}</p>
          </div>
        </div>
      )}

    </section>
  );
}

export default Galeria;
