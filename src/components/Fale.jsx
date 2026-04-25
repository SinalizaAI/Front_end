import styles from "../css/Fale.module.css";

function Fale() {
  return (
    <section className={styles.fale_sec}>
      <h1>Fale conosco</h1>

      <div className={styles.container}>
        <div className={styles.div1}>
          <div className={styles.texts}>
            <h2>Contato</h2>
            <p>
              Entre em contato para tirar suas dúvidas conosco sobre nossos
              produtos e serviços.
            </p>
          </div>

          <div className={styles.texts}>
            <h2>Endereço</h2>
            <p>Rua Tito 54, Lapa, São Paulo</p>
          </div>

          <div className={styles.texts}>
            <h2>Telefone</h2>
            <p>11 9578963541</p>
          </div>

          <div className={styles.texts}>
            <h2>E-mail</h2>
            <p>Sinalizaai@gmail.com</p>
          </div>
        </div>

        <div className={styles.div2}>
          <h2>Entre em contato</h2>

          <form className={styles.container_div2}>
            <div className={styles.container_form}>
              <label htmlFor="nome">Seu nome</label>
              <input
                id="nome"
                type="text"
                name="nome"
                placeholder=" "
                required
              />
            </div>

            <div className={styles.container_form}>
              <label htmlFor="telefone">Seu telefone</label>
              <input
                id="telefone"
                type="tel"
                name="telefone"
                placeholder=" "
                required
              />
            </div>

            <div className={styles.container_form}>
              <label htmlFor="email">Seu e-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder=" "
                required
              />
            </div>

            <div className={styles.container_form}>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={6}
                required
              />
            </div>

            <div className={styles.btn}>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Fale;