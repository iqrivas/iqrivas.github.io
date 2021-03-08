import React from 'react';
import './App.css';
import './css/main.css';
import {handleTab, handleEmail} from './main.js';

function App() {
  return (
    <div className="App">
      <nav id="tabs" className="tabs">
        <li id="inicio" className="tabs__title--active tab" onClick={handleTab} >Inicio</li>
        <li id="experiencia" className="tabs__title tab" onClick={handleTab} >Experiencia</li>
        <li id="proyectos" className="tabs__title tab" onClick={handleTab} >Proyectos</li>
        <li id="contacto" className="tabs__title tab" onClick={handleTab} >Contacto</li>
      </nav>

      <section className="main">
        <div id="inicio_panel" className="main__panel">
          <div className="main__panelcard--intro">¡Hola! Soy Denisse Rivas</div>
          <div className="main__panelcard--intro">
            Mi carrera profesional se resume en resolver problemas a través del
            análisis de los requerimientos y el aprendizaje constante.
          </div>
        </div>
        <div id="experiencia_panel" className="main__panel--hidden">
          <div className="main__panelcard">2020: Salesforce Admin/Developer</div>
          <div className="main__panelcard">2019: Desarrollo Web (JS Stack)</div>
          <div className="main__panelcard">2014 - 2019: Planeación Logística</div>
          <div className="main__panelcard">2010 - 2014: Servicio al Cliente</div>
          <div className="main__panelcard">2004 - 2010: Ingeniería Química</div>
        </div>
        <div id="proyectos_panel" className="main__panel--hidden">
          <div className="main__panelcard">
            <a href="https://www.bettybarreto.com" target="_blank" rel="noreferrer">
              Betty Barreto
            </a>
          </div>
        </div>
        <div id="contacto_panel" className="main__panel--hidden">
          <div className="main__panelcard">
            <a href="https://www.linkedin.com/in/iqrivas/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="main__panelcard">
            <a href="#" className="hiddenMail" data-email="iqrivasARRgmailPUNcom" rel="noreferrer" onClick={handleEmail}>
              Email
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
