import React from 'react';

function FavoriteHero({ id, name, homeworld }) {
  return (
    <div
      className="card"
      style={{
        background: `url('https://starwars-visualguide.com/assets/img/characters/${id}.jpg') center center / cover no-repeat`,
      }}>
      <div className="descr" style={{ justifyContent: 'flex-end' }}>
        <div className="descr__name">{name}</div>
        <div className="descr__homeworld">{homeworld}</div>
      </div>
    </div>
  );
}

export default FavoriteHero;
