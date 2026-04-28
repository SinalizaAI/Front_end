import { Link } from "react-router-dom";
import styles from "../css/Cadastro.module.css";

function Cadastro() {
  return (
    <main className={styles.main}>
      <h1> Olá, só mais uma Etapa </h1>
      <section className={styles.section}>
        <div className={styles.bem_vindo}>
          <h2> Bem-vindo de volta! Faça seu Login </h2>
          <p> Acesse sua conta agora mesmo </p>
          <Link to={"/Login"} className={styles.btn}> Login </Link>
        </div>
        <div className={styles.crie_conta}>
          <h2> Crie sua conta gratuitamente </h2>
          <p> Cadastre seus dados </p>
          <div className={styles.escrever}>
          <label htmlFor="Nome"></label>
              <input
                id="Nome"
                type="text"
                name="Nome"
                placeholder="Nome"
                required
              />
              </div>
              <div className={styles.escrever}>
          <label htmlFor="Email"></label>
              <input
                id="Email"
                type="email"
                name="Email"
                placeholder="Email"
                required
              />
              </div>
              <div className={styles.escrever}>
          <label htmlFor="Senha"></label>
              <input
                id="Senha"
                type="password"
                name="Senha"
                placeholder="Senha"
                required
              />
            </div>
          <p className={styles.confirmo}> Confirmo que li e aceito os </p>
          <p className={styles.termos}>termos de uso.</p>
          <Link to={"/Login"} className={styles.btn2}> Cadastrar </Link>
        </div>
      </section>
    </main>
  )
}

export default Cadastro;
