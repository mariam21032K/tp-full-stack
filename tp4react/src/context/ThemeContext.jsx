import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
          color: theme === 'light' ? '#000' : '#fff',
          minHeight: '10vh',
          transition: '0.3s',
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
