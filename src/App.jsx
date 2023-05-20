import { useState } from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <>
      <div className='header'>
        <div className='logomarca'>
          <h2>Lira Code</h2>
        </div>
        <div className='menu-header'>
          <a href='#'>Home</a>
          <a href='#'>Sobre Mim</a>
          <a href='#'>Projetos</a>
          <a href='#'>Contato</a>
        </div>
        <div className="contato-nav">
          <a href='#'><FontAwesomeIcon icon={faTelegram} /></a>
          <a href='https://github.com/0lira'target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <div className="main">
        <section id="home">
          <div className="welcome-content">
            <p>Hello World!</p>
            <h2>Eu sou Patrick Lira,</h2>
            <p>Desenvolvedor Web Front-End.</p>
          </div>
          <div className="welcome-animation">
            <div className="circle-animation"></div>
          </div>
        </section>
      </div>
      
      
    </>
  )
}

export default App
