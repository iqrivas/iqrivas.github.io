import React, { useState } from 'react';
import './App.css';
import './css/main.css';
import altarpterio from './images/altarpterio.png';
import bettyb from './images/bettyb.png';
import iqrivas from './images/iqrivas.jfif';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [emailVisible, setEmailVisible] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    setEmailVisible(true);
  };

  return (
    <div className="App">
      <nav id="tabs" className="tabs">
        <li
          id="inicio"
          className={activeTab === 'inicio' ? 'tabs__title--active tab' : 'tabs__title tab'}
          onClick={() => handleTabClick('inicio')}
        >
          Inicio
        </li>
        <li
          id="experiencia"
          className={activeTab === 'experiencia' ? 'tabs__title--active tab' : 'tabs__title tab'}
          onClick={() => handleTabClick('experiencia')}
        >
          Experiencia
        </li>
        <li
          id="proyectos"
          className={activeTab === 'proyectos' ? 'tabs__title--active tab' : 'tabs__title tab'}
          onClick={() => handleTabClick('proyectos')}
        >
          Proyectos
        </li>
        <li
          id="contacto"
          className={activeTab === 'contacto' ? 'tabs__title--active tab' : 'tabs__title tab'}
          onClick={() => handleTabClick('contacto')}
        >
          Contacto
        </li>
      </nav>

      <section className="main">
        <div id="inicio_panel" className={activeTab === 'inicio' ? 'main__panel' : 'main__panel--hidden'}>
          <img className="main__img" src={iqrivas} alt="Denisse Rivas" />
          <div className="main__panelcard--intro">¡Hola! Soy Denisse Rivas</div>
          <div className="main__panelcard--intro">
            Mi carrera profesional se resume en resolver problemas a través del
            análisis de los requerimientos y el aprendizaje constante.
          </div>
        </div>
        <div id="experiencia_panel" className={activeTab === 'experiencia' ? 'main__panel' : 'main__panel--hidden'}>
          <div className="main__panelcard">2020: Salesforce Admin/Developer</div>
          <div className="main__panelcard">2019: Desarrollo Web (JS Stack)</div>
          <div className="main__panelcard">2014 - 2019: Planeación Logística</div>
          <div className="main__panelcard">2010 - 2014: Servicio al Cliente</div>
          <div className="main__panelcard">2004 - 2010: Ingeniería Química</div>
        </div>
        <div id="proyectos_panel" className={activeTab === 'proyectos' ? 'main__panel' : 'main__panel--hidden'}>
          <div className="main__panelcard">
            <img className="project__img" src={bettyb} alt="Proyecto Betty B" />
            <a href="https://www.bettybarreto.com" target="_blank" rel="noreferrer">
              Betty Barreto
            </a>
          </div>
          <div className="main__panelcard">
            <img className="project__img" src={altarpterio} alt="Proyecto Altar de Pterio" />
            <a href="https://iqrivas.github.io/altardepterio" target="_blank" rel="noreferrer">
              El Altar de Pterio
            </a>
          </div>
        </div>
        <div id="contacto_panel" className={activeTab === 'contacto' ? 'main__panel' : 'main__panel--hidden'}>
          <div className="main__panelcard">
            <a href="https://www.linkedin.com/in/iqrivas/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="main__panelcard">
            {emailVisible ? (
              <a href="mailto:iqrivas@gmail.com">iqrivas@gmail.com</a>
            ) : (
              <a href="#" onClick={handleEmailClick}>
                Email
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
