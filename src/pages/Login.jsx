import styles from "../css/Login.module.css";

function Login() {
  return (
      <main className={styles.main}>
        <h1> Olá, só mais uma Etapa </h1>
        <section className={styles.section}>
          <div className={styles.bem_vindo}>
            <h2> Seja Bem-vindo! </h2>
            <p> Crie sua conta agora </p>
            <a href=""> Cadastrar </a>
          </div>
          <div className={styles.entre_conta}>
  
          </div>
        </section>
      </main>
    )
}

export default Login;
