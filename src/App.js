
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [first, setfirst] = useState('');

  useEffect(() => {
    console.log("Rendered");
  }, [first]);
  return (
    <div className="App">
      <button onClick={(e) => setfirst(e.target.innerText)}>First</button>
      <button onClick={(e) => setfirst(e.target.innerText)}>Second</button>
      <button onClick={(e) => setfirst(e.target.innerText)}>Third</button>
      <h1>{first}</h1>
    </div>
  );
}

export default App;
