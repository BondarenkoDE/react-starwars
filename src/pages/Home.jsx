import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, SortPopup, Hero, Pagination, LoadingBlock } from '../components';

import { fetchHeroes } from '../redux/actions/heroes';
import { addFavoriteHero } from '../redux/actions/favorites';
import { setSortBy, setSearch } from '../redux/actions/filters';

const sortItems = [
  { name: 'Все', type: '' },
  { name: 'Мужской', type: 'male' },
  { name: 'Женский', type: 'female' },
];

const Home = React.memo(function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ heroes }) => heroes.items);
  const isLoading = useSelector(({ heroes }) => heroes.isLoading);
  const { sortBy, searchName } = useSelector(({ filters }) => filters);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfLFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = items.slice(indexOfLFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(fetchHeroes(searchName, sortBy));
    paginate(1);
  }, [searchName, sortBy]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddFavoriteHero = (obj) => {
    dispatch(addFavoriteHero(obj));
  };

  const onSearchByName = (name) => {
    dispatch(setSearch(name));
  };

  const onSelectSortType = (type) => {
    dispatch(setSortBy(type));
  };

  return (
    <>
      <div className="filter">
        <Search onSearchName={onSearchByName} />
        <SortPopup
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
          items={sortItems}
        />
      </div>
      <div className="content">
        {isLoading
          ? currentItems.map((item) => (
              <Hero onClickAddHero={handleAddFavoriteHero} key={item.id} {...item} />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <LoadingBlock className="card loader" key={index} />)}
      </div>
      <div className="pagination">
        <Pagination itemPerPage={itemPerPage} items={items} paginate={paginate} />
      </div>
    </>
  );
});

export default Home;
