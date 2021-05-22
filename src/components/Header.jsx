import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function Header() {
  const [activePage, setActivePage] = useState(1);

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
          <li
            className={classNames('header__item', { active: activePage === 1 })}
            onClick={() => setActivePage(1)}>
            Главная
          </li>
        </Link>
        <Link to="/favorites">
          <li
            className={classNames('header__item', { active: activePage === 2 })}
            onClick={() => setActivePage(2)}>
            Любимые герои
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
