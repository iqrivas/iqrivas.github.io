import React, { useState } from 'react';
import './App.css';
import './css/main.css';
import Tabs from './components/Tabs';
import Panel from './components/Panel';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      <Panel activeTab={activeTab} />
    </div>
  );
}

export default App;
