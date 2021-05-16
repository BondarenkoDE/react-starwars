import React from 'react';

function Heroes({ id, name, homeworld }) {
  return (
    <div
      className="card"
      style={{
        background: `url('https://starwars-visualguide.com/assets/img/characters/${id}.jpg') center center / cover no-repeat`,
      }}>
      <div className="card__name">{name}</div>
      <div className="card__homeworld">{homeworld}</div>
    </div>
  );
}

export default Heroes;
