import React from 'react';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

// Bouton pour changer le thème
function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h2>Thème actuel : {theme}</h2>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Passer en mode sombre 🌙' : 'Passer en mode clair ☀️'}
      </button>
    </div>
  );
}

function ThemeApp() {
  return (
    <ThemeProvider>
      <ToggleThemeButton />
    </ThemeProvider>
  );
}

export default ThemeApp;
