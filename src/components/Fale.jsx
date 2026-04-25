import styles from "../css/Fale.module.css";

function Fale() {
  return (
    <section className={styles.fale_sec}>
      <h1>Fale conosco</h1>

      <div className={styles.container}>
        <div className={styles.div1}>
          <div className={styles.texts}>
            <h2>Contato</h2>
            <h4>
              Entre em contato para tirar suas dúvidas conosco sobre nossos
              produtos e serviços.
            </h4>
          </div>

          <div className={styles.texts}>
            <h2>Endereço</h2>
            <h4>Rua Tito 54, Lapa, São Paulo</h4>
          </div>

          <div className={styles.texts}>
            <h2>Telefone</h2>
            <h4>11 9578963541</h4>
          </div>

          <div className={styles.texts}>
            <h2>E-mail</h2>
            <h4>Sinalizaai@gmail.com</h4>
          </div>
        </div>
        <div className={styles.div2}>
          <h2>Entre em contato</h2>

          <div className={styles.container_div2}>
            <div className={styles.container_form}>
              <h3>Seu nome</h3>
              <div className={styles.line}></div>
            </div>

            <div className={styles.container_form}>
              <h3>Seu telefone</h3>
              <div className={styles.line}></div>
            </div>

            <div className={styles.container_form}>
              <h3>Seu e-mail</h3>
              <div className={styles.line}></div>
            </div>

            <div className={styles.mensagem}>
              <h4>Mensagem</h4>
            </div>

            <div className={styles.btn}>
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fale;
