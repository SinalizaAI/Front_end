import styles from "../css/Footer.module.css";
import Logo from "../assets/header/logo_n.svg";

function Footer() {
  // Scroll para inicio
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer_sec}>
      <div className={styles.logo_cont}>
        <div
          className={styles.logo_container}
          onClick={() => scrollToSection("inicio")}
        >
          <div className={styles.logo}>
            <img src={Logo} alt="Logo do projeto" />
          </div>
          <div className={styles.textos}>
            <h1>
              Sinaliza<span>AI</span>
            </h1>
            <h3>Comunicação é direito, não escolha</h3>
          </div>
        </div>
      </div>
      <div className={styles.texts_cont}>
        <div className={styles.cont_t}>
          <h2>Navegação</h2>
          <div className={styles.cont_a}>
            <a onClick={() => scrollToSection("inicio")}>Início</a>
            <a onClick={() => scrollToSection("funciona")}>Como funciona</a>
            <a href="">Sobre nós</a>
            <a href="">Testar agora</a>
          </div>
        </div>
        <div className={styles.cont_t}>
          <h2>Contato</h2>
          <div className={styles.cont_p}>
            <p>(11) 4002-8922 05061-200</p>
            <p>sinalizaai@gmail.com</p>
            <p>Senac Lapa Tito, 54</p>
            <p>Vila Romana, São Paulo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
