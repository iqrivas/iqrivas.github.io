const Tabs = ({ activeTab, onTabClick }) => {
  const tabs = ['inicio', 'experiencia', 'proyectos', 'contacto'];

  return (
    <nav id="tabs" className="tabs">
      {tabs.map((tab) => (
        <li
          key={tab}
          id={tab}
          className={activeTab === tab ? 'tabs__title--active tab' : 'tabs__title tab'}
          onClick={() => onTabClick(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </li>
      ))}
    </nav>
  );
};

export default Tabs;
