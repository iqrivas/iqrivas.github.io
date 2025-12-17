import { useState } from 'react';
import Tabs from 'components/Tabs';
import Panel from 'components/Panel';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto max-w-[800px] min-w-[360px] w-4/5 flex flex-col text-center">
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      <Panel activeTab={activeTab} />
    </div>
  );
}

export default App;
