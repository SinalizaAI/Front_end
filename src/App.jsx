import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Tradutor from "./pages/Tradutor";
import PlanosCompletos from "./pages/PlanosCompletos";
import Sobre_Equipe from "./pages/Sobre_Equipe";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tradutor" element={<Tradutor />} />
          <Route path="/PlanosCompletos" element={<PlanosCompletos />} />
          <Route path="/pages/Sobre_Equipe" element={<Sobre_Equipe />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
