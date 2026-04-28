import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Tradutor from "./pages/Tradutor";
import PlanosCompletos from "./pages/PlanosCompletos";
import Sobre_Equipe from "./pages/Sobre_Equipe";

function Layout() {
  const { pathname } = useLocation();
  const isEquipe = pathname === "/pages/Sobre_Equipe";

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tradutor" element={<Tradutor />} />
        <Route path="/PlanosCompletos" element={<PlanosCompletos />} />
        <Route path="/pages/Sobre_Equipe" element={<Sobre_Equipe />} />
      </Routes>
      <Footer semRadius={isEquipe} />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
