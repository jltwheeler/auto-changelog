import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <header className="text-center">
        <h1 className="text-6xl">Hello world</h1>
      </header>
    </div>
  );
}

export default App;
