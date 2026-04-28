import { useState, useEffect } from "react";
import styles from "../css/Vantagens.module.css";
import Imagem_1 from "../assets/Vantagens/Image_1.png";
import Imagem_2 from "../assets/Vantagens/image_2.png";
import Imagem_3 from "../assets/Vantagens/image3.jpg";
import Imagem_4 from "../assets/Vantagens/image6.jpg";
import Imagem_5 from "../assets/Vantagens/image5.jpg";
import Imagem_6 from "../assets/Vantagens/image4.jpg";

const PAGINAS = 3;

const itens = [
  {
    imagem: Imagem_1,
    titulo: "Acessibilidade real",
    descricao:
      "Inclusão de pessoas surdas no atendimento sem depender exclusivamente de intérpretes humanos.",
  },
  {
    imagem: Imagem_2,
    titulo: "Atendimento mais rápido",
    descricao: "Comunicação imediata, reduz filas e tempo de espera.",
  },
  {
    imagem: Imagem_3,
    titulo: "Padronização do atendimento",
    descricao: "Garante comunicação consistente em todos os canais.",
  },
  {
    imagem: Imagem_4,
    titulo: "Melhora na experiência do cliente",
    descricao: "Atendimento mais confortável, autônomo e inclusivo.",
  },
  {
    imagem: Imagem_5,
    titulo: "Prestigio social",
    descricao: "Destaca a empresa como inovadora e socialmente responsável",
  },
  {
    imagem: Imagem_6,
    titulo: "Conformidade legal",
    descricao:
      "Ajuda sua empresa a cumprir a Lei Brasileira de Inclusão e normas de acessibilidade.",
  },
];

function Vantagens() {
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPagina((prev) => (prev + 1) % PAGINAS);
    }, 15000);

    return () => clearInterval(intervalo);
  }, [pagina]);

  // Cada página mostra 2 itens
  const index1 = pagina * 2;
  const index2 = pagina * 2 + 1;

  return (
    <section className={styles.vantagens_sec} id="vantagens">
      <h1>Vantagens de usar o SinalizaAI</h1>

      <div className={styles.container}>
        {[index1, index2].map((i) => (
          <div key={i} className={styles.item_container}>
            <div className={styles.item_image}>
              <img src={itens[i].imagem} alt={itens[i].titulo} />
            </div>
            <div className={styles.texts}>
              <h2>{itens[i].titulo}</h2>
              <p>{itens[i].descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3 bolinhas */}
      <div className={styles.dots}>
        {Array.from({ length: PAGINAS }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === pagina ? styles.dot_ativo : ""}`}
            onClick={() => setPagina(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Vantagens;
