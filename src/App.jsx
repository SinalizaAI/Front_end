import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section_funcionalidades from "./components/Section_funcionalidades";
import Vantagens from "./components/Vantagens";
import Como_Funciona from "./components/Como_Funciona";
import Planos from "./components/Planos";
import Perguntas from "./components/Perguntas";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Section_funcionalidades />
      <Vantagens />
      <Como_Funciona />
      <Planos />
      <Perguntas />
    </main>
  );
}

export default App;
