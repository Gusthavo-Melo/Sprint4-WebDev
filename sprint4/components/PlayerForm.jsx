import React, { useState } from 'react';

const PlayerForm = ({ onAddPlayer }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('player-input');

    if (inputValue.trim()) {
      onAddPlayer(inputValue.trim());
      setInputValue('');
      input.classList.add('success');
      setTimeout(() => input.classList.remove('success'), 800);
    } else {
      input.classList.add('error');
      setTimeout(() => input.classList.remove('error'), 800);
    }
  };

  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          id="player-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Adicionar jogadora..."
          aria-label="Nova jogadora"
        />
        <button type="submit" className="add-btn">Adicionar</button>
      </div>
    </form>
  );
};

export default PlayerForm;
