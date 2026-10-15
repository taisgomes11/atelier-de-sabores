
function CardPrato({ nome, categoria, imagem, onVerDetalhes }) {
  return (
    <article className="prato-card">

      <img
        src={imagem}
        alt={nome}
      />

      <div className="prato-info">
        <span>{categoria}</span>

        <h3>{nome}</h3>

        <button
          type="button"
          className="botao-detalhes"
          onClick={onVerDetalhes}
        >
          Ver detalhes
        </button>
      </div>

    </article>
  );
}

export default CardPrato;
