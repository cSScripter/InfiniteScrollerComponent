import { useState, type FC } from 'react';
import ToggleButton from './components/togglebutton';
import Scroller from './components/scroller';

const App: FC = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };
  return <div className="flex flex-col justify-center items-center h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
    <h1 className="text-3xl">Scroller Preview</h1>

    <ToggleButton isDarkMode={darkMode} onToggle={toggleDarkMode} />
    <div>
      <Scroller />
      </div>
  </div>
};

export default App;
