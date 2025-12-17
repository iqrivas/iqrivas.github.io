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
    <section className="flex justify-around">
      <div id="inicio_panel" className={activeTab === 'inicio' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
        <img className="h-52 w-auto rounded-full border border-black mx-auto" src={iqrivas} alt="Denisse Rivas" />
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm">¡Hola! Soy Denisse Rivas</div>
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-md">
          Mi carrera profesional se resume en resolver problemas a través del
          análisis de los requerimientos y el aprendizaje constante.
        </div>
      </div>
      <div id="experiencia_panel" className={activeTab === 'experiencia' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm">2020: Salesforce Admin/Developer</div>
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm">2019: Desarrollo Web (JS Stack)</div>
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm">2014 - 2019: Planeación Logística</div>
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm">2010 - 2014: Servicio al Cliente</div>
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm">2004 - 2010: Ingeniería Química</div>
      </div>
      <div id="proyectos_panel" className={activeTab === 'proyectos' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm">
          <img className="h-52 w-auto border border-black mx-auto" src={bettyb} alt="Proyecto Betty B" />
          <a className="underline text-black" href="https://www.bettybarreto.com" target="_blank" rel="noreferrer">
            Betty Barreto
          </a>
        </div>
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm">
          <img className="h-52 w-auto border border-black mx-auto" src={altarpterio} alt="Proyecto Altar de Pterio" />
          <a className="underline text-black" href="https://iqrivas.github.io/altardepterio" target="_blank" rel="noreferrer">
            El Altar de Pterio
          </a>
        </div>
      </div>
      <div id="contacto_panel" className={activeTab === 'contacto' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm">
          <a className="underline text-black" href="https://www.linkedin.com/in/iqrivas/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm">
          {emailVisible ? (
            <a className="underline text-black" href="mailto:iqrivas@gmail.com">iqrivas@gmail.com</a>
          ) : (
            <button type="button" className="bg-none border-none p-0 font-inherit cursor-pointer underline text-black" onClick={handleEmailClick}>
              Email
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Panel;
