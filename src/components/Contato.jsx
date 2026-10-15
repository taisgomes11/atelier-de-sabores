import { useState } from "react";

function Contato() {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  function atualizarCampo(evento) {
    const { name, value } = evento.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    setEnviado(true);

    setFormulario({
      nome: "",
      email: "",
      mensagem: "",
    });
  }

  return (
    <section id="contato">
      <div className="container contato-container">

        <h2>Solicite seu Orçamento</h2>

        <form onSubmit={enviarFormulario}>

          <label htmlFor="nome">Nome</label>

          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Digite seu nome"
            value={formulario.nome}
            onChange={atualizarCampo}
            required
          />

          <label htmlFor="email">E-mail</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={formulario.email}
            onChange={atualizarCampo}
            required
          />

          <label htmlFor="mensagem">Mensagem</label>

          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
            placeholder="Digite sua mensagem"
            value={formulario.mensagem}
            onChange={atualizarCampo}
            required
          />

          <button type="submit">
            Enviar
          </button>

        </form>

        {enviado && (
          <p className="mensagem-sucesso">
            ✓ Mensagem enviada com sucesso!
          </p>
        )}

      </div>
    </section>
  );
}

export default Contato;