import styles from "../css/Sobre_Equipe.module.css";
import Equipe from "../assets/Sobre_Equipe/equipe.png";
import Kaue from "../assets/Sobre_Equipe/Kaue2.png";

function Sobre_Equipe() {
  return (
    <section className={styles.sec}>
      <div className={styles.image_equipe}>
        <img src={Equipe} alt="" />
      </div>
      <div className={styles.text}>
        <h2>
          Somos proanos apaixonados por tecnologia, movidos pelo entusiamo e
          propósito de tornar a comunicação mais acessível. Cada integrante
          contribui com conhecimentos e habilidades únicas no desenvolvimento do
          nosso software, unindo conhecimento técnico, criatividade, trabalho em
          equipe e empatia.
        </h2>
      </div>

      <div className={styles.person_cont}>
        <div className={styles.name}>
          <div className={styles.container}>
            <h1>Kauê Siqueira</h1>
            <h3>Front-end e UI/UX</h3>
            <div className={styles.hab}>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.foto}>
          <img src={Kaue} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Sobre_Equipe;
