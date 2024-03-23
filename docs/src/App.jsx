import React from 'react';
import Background from './Components/Background';
import Card from './Components/Card';

function App() {
  return (
    <div className='relative flex gap-10 w-full h-screen bg-zinc-800'>
      <Background />
      <Card />
    </div>
  );
}

export default App;

