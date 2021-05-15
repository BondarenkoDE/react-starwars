import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, SortPopup, Heroes } from '../components';

import { fetchHeroes } from '../redux/actions/heroes';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ heroes }) => heroes.items);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchHeroes(page));
  }, [page]);
  return (
    <>
      <div className="filter">
        <Search />
        <SortPopup />
      </div>
      <div className="content">
        {items.map((obj, index) => (
          <Heroes key={`${obj.name}_${index}`} {...obj} />
        ))}
      </div>

      <div className="pagination"></div>
    </>
  );
}

export default Home;
