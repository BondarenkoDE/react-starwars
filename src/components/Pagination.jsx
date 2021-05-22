import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

function Pagination({ itemPerPage, items, paginate }) {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items.length / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const changePage = (number) => {
    setActivePage(number);
    paginate(number);
  };

  return (
    <>
      <ul className="pagination__items">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={classNames('pagination__item', { active: activePage === number })}
            onClick={() => changePage(number)}>
            {number}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Pagination;
