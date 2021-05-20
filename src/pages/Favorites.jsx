import React from 'react';
import { useSelector } from 'react-redux';
import { FavoriteHero } from '../components';

function Favorites() {
  const items = useSelector(({ favorites }) => favorites.items);

  const addedHeroes = Object.keys(items).map((key) => {
    return items[key].items[0]; //из первых объектов вытащили первые объекты и заменили их на 0
  });

  return (
    <div className="content">
      {addedHeroes.map((item) => (
        <FavoriteHero key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Favorites;
