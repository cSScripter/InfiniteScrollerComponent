import type { FC } from 'react';
import Scroller from './components/scroller';

const App: FC = () => {
  return <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-3xl">Scroller Preview</h1>
    <div>
      <Scroller />
      </div>
  </div>
};

export default App;
