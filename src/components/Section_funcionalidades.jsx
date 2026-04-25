import styles from "../css/Section_funcionalidades.module.css";
import Video from "../assets/Funcionalidades/Video.mp4";
import Funcionalidade_1 from "../assets/Funcionalidades/Speaker.svg";
import Funcionalidade_2 from "../assets/Funcionalidades/Speaker2.png";
import Funcionalidade_3 from "../assets/Funcionalidades/Hand.svg";

function Section_funcionalidades() {
  return (
    <section className={styles.sec_funcionalidades}>
      <div className={styles.video_f}>
        <video autoPlay loop muted>
          <source src={Video} />
        </video>
      </div>
      <div className={styles.funcionalidades}>
        <div className={styles.container_itens}>
          <h1>Funcionalidades do sistema</h1>
          <div className={styles.container_func}>
            <div className={styles.func}>
              <div className={styles.imagem_func}>
                <img src={Funcionalidade_1} alt="" />
              </div>
              <h3>Tradução em voz/texto para Libras</h3>
            </div>
            <div className={styles.func}>
              <div className={styles.imagem_func}>
                <img src={Funcionalidade_2} alt="" />
              </div>
              <h3>Tradução de Libras para aúdio/texto</h3>
            </div>
            <div className={styles.func}>
              <div className={styles.imagem_func}>
                <img src={Funcionalidade_3} alt="" />
              </div>
              <h3>Leitor de mãos ambidestro</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_funcionalidades;
