
import { useState } from "react";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header>
      <nav className="navbar">
        <div className="container navbar-container">

          <a className="navbar-brand" href="#inicio" onClick={fecharMenu}>
            Atelier de Sabores
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? "✕" : "☰"}
          </button>

          <div
            id="menu-principal"
            className={`menu ${menuAberto ? "menu-aberto" : ""}`}
          >
            <a href="#inicio" onClick={fecharMenu}>Início</a>
            <a href="#sobre" onClick={fecharMenu}>Sobre</a>
            <a href="#servicos" onClick={fecharMenu}>Serviços</a>
            <a href="#galeria" onClick={fecharMenu}>Portfólio</a>
           <a href="#contato" onClick={fecharMenu}>Contato</a>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
