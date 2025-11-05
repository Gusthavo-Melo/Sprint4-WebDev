import React from 'react';

const PlayerStats = ({ players }) => {
  const total = players.length;
  const confirmed = players.filter(p => p.confirmed).length;
  const pending = total - confirmed;

  return (
    <div className="player-stats">
      <div className="stat-item">
        <h3>Total</h3>
        <span>{total}</span>
      </div>
      <div className="stat-item">
        <h3>Confirmadas</h3>
        <span>{confirmed}</span>
      </div>
      <div className="stat-item">
        <h3>Faltando</h3>
        <span>{pending}</span>
      </div>
    </div>
  );
};

export default PlayerStats;
