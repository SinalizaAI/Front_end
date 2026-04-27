import styles from "../css/Hero.module.css";
import { Link } from "react-router-dom";

function Hero() {
  // Scroll para inicio
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero_sec} id="inicio">
      <div className={styles.text}>
        <h1>
          Comunicação é direito, <br /> não escolha
        </h1>
        <div className={styles.buttons}>
          <Link to={"/"} className={styles.btn1}>
            Teste agora
          </Link>
          <button
            className={styles.btn2}
            onClick={() => scrollToSection("vantagens")}
          >
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
