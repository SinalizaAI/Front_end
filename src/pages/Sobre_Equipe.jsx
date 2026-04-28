import { useState, useEffect } from "react";
import styles from "../css/Sobre_Equipe.module.css";
import Equipe from "../assets/Sobre_Equipe/equipe.png";
import Kaue from "../assets/Sobre_Equipe/Kaue2.png";
import Html from "../assets/Sobre_Equipe/html.png";
import Css from "../assets/Sobre_Equipe/css.png";
import Js from "../assets/Sobre_Equipe/js.png";
import Python from "../assets/Sobre_Equipe/python.png";
import Java from "../assets/Sobre_Equipe/java.png";
import React from "../assets/Sobre_Equipe/react.png";
import Linkedin from "../assets/Sobre_Equipe/linkedin.png";
import Github from "../assets/Sobre_Equipe/github.png";
import Gustavo from "../assets/Sobre_Equipe/Gustavo.png";
import Ryan from "../assets/Sobre_Equipe/Ryan.png";
import Thayna from "../assets/Sobre_Equipe/Thay.png";
import Soares from "../assets/Sobre_Equipe/Amanda.png";
import Isis from "../assets/Sobre_Equipe/Ismaiara.png";

const membros = [
  {
    nome: "Amanda Soares",
    funcao: "PO e Full-Stack",
    foto: Soares,
    techs: [Html, Css, Js, Python, Java, React],
    linkedin: "#",
    github: "#",
  },
  {
    nome: "Gustavo Bozo",
    funcao: "Scrum e Full-Stack",
    foto: Gustavo, // troque pela foto correta
    techs: [Html, Css, Js, Python],
    linkedin: "#",
    github: "#",
  },
  {
    nome: "Kauê Siqueira",
    funcao: "Front-End e UI/UX",
    foto: Kaue,
    techs: [Html, Css, Js, React, Python, Java],
    linkedin: "#",
    github: "#",
  },
  {
    nome: "Ryan",
    funcao: "Financeiro e Full-Stack",
    foto: Ryan,
    techs: [Html, Css, Js, Python],
    linkedin: "#",
    github: "#",
  },
  {
    nome: "Thayna Silva",
    funcao: "Full-Stack",
    foto: Thayna,
    techs: [Html, Css, Js, Python],
    linkedin: "#",
    github: "#",
  },
  {
    nome: "Ismaiara Silva",
    funcao: "Front-End e Marketing",
    foto: Isis,
    techs: [Html, Css, Js, React],
    linkedin: "#",
    github: "#",
  },
];

function Sobre_Equipe() {
  const [atual, setAtual] = useState(0);
  const [saindo, setSaindo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      trocar((atual + 1) % membros.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [atual]);

  function trocar(index) {
    setSaindo(true);
    setTimeout(() => {
      setAtual(index);
      setSaindo(false);
    }, 300);
  }

  const membro = membros[atual];

  return (
    <section className={styles.sec}>
      <div className={styles.image_equipe}>
        <img src={Equipe} alt="" />
      </div>

      <div className={styles.text}>
        <h2>
          Somos proanos apaixonados por tecnologia, movidos pelo entusiasmo e
          propósito de tornar a comunicação mais acessível. Cada integrante
          contribui com conhecimentos e habilidades únicas no desenvolvimento do
          nosso software, unindo conhecimento técnico, criatividade, trabalho em
          equipe e empatia.
        </h2>
      </div>

      <div
        className={`${styles.person_cont} ${saindo ? styles.saindo : styles.entrando}`}
      >
        <div className={styles.name}>
          <div className={styles.container}>
            <div className={styles.cont_t}>
              <h1>{membro.nome}</h1>
              <h3>{membro.funcao}</h3>
            </div>
            <div className={styles.hab}>
              {membro.techs.map((tech, i) => (
                <img key={i} src={tech} alt="" />
              ))}
            </div>
            <div className={styles.contact}>
              <a href={membro.linkedin} target="_blank" rel="noreferrer">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
              <a href={membro.github} target="_blank" rel="noreferrer">
                <img src={Github} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.foto}>
          <img src={membro.foto} alt={membro.nome} />
        </div>
      </div>

      <div className={styles.dots}>
        {membros.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === atual ? styles.dot_ativo : ""}`}
            onClick={() => trocar(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Sobre_Equipe;
