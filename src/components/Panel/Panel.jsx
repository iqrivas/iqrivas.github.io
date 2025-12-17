import { useState } from 'react';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const Panel = ({ activeTab }) => {
  const [emailVisible, setEmailVisible] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    setEmailVisible(true);
  };

  return (
    <section className="flex justify-around">
      <Home activeTab={activeTab} />
      <Experience activeTab={activeTab} />
      <Projects activeTab={activeTab} />
      <Contact activeTab={activeTab} emailVisible={emailVisible} onEmailClick={handleEmailClick} />
    </section>
  );
};

export default Panel;
