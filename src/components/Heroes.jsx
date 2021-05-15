import React from 'react';

function Heroes({ name }) {
  return (
    <div
      className="card"
      style={{
        background:
          "url('https://img1.wbstatic.net/big/new/15720000/15721263-1.jpg') center center / cover no-repeat",
      }}>
      <div className="card__name">{name}</div>
      <div className="card__homeworld">Татуинчик</div>
    </div>
  );
}

export default Heroes;
