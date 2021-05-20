import React from 'react';

function Hero({ id, name, homeworld, gender, onClickAddHero }) {
  const onAddHero = () => {
    const obj = { id, name, homeworld, gender };
    onClickAddHero(obj);
  };

  return (
    <div
      className="card"
      style={{
        background: `url('https://starwars-visualguide.com/assets/img/characters/${id}.jpg') center center / cover no-repeat`,
      }}>
      <button onClick={onAddHero}>Добавить</button>
      <div className="card__name">{name}</div>
      <div className="card__homeworld">{homeworld}</div>
    </div>
  );
}

export default Hero;
