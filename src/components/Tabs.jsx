const Tabs = ({ activeTab, onTabClick }) => {
  const tabs = ['inicio', 'experiencia', 'proyectos', 'contacto'];

  return (
    <nav id="tabs" className="flex justify-around bg-blue-900 py-2.5 rounded mb-5">
      {tabs.map((tab) => (
        <li
          key={tab}
          id={tab}
          className={`list-none px-1.5 text-white cursor-pointer ${activeTab === tab ? 'font-bold border-b-4 border-white' : ''}`}
          onClick={() => onTabClick(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </li>
      ))}
    </nav>
  );
};

export default Tabs;
