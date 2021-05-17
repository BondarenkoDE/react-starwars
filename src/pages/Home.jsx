import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, SortPopup, Heroes, Pagination } from '../components';

import { fetchHeroes } from '../redux/actions/heroes';
import { setPage } from '../redux/actions/pagination';
// import { setSortBy } from '../redux/actions/sort';

const Home = React.memo(function Home() {
  const dispatch = useDispatch();
  const { items, pagesNumbers } = useSelector(({ heroes }) => heroes);
  const page = useSelector(({ pagination }) => pagination.page);

  useEffect(() => {
    dispatch(fetchHeroes(page));
  }, [page]);

  const onChangePage = (page) => {
    dispatch(setPage(page));
  };

  return (
    <>
      <div className="filter">
        <Search />
        <SortPopup />
      </div>
      <div className="content">
        {items.map((obj) => (
          <Heroes key={obj.id} {...obj} />
        ))}
      </div>
      <div className="pagination">
        <Pagination pages={pagesNumbers} onClickChangePage={onChangePage} />
      </div>
    </>
  );
});

export default Home;
