import { useState } from 'react';
import altarpterio from '../images/altarpterio.png';
import bettyb from '../images/bettyb.png';
import iqrivas from '../images/iqrivas.jfif';

const Panel = ({ activeTab }) => {
  const [emailVisible, setEmailVisible] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    setEmailVisible(true);
  };

  return (
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
            <button type="button" className="link-button" onClick={handleEmailClick}>
              Email
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Panel;
