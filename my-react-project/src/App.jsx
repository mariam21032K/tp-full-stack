import React, { useState, createContext, useContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Welcome from './Welcome';
import Counter from './Counter';
import Form from './Form';
import ShoppingList from './ShoppingList';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Logos and links section */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1>Vite + React</h1>

      {/* Counter section */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Documentation link */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Custom Components */}
      <Welcome name="Mariam" />
      <Counter />
      <Form />
      <ShoppingList />
    </>
  );
}

export default App;