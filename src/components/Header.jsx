import styles from "../css/Header.module.css";
import Logo from "../assets/header/logo_n.svg";

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
            <a onClick={() => scrollToSection("inicio")}>Home</a>
            <a onClick={() => scrollToSection("funciona")}>Como funciona</a>
            <a href="">Sobre nós</a>
            <button>Cadastre-se</button>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
