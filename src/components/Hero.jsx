import styles from "../css/Hero.module.css";

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
          <button className={styles.btn1}>Teste agora</button>
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
