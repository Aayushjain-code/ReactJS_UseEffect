
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [first, setfirst] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${first}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [first]);
  return (
    <div className="App">
      <button onClick={(e) => setfirst(e.target.innerText)}>Posts</button>
      <button onClick={(e) => setfirst(e.target.innerText)}>Users</button>
      <button onClick={(e) => setfirst(e.target.innerText)}>Comments</button>
      <h1>{first}</h1>
      {items.map(item =>
        <pre>
          {JSON.stringify(item.name)}
        </pre>
      )}
    </div>
  );
}

export default App;
