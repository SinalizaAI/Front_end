import styles from "../css/Header.module.css";
import Logo from "../assets/header/logo.svg";

function Header() {
  return (
    <header className={styles.header_principal}>
      <nav className={styles.container_nav}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <img src={Logo} alt="logo" />
          </div>
          <h1>
            Sinaliza<span>AI</span>{" "}
          </h1>
        </div>
        <div className={styles.links_nav}>
          <nav>
            <a href="">Home</a>
            <a href="">Como funciona</a>
            <a href="">Sobre nós</a>
            <button>Cadastre-se</button>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
