import styles from "../css/Tradutor.module.css";

function Tradutor() {
  return (
    <section className={styles.sec}>
      <h1>Seja bem vindo!</h1>
      <div className={styles.container}>
        <button>Audio/Texto para libras</button>
      </div>
    </section>
  );
}

export default Tradutor;
