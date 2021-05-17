import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img
            src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/06/Logo-Amarelo-Star-Wars-PNG.png"
            alt="logo-star-wars"
          />
        </div>
      </Link>

      <ul className="header__menu">
        <Link to="/">
          <li className="header__item">Главная</li>
        </Link>
        <Link to="/favorites">
          <li className="header__item">Любимые герои</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
