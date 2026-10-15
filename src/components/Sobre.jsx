
function Sobre() {
  return (
    <section id="sobre" className="container sobre-container">

      <div className="sobre-texto">

        <span className="sobre-destaque">
          CONHEÇA A PROFISSIONAL
        </span>

        <h2>Sobre a Chef</h2>

        <p>
          A gastronomia é mais do que preparar alimentos.
          É a arte de criar experiências que despertam
          emoções e transformam momentos em memórias.
        </p>

        <p>
          Com uma proposta voltada à alta gastronomia,
          desenvolvo menus exclusivos para jantares
          privativos, eventos sofisticados e celebrações
          especiais.
        </p>

        <p>
          Cada experiência é planejada de forma personalizada,
          valorizando a seleção dos ingredientes, a
          apresentação dos pratos e a harmonia dos sabores.
        </p>

        <div className="sobre-diferenciais">
          <div>
            <h3>Criatividade</h3>
            <p>Combinações que surpreendem.</p>
          </div>

          <div>
            <h3>Exclusividade</h3>
            <p>Menus personalizados para cada ocasião.</p>
          </div>

          <div>
            <h3>Excelência</h3>
            <p>Atenção aos detalhes em cada preparo.</p>
          </div>
        </div>

      </div>

      <div className="sobre-imagem">
        <img
          src="/imagens/chefe.jpg"
          alt="Chef em ambiente gastronômico profissional"
          className="foto-chef"
        />

        <p>
          Cada prato conta uma história.
        </p>
      </div>

    </section>
  );
}

export default Sobre;
