import React, { useState } from 'react';

const Search = React.memo(function Search({ onSearchName }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    onSearchName(searchText);
  };
  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Введите имя персонажа и нажмите Enter..."
        value={searchText}
        onChange={handleChange}
        className="search"
      />
    </form>
  );
});

export default Search;
