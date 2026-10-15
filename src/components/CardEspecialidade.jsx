
function CardEspecialidade({ icone: Icone, titulo, descricao }) {
  return (
    <article className="card card-servico">
      <span className="card-servico-icone" aria-hidden="true">
        <Icone size={32} strokeWidth={1.6} />
      </span>

      <h3>{titulo}</h3>

      <p>{descricao}</p>
    </article>
  );
}

export default CardEspecialidade;
