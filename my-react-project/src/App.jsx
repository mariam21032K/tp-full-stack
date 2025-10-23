import React, { useState, createContext, useContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Welcome from './Welcome';
import Counter from './Counter';
import Form from './Form';
import ShoppingList from './ShoppingList';

// Création du contexte
const ThemeContext = createContext();

//  Provider du contexte
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//Bouton qui consomme le contexte
function ToggleThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Thème actuel : {theme}
    </button>
  );
}

// Composant principal
function App() {
  const [count, setCount] = useState(0);

  return (
    // On englobe tout dans ThemeProvider pour partager le contexte
    <ThemeProvider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Tes autres composants */}
      <Welcome name="Mariam" />
      <Counter />
      <Form />
      <ShoppingList />

      {/* Ajout du bouton pour changer le thème */}
      <ToggleThemeButton />
    </ThemeProvider>
  );
}

export default App;
