import Card from 'components/Card';
import adminImg from 'images/admin.png';
import devImg from 'images/developer.png';

const Experience = ({ activeTab }) => {
  const entries = [
    {
      heading: '2023 to present: Certified Salesforce Developer',
      body: [

      ],
      image: { src: devImg, alt: 'Certified Developer', className: 'w-20 h-auto mx-auto mt-2' },
    },
    {
      heading: '2021: Platzi Master',
      body: [
        'Programa de capacitación intensa y personalizada enfocado en el crecimiento del perfil profesional como desarrolladora.',
      ],
    },
    {
      heading: '2020: Salesforce Admin/Developer',
      body: [
        'Integración del proceso de negocio a Salesforce. Creación de interfaces. Mejora y automatización de procesos.',
        { type: 'link', text: 'Perfil en Trailhead', href: 'https://trailblazer.me/id/iqrivas' },
      ],
      image: { src: adminImg, alt: 'Certified Administrator', className: 'w-20 h-auto mx-auto mt-2' },
    },
    {
      heading: '2019: Desarrollo Web (JS Stack)',
      body: [
        'Fullstack JavaScript Bootcamp en Bedu.',
        'Platzi Plataforma de Aprendizaje Online',
        { type: 'link', text: 'Perfil en Platzi', href: 'https://platzi.com/p/iqrivas/' },
      ],
    },
    {
      heading: '2014 - 2019: Planeación Logística',
      body: [
        'Garantizar disponibilidad de producto.',
        'Optimización de costos logísticos (almacenamiento, compras, transportes).',
      ],
    },
    {
      heading: '2010 - 2014: Servicio al Cliente',
      body: [
        'Soporte vía telefónica a clientes de empresas americanas. English Spoken.',
        'Asignación de producto y suministro de pedidos.',
      ],
    },
    {
      heading: '2004 - 2010: Ingeniería Química',
      body: [
        'Universidad de Guadalajara.',
      ],
    },
  ];
  return (
    <div id="experiencia_panel" className={activeTab === 'experiencia' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
      {entries.map((e) => (
        <Card key={e.heading} size="md">
          <h4 className="font-bold mb-1">{e.heading}</h4>
          {e.body.map((b, i) => {
            if (typeof b === 'string') {
              return (
                <p key={i} className={i > 0 ? 'mt-2' : undefined}>
                  {b}
                </p>
              );
            }
            if (b.type === 'link') {
              return (
                <p key={i} className="mt-2">
                  <a className="underline text-black" href={b.href} target="_blank" rel="noreferrer">
                    {b.text}
                  </a>
                </p>
              );
            }
            return null;
          })}
          {e.image && (
            <img className={e.image.className} src={e.image.src} alt={e.image.alt} />
          )}
        </Card>
      ))}
    </div>
  );
};

export default Experience;
