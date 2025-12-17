import Card from 'components/Card';
import iqrivas from 'images/iqrivas.jfif';

const Home = ({ activeTab }) => {
  return (
    <div id="inicio_panel" className={activeTab === 'inicio' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
      <img className="h-52 w-auto rounded-full border border-black mx-auto" src={iqrivas} alt="Denisse Rivas" />
      <Card size="2xl" className="text-left">
        <h2 className="text-center font-bold text-lg mb-4">¡Hola! Soy Denisse Rivas</h2>
        <p className="mb-3">Me dedico a resolver problemas y aprender sobre las herramientas que necesito para hacerlo. Soy bilingüe. Trabajé por 7 años en Logística y durante mi carrera profesional he trabajado en diferentes áreas:</p>
        <p className="mb-3 pl-8">
          ➡ Servicio al Cliente<br />
          ➡ Planeación Logística<br />
          ➡ Compras<br />
          ➡ Procesos de Mejora<br />
          ➡ Automatización de Procesos
        </p>
        <p className="mb-3">En 2019 cambié mi enfoque a la industria Tech y desde entonces me dedico a crear productos de tecnologías web.</p>
        <p className="mb-3">Actualmente, ayudo a empresas a integrar sus procesos de negocio a Salesforce.</p>
        <h3 className="font-bold mb-2">Tecnologías de Desarrollo</h3>
        <p className="mb-1">🌐 HTML | CSS | SASS | Bootstrap | TailwindCSS</p>
        <p className="mb-1">💻 Javascript | ReactJS | Node.js | Express</p>
        <p className="mb-1">📚 MySQL | MongoDB | Firebase | Git</p>
        <p>📈 Salesforce: Visualforce | Apex | Aura | Lightning Web Components</p>
      </Card>
    </div>
  );
};

export default Home;
