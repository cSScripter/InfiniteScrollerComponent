import { useState, type FC } from 'react';
import ToggleButton from './components/togglebutton';
import Scroller from './components/scroller';

const App: FC = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };
  return <div className={`flex flex-col justify-center gap-y-8 items-center h-screen
                        bg-white text-black dark:bg-gray-900 dark:text-white
                        ${darkMode ? 'dark' : ''}`}>
    <ToggleButton isDarkMode={darkMode} onToggle={toggleDarkMode} />
    <h1 className="text-3xl">Scroller Preview</h1>
    <div>
      <Scroller darkMode={darkMode} />
      </div>
  </div>
};

export default App;
