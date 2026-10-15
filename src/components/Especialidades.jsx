
import CardEspecialidade from "./CardEspecialidade";
import { Utensils, Wine, ChefHat } from "lucide-react";

function Especialidades() {
  const servicos = [
    {
      id: 1,
      titulo: "Jantares Privativos",
      icone: Utensils,
      descricao:
        "Experiências gastronômicas exclusivas, com menus personalizados para momentos especiais.",
    },
    {
      id: 2,
      titulo: "Eventos Sofisticados",
      icone: Wine,
      descricao:
        "Serviços gastronômicos para celebrações, eventos corporativos e ocasiões memoráveis.",
    },
    {
      id: 3,
      titulo: "Menus Exclusivos",
      icone: ChefHat,
      descricao:
        "Criações autorais que valorizam ingredientes selecionados, técnica e apresentação.",
    },
  ];

  return (
    <section
      id="servicos"
      className="container secao-servicos"
      aria-labelledby="titulo-servicos"
    >
      <span className="servicos-destaque">
        EXPERIÊNCIAS PERSONALIZADAS
      </span>

      <h2 id="titulo-servicos">
        Serviços Gastronômicos
      </h2>

      <p className="servicos-introducao">
        Cada ocasião merece uma experiência única.
        Conheça os serviços desenvolvidos para transformar
        momentos especiais em celebrações inesquecíveis.
      </p>

      <div className="cards-container">
        {servicos.map((item) => (
          <CardEspecialidade
            key={item.id}
            icone={item.icone}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </div>
    </section>
  );
}

export default Especialidades;
