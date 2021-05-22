import React, { useState } from 'react';
import classNames from 'classnames';

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
      <div className="card__hearth">
        <button onClick={onAddHero} className="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            x="0"
            y="0"
            enableBackground="new 0 0 437.775 437.774"
            version="1.1"
            viewBox="0 0 437.775 437.774"
            xmlSpace="preserve">
            <path d="M316.722 29.761c66.852 0 121.053 54.202 121.053 121.041 0 110.478-218.893 257.212-218.893 257.212S0 266.569 0 150.801c0-83.217 54.202-121.04 121.041-121.04 40.262 0 75.827 19.745 97.841 49.976 22.017-30.231 57.588-49.976 97.84-49.976z"></path>
          </svg>
        </button>
      </div>
      <div className="descr">
        <div className="descr__name">{name}</div>
        <div className="descr__homeworld">{homeworld}</div>
      </div>
    </div>
  );
}

export default Hero;
