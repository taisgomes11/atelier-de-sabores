import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Especialidades from "./components/Especialidades";
import Galeria from "./components/Galeria";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Sobre />
        <Especialidades />
        <Galeria />
        <Contato />
      </main>

      <Footer />
    </>
  );
}

export default App;