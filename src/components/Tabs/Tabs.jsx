import TabItem from './TabItem';

const Tabs = ({ activeTab, onTabClick }) => {
  const tabs = ['inicio', 'experiencia', 'proyectos', 'contacto'];

  return (
    <nav id="tabs" role="tablist" className="flex justify-around bg-blue-900 py-2.5 rounded mb-5">
      {tabs.map((tab) => (
        <TabItem key={tab} tab={tab} active={activeTab === tab} onClick={onTabClick} />
      ))}
    </nav>
  );
};

export default Tabs;
