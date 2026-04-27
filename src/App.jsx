import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section_funcionalidades from "./components/Section_funcionalidades";
import Vantagens from "./components/Vantagens";
import Como_Funciona from "./components/Como_Funciona";
import Planos from "./components/Planos";
import Perguntas from "./components/Perguntas";
import Fale from "./components/Fale";
import Footer from "./components/Footer";
import Video from "./components/Video";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route></Route>
        </Routes>
        <Hero />
        <Video />
        <Section_funcionalidades />
        <Vantagens />
        <Como_Funciona />
        <Planos />
        <Perguntas />
        <Fale />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
