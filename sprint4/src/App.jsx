import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/PlayerForm';
import PlayerStats from '../components/PlayerStats';

function App() {
  const [players, setPlayers] = useState([]);
  const [filter, setFilter] = useState('all'); // all, confirmed, unconfirmed

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const mockApiResponse = {
          data: [
            { id: 1, name: 'Ana Silva', confirmed: true },
            { id: 2, name: 'Bruna Costa', confirmed: false },
            { id: 3, name: 'Carla Souza', confirmed: true },
            { id: 4, name: 'Débora Lima', confirmed: false },
          ],
        };
        setTimeout(() => setPlayers(mockApiResponse.data), 500);
      } catch (error) {
        console.error('Erro ao carregar jogadoras:', error);
      }
    };

    fetchPlayers();
  }, []);

  const addPlayer = (name) => {
    const newPlayer = { id: Date.now(), name, confirmed: false };
    setPlayers([...players, newPlayer]);
  };

  const togglePlayer = (id) => {
    setPlayers(players.map(p => 
      p.id === id ? { ...p, confirmed: !p.confirmed } : p
    ));
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter(p => p.id !== id));
  };

  const filteredPlayers = players.filter(p => {
    if (filter === 'confirmed') return p.confirmed;
    if (filter === 'unconfirmed') return !p.confirmed;
    return true;
  });

  return (
    <div className="App">
      <header className="app-header">
        <h1>Passa a Bola</h1>
        <p>Lista de Chamada - Pelada ⚽</p>
      </header>

      <main className="app-main">
        <PlayerStats players={players} />
        <PlayerForm onAddPlayer={addPlayer} />

        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            Todas
          </button>
          <button 
            className={filter === 'confirmed' ? 'active' : ''}
            onClick={() => setFilter('confirmed')}
          >
            Confirmadas
          </button>
          <button 
            className={filter === 'unconfirmed' ? 'active' : ''}
            onClick={() => setFilter('unconfirmed')}
          >
            Faltando Confirmar
          </button>
        </div>

        <PlayerList 
          players={filteredPlayers}
          onTogglePlayer={togglePlayer}
          onDeletePlayer={deletePlayer}
        />
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 - Passa a Bola ⚽</p>
      </footer>
    </div>
  );
}

export default App;
