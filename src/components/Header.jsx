import styles from "../css/Header.module.css";
import Logo from "../assets/header/logo_n.svg";
import { Link } from "react-router-dom";

function Header() {
  // Scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={styles.header_principal} id="header">
      <nav className={styles.container_nav}>
        <div
          className={styles.logo_container}
          onClick={() => scrollToSection("inicio")}
        >
          <div className={styles.logo}>
            <img src={Logo} alt="logo" />
          </div>
          <h1>
            Sinaliza<span>AI</span>{" "}
          </h1>
        </div>
        <div className={styles.links_nav}>
          <nav>
            <Link to="/" onClick={() => scrollToSection("inicio")}>
              Home
            </Link>
            <Link to="/" onClick={() => scrollToSection("funciona")}>
              Como funciona
            </Link>
            <Link to={"/pages/Sobre_Equipe"}>Sobre nós</Link>
            <Link to={"/"} className={styles.button}>
              Cadastre-se
            </Link>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
