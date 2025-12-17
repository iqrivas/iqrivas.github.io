import Card from 'components/Card';
import bettyb from 'images/bettyb.png';
import altarpterio from 'images/altarpterio.png';
import savemymoney from 'images/savemymoney.png';
import nonnatuscoffee from 'images/nonnatuscoffee.png';

const Projects = ({ activeTab }) => {
  const entries = [
    {
      heading: 'Betty Barreto',
      subheading: 'Página principal para un grupo de Constelaciones Familiares y Meditaciones.',
      image: { src: bettyb, alt: 'Proyecto Betty Barreto' },
      body: [
        { type: 'label', label: 'Sitio Web:', link: { text: 'Betty Barreto', href: 'https://www.bettybarreto.com/' } },
        { type: 'label', label: 'Repositorio Frontend:', link: { text: 'Github', href: 'https://github.com/iqrivas/bettyb' } },
        ['Tecnologías:', 'React, React Router, Bootstrap'],
      ],
    },
    {
      heading: 'Proyecto Altar de Pterio',
      subheading: 'Inicia una cadena de oración en el Altar del Poderoso Pterio.',
      image: { src: altarpterio, alt: 'Proyecto Altar de Pterio' },
      body: [
        { type: 'label', label: 'Sitio Web:', link: { text: 'El Altar de Pterio', href: 'https://iqrivas.github.io/altardepterio' } },
        { type: 'label', label: 'Repositorio Frontend:', link: { text: 'Github', href: 'https://github.com/iqrivas/altardepterio' } },
        { type: 'label', label: 'Repositorio Backend:', link: { text: 'Github', href: 'https://github.com/iqrivas/altardepterio-api' } },
        'Frontend: React, Bootstrap',
        'Backend: MongoDB, Express',
      ],
    },
    {
      heading: 'Proyecto SaveMyMoney',
      subheading: 'Aplicación web para el registro de gastos e ingresos mensuales del usuario.',
      image: { src: savemymoney, alt: 'Proyecto SaveMyMoney' },
      body: [
        { type: 'label', label: 'Sitio Web:', link: { text: 'SaveMyMoney', href: 'https://iqrivas.github.io/savemymoney' } },
        { type: 'label', label: 'Repositorio:', link: { text: 'Github', href: 'https://github.com/iqrivas/savemymoney' } },
        ['Tecnologías:', 'HTML, CSS, Javascript, Firebase'],
      ],
    },
    {
      heading: 'Proyecto Nonnatus Coffee',
      subheading: 'Ordena y personaliza tu café con diferentes opciones de tamaño y endulzante.',
      image: { src: nonnatuscoffee, alt: 'Proyecto Nonnatus Coffee' },
      body: [
        { type: 'label', label: 'Sitio Web:', link: { text: 'Nonnatus Coffee', href: 'https://iqrivas.github.io/nonnatuscoffee' } },
        { type: 'label', label: 'Repositorio:', link: { text: 'Github', href: 'https://github.com/iqrivas/nonnatuscoffee' } },
        ['Tecnologías:', 'HTML, CSS, Javascript'],
      ],
    },
  ];

  return (
    <div id="proyectos_panel" className={activeTab === 'proyectos' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
      {entries.map((e) => (
        <Card
          key={e.heading}
          image={e.image?.src}
          alt={e.image?.alt}
        >
          <h4 className="font-bold">
            {e.heading}
          </h4>
          <p className="font-normal mb-4">{e.subheading}</p>
          {e.body.map((b, i) => {
            if (Array.isArray(b)) {
              return (
                <p key={i} className="text-md italic">
                  {b.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < b.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              );
            }
            if (typeof b === 'string') {
              return (
                <p key={i} className={i > 0 ? 'text-md italic' : 'text-md italic '}>{b}</p>
              );
            }
            if (b.type === 'label' && b.label && b.link) {
              return (
                <p key={i} className={i > 0 ? 'mb-4 text-sm leading-tight' : 'text-sm leading-tight'}>
                  {b.label} <a className="underline text-black" href={b.link.href} target="_blank" rel="noreferrer">{b.link.text}</a>
                </p>
              );
            }
            return null;
          })}
        </Card>
      ))}
    </div>
  );
};

export default Projects;
