import React, { useState } from 'react';
import classNames from 'classnames';

const Pagination = React.memo(function Pagination({ pages, onClickChangePage }) {
  const [activePage, setActivePage] = useState(1);

  const onClickPage = (item) => {
    setActivePage(item);
    onClickChangePage(item);
  };

  return (
    <>
      <ul className="pagination__items">
        {pages.map((item, index) => (
          <li
            key={index}
            className={classNames('pagination__item', { active: activePage === item })}
            onClick={() => onClickPage(item)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
});

export default Pagination;
