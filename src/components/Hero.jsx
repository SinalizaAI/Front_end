import styles from "../css/Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero_sec}>
      <div className={styles.text}>
        <h1>
          Comunicação é direito, <br /> não escolha
        </h1>
        <div className={styles.buttons}>
          <button className={styles.btn1}>Teste agora</button>
          <button className={styles.btn2}>Saiba mais</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
