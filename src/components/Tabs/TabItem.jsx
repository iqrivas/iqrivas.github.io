const TabItem = ({ tab, active, onClick }) => {
  const label = tab.charAt(0).toUpperCase() + tab.slice(1);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(tab);
    }
  };

  return (
    <li
      role="tab"
      aria-selected={active}
      id={`tab-${tab}`}
      tabIndex={0}
      className={`list-none px-1.5 text-white cursor-pointer transition-all duration-150 ${active ? 'font-bold border-b-4 border-white' : ''}`}
      onClick={() => onClick(tab)}
      onKeyDown={handleKeyDown}
    >
      {label}
    </li>
  );
};

export default TabItem;
