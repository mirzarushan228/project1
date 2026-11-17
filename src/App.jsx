import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <p>Click the button below to test interactive state.</p>
      
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count is: {count}
      </button>
    </div>
  );
}

export default App;
