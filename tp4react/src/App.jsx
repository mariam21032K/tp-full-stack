import React from 'react';
import Time from './Components/Time';
import ThemeApp from './Components/ThemeApp';
import { UserProvider } from './context/UserContext';
import { useContext, useState, useEffect } from 'react';


function UserProfile() {
  const { user, toggleConnection } = useContext(UserContext);

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Profil utilisateur</h2>
      <p>Nom : {user.name}</p>
      <p>Status : {user.connected ? '✅ Connecté' : '❌ Déconnecté'}</p>
      <button onClick={toggleConnection}>
        {user.connected ? 'Se déconnecter' : 'Se connecter'}
      </button>
    </div>
  );
}

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([
        "Bienvenue dans l'application !",
        'Nouveau message reçu',
        'Mise à jour disponible',
      ]);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Chargement des notifications...</p>;

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

function NotificationCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: 20 }}>
      <p>Notifications lues : {count}</p>
      <button onClick={() => setCount(count + 1)}>Marquer une notification lue</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 10 }}>
        Réinitialiser
      </button>
    </div>
  );
}

import { UserContext } from './context/UserContext';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>TP React Hooks — useState / useEffect / useContext</h1>

      {/* ==== Exercice 1 ==== */}
      <h2>Exercice 1 – Heure actuelle</h2>
      <Time />

      <hr />

      {/* ==== Exercice 2 ==== */}
      <h2>Exercice 2 – Thème clair/sombre</h2>
      <ThemeApp />

      <hr />

      {/* ==== TP Complet ==== */}
      <UserProvider>
        <h2>TP – Profil, Notifications et Compteur</h2>
        <UserProfile />
        <Notifications />
        <NotificationCounter />
      </UserProvider>
    </div>
  );
}

export default App;
