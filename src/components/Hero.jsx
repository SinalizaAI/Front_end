import styles from "../css/Hero.module.css";
import Video from "../assets/Hero/Vídeo Landing Page.mp4";

function Hero() {
  return (
    <section className={styles.hero_sec}>
      <div className={styles.frente_sec}></div>
      <div className={styles.text}>
        <h1>
          Comunicação é direito, <br /> não escolha
        </h1>
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn1}>Teste agora</button>
        <button className={styles.btn2}>Saiba mais</button>
      </div>
      {/* autoPlay muted loop */}
      <video autoPlay muted loop>
        <source src={Video} />
      </video>
    </section>
  );
}

export default Hero;
