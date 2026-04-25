import { useState } from "react"; // ← importar useState
import styles from "../css/Perguntas.module.css";
import Seta from "../assets/Perguntas/seta.png";

// Dados das perguntas e respostas separados do JSX
const faqData = [
  {
    id: 1,
    pergunta: "Como funciona o SinalizaAI?",
    resposta: "O SinalizaAI utiliza inteligência artificial para reconhecer e interpretar a Língua Brasileira de Sinais (LIBRAS) em tempo real.",
  },
  {
    id: 2,
    pergunta: "Porque utilizar o SinalizaAI?",
    resposta: "Para facilitar a comunicação entre pessoas surdas e ouvintes, promovendo acessibilidade e inclusão social.",
  },
  {
    id: 3,
    pergunta: "Haverá versão mobile?",
    resposta: "Sim! Uma versão mobile está em desenvolvimento e será lançada em breve para iOS e Android.",
  },
  {
    id: 4,
    pergunta: "Para que o site serve?",
    resposta: "O site serve como uma plataforma de tradução e aprendizado de LIBRAS, tornando a comunicação mais acessível para todos.",
  },
];

function Perguntas() {
  // Guarda o ID da pergunta aberta (null = nenhuma aberta)
  const [aberta, setAberta] = useState(null);

  function togglePergunta(id) {
    // Se clicar na que já está aberta, fecha. Senão, abre a nova.
    setAberta(aberta === id ? null : id);
  }

  return (
    <section className={styles.perguntas_sec}>
      <div className={styles.image_cont}></div>
      <div className={styles.content_cont}>
        <div className={styles.content}>
          <h1>Perguntas frequentes</h1>

          <div className={styles.perguntas_cont}>
            {faqData.map((item) => (
              <div key={item.id} className={styles.pergunta_wrapper}>

                {/* Cabeçalho clicável */}
                <div
                  className={styles.pergunta}
                  onClick={() => togglePergunta(item.id)}
                >
                  <img
                    src={Seta}
                    alt="Seta"
                    // Rotaciona a seta quando a pergunta está aberta
                    className={aberta === item.id ? styles.seta_aberta : styles.seta}
                  />
                  <h2>{item.pergunta}</h2>
                </div>

                {/* Resposta: só aparece se for a pergunta aberta */}
                {aberta === item.id && (
                  <div className={styles.resposta}>
                    <p>{item.resposta}</p>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perguntas;