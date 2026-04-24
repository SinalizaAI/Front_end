import styles from "../css/Como_Funciona.module.css";
import Fundo from "../assets/Como_funciona/fundo.png";
import Video from "../assets/Como_funciona/video_ex.mp4";

function Como_Funciona() {
  return (
    <section className={styles.funciona_sec}>
      <img src={Fundo} alt="" />
      <div className={styles.container}>
        <h1>Como funciona na prática?</h1>
        <video autoPlay loop>
          <source src={Video} />
        </video>
        <button>Teste agora</button>
      </div>
    </section>
  );
}

export default Como_Funciona;
