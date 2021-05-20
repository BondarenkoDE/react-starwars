import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, SortPopup, Hero, Pagination } from '../components';

import { fetchHeroes } from '../redux/actions/heroes';
import { addFavoriteHero } from '../redux/actions/favorites';

const Home = React.memo(function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ heroes }) => heroes.items);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfLFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = items.slice(indexOfLFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddFavoriteHero = (obj) => {
    dispatch(addFavoriteHero(obj));
  };

  return (
    <>
      <div className="filter">
        <Search />
        <SortPopup />
      </div>
      <div className="content">
        {currentItems.map((item) => (
          <Hero onClickAddHero={handleAddFavoriteHero} key={item.id} {...item} />
        ))}
      </div>
      <div className="pagination">
        <Pagination itemPerPage={itemPerPage} items={items} paginate={paginate} />
      </div>
    </>
  );
});

export default Home;
