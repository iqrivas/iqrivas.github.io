import Card from 'components/Card';
import iqrivas from 'images/iqrivas.jfif';

const Home = ({ activeTab }) => {
  return (
    <div id="inicio_panel" className={activeTab === 'inicio' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
      <img className="h-52 w-auto rounded-full border border-black mx-auto" src={iqrivas} alt="Denisse Rivas" />
      <Card>¡Hola! Soy Denisse Rivas</Card>
      <Card className="max-w-md">
        Mi carrera profesional se resume en resolver problemas a través del
        análisis de los requerimientos y el aprendizaje constante.
      </Card>
    </div>
  );
};

export default Home;
