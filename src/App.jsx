import { useState } from 'react'
import './App.css'
import image1png from './assets/image1png.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram, faHtml5, faCss3Alt, faJsSquare, faReact, faGitAlt, faGithubSquare} from '@fortawesome/free-brands-svg-icons'



function App() {
  return (
    <>
      <div className='header'>
        <div className='logomarca'>
          <h2> {"< Lira Code >"} </h2>
        </div>
        <div className='menu-header'>
          <a href='#home'>Home</a>
          <a href='#sobre'>Sobre Mim</a>
          <a href='#projetos'>Projetos</a>
          {/*<a href='#'>Contato</a>*/}
        </div>
        <div className="contato-nav">
          <a href='https://t.me/liraDev' target='_blank'><FontAwesomeIcon icon={faTelegram} /></a>
          <a href='https://github.com/0lira'target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          <a href='https://www.linkedin.com/in/patrick-lira-62a946226/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <div className="main">
        <section id="home">
          <div className="welcome-content">
            <p>/*Hello World!*/</p>
            <h2>Eu sou Patrick Lira,</h2>
            <p>Desenvolvedor Web Front-End.</p>
          </div>
          <div className="welcome-animation">
            <div className="circle-animation">
              <div className="mini-circle"></div>
            <img id='image1' src={image1png}/>
            </div>
          </div>
        </section>
        <section id="sobre">
          <div className="texto">
            <h2>Sobre Mim</h2>
            <p>Olá! Meu nome é Patrick Lira e sou de São Paulo,<br>
            </br> tenho 20 anos e sou apaixonado por Tecnologia da Informação.<br>
            </br> Possuo habilidades de Desenvolvedor Front-End<br>
            </br> e tenho muito interesse em adquirir uma vaga na área para obter mais experiência.<br>
            </br> Estou estudando com cursos da Danki Code e em muitas outras documentações sendo um autodidata,<br>
            </br> onde no momento estou aprendendo React.Js.</p>
          </div>
          <div className="box-conhecimentos">
            <div className='titulo-box'>
              <h2>Conhecimentos</h2>
            </div>
            <div className="icons-dev">
              <FontAwesomeIcon className='icon' icon={faHtml5}/>
              <FontAwesomeIcon className='icon' icon={faCss3Alt}/>
              <FontAwesomeIcon className='icon' icon={faJsSquare}/>
              <FontAwesomeIcon className='icon' icon={faReact}/>
              <FontAwesomeIcon className='icon' icon={faGitAlt}/>
              <FontAwesomeIcon className='icon' icon={faGithubSquare}/>
            </div>
          </div>
        </section>
        <section id='projetos'>
          <div className='titulo-page'>
            <h2>Projetos</h2>
          </div>
          <div className='box-projetos'></div>
        </section>
        <section id='footer'>
          <p>{"< Lira Code >"}</p>
          <p>©2022 por Patrick Lira.</p>
          <small>Todos os direitos reservados.</small>
        </section>
      </div>
      
      
    </>
  )
}

export default App
