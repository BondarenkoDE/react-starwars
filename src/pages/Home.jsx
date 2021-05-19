import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, SortPopup, Heroes, Pagination } from '../components';

import { fetchHeroes } from '../redux/actions/heroes';

const Home = React.memo(function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ heroes }) => heroes);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfLFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = items.slice(indexOfLFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="filter">
        <Search />
        <SortPopup />
      </div>
      <div className="content">
        {currentItems.map((item) => (
          <Heroes key={item.id} {...item} />
        ))}
      </div>
      <div className="pagination">
        <Pagination itemPerPage={itemPerPage} items={items} paginate={paginate} />
      </div>
    </>
  );
});

export default Home;
