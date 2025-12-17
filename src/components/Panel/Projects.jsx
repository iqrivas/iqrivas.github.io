import Card from 'components/Card';
import bettyb from 'images/bettyb.png';
import altarpterio from 'images/altarpterio.png';

const Projects = ({ activeTab }) => {
  return (
    <div id="proyectos_panel" className={activeTab === 'proyectos' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
      <Card image={bettyb} alt="Proyecto Betty B" href="https://www.bettybarreto.com" linkText="Betty Barreto" />
      <Card image={altarpterio} alt="Proyecto Altar de Pterio" href="https://iqrivas.github.io/altardepterio" linkText="El Altar de Pterio" />
    </div>
  );
};

export default Projects;
