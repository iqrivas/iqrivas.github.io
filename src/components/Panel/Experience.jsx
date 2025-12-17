import Card from 'components/Card';

const Experience = ({ activeTab }) => {
  return (
    <div id="experiencia_panel" className={activeTab === 'experiencia' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
      <Card>2020: Salesforce Admin/Developer</Card>
      <Card>2019: Desarrollo Web (JS Stack)</Card>
      <Card>2014 - 2019: Planeación Logística</Card>
      <Card>2010 - 2014: Servicio al Cliente</Card>
      <Card>2004 - 2010: Ingeniería Química</Card>
    </div>
  );
};

export default Experience;
