import { useState, useEffect } from "react";
import "./App.css";
import image1png from "./assets/image1png.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
{
}
function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Fecha o menu ao clicar em qualquer link
  useEffect(() => {
    function fecharMenu() {
      if (window.innerWidth < 901) {
        setMenuAberto(false);
      }
    }

    const links = document.querySelectorAll(".navbar a");
    links.forEach((link) => link.addEventListener("click", fecharMenu));

    return () => {
      links.forEach((link) => link.removeEventListener("click", fecharMenu));
    };
  }, []);

  // Exibir menu automaticamente em telas grandes
  useEffect(() => {
    function exibirMenu() {
      if (window.innerWidth >= 901) {
        setMenuAberto(true);
      } else {
        setMenuAberto(false);
      }
    }
    window.addEventListener("resize", exibirMenu);
    exibirMenu(); // roda no carregamento para ajustar visibilidade

    return () => window.removeEventListener("resize", exibirMenu);
  }, []);

  // Remove transição dos links (se quiser, pode colocar no CSS direto)
  useEffect(() => {
    const links = document.querySelectorAll(".navbar a");
    links.forEach((link) => {
      link.style.transition = "none";
    });
  }, []);

  return (
    <>
      <header id="header">
        <div className="logomarca">
          <h2>{"< Lira Code >"}</h2>
        </div>
        <button id="toggleSidebar" onClick={() => setMenuAberto(!menuAberto)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav
          className="navbar"
          id="navbar"
          style={{ visibility: menuAberto ? "visible" : "hidden" }}
        >
          <a href="#home">Início</a>
          <a href="#sobre">Sobre Mim</a>
          <a href="#projetos">Projetos</a>
          <div className="barra"></div>
          <div className="contato-nav">
            <a href="https://t.me/liraDev" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://github.com/0lira" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/patrick-lira-62a946226/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </nav>
      </header>
      <main className="main">
        <section id="home">
          <div className="welcome-content">
            <p>/*Hello World!*/</p>
            <h2>Eu sou Patrick Lira,</h2>
            <p>Desenvolvedor Web Front-End.</p>
          </div>
          <div className="welcome-animation">
            <div className="circle-animation">
              <div className="mini-circle"></div>
              <img id="image1" src={image1png} />
            </div>
          </div>
        </section>
        <section id="sobre">
          <div className="texto">
            <h2>Sobre Mim</h2>
            <p>
              Olá mundo! Meu nome é Patrick Lira e sou de São Paulo,<br></br>{" "}
              tenho 23 anos e sou apaixonado por Tecnologia.
              <br></br> Sou Desenvolvedor Front-End e tenho muito interesse em
              adquirir experiência por meio de uma vaga na área da Tecnologia da
              Informação.<br></br> Estou cursando Bacharelado Em Engenharia De
              Software pela Unicesumar e aprendendendo cada vez mais com outras
              instituições de ensino e documentações.
            </p>
          </div>
          <div className="box-conhecimentos">
            <div className="titulo-box">
              <h2>Conhecimentos</h2>
            </div>
            <div className="icons-dev">
              <div className="icons1">
                <FontAwesomeIcon className="icon" icon={faHtml5} />
                <FontAwesomeIcon className="icon" icon={faCss3Alt} />
                <FontAwesomeIcon className="icon" icon={faJsSquare} />
              </div>
              <div className="icons2">
                <FontAwesomeIcon className="icon" icon={faReact} />
                <FontAwesomeIcon className="icon" icon={faGitAlt} />
                <FontAwesomeIcon className="icon" icon={faGithubSquare} />
              </div>
            </div>
          </div>
        </section>
        <section id="projetos">
          <div className="titulo-page">
            <h2>Projetos</h2>
          </div>
          <div className="box-projetos">
            <a
              href="https://0lira.github.io/digital-clock/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Relógio Digital
            </a>
            {/*<a
              href="https://0lira.github.io/digital-clock/"
              target="_blank"
              rel="noopener noreferrer"
            >
              outra coisa
            </a>
            <a
              href="https://0lira.github.io/digital-clock/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sla projeto
            </a>{" "}
            <a
              href="https://0lira.github.io/digital-clock/"
              target="_blank"
              rel="noopener noreferrer"
            >
              em breve
            </a>*/}
          </div>
        </section>
        <footer id="footer">
          <p>©2023 por Patrick Lira.</p>
          <small>Todos os direitos reservados.</small>
        </footer>
      </main>
    </>
  );
}

export default App;
