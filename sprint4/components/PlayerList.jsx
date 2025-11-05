import React from 'react';

const PlayerList = ({ players, onTogglePlayer, onDeletePlayer }) => {
  const handleFocus = (e) => {
    e.currentTarget.style.transform = 'scale(1.03)';
    setTimeout(() => (e.currentTarget.style.transform = 'scale(1)'), 150);
  };

  if (players.length === 0) {
    return (
      <div className="player-list empty">
        <p>Nenhuma jogadora cadastrada ainda.</p>
      </div>
    );
  }

  return (
    <ul className="player-list">
      {players.map(player => (
        <li 
          key={player.id}
          className={`player-item ${player.confirmed ? 'confirmed' : ''}`}
          onFocus={handleFocus}
          tabIndex={0}
        >
          <input
            type="checkbox"
            checked={player.confirmed}
            onChange={() => onTogglePlayer(player.id)}
            id={`player-${player.id}`}
          />
          <label htmlFor={`player-${player.id}`} className="player-name">
            {player.name}
          </label>
          <button 
            className="delete-btn"
            onClick={() => onDeletePlayer(player.id)}
            aria-label={`Remover ${player.name}`}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;
