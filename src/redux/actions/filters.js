export const setSortBy = (gender) => ({
  type: 'SET_SORT_BY',
  payload: gender,
});

export const setSearch = (searchName) => ({
  type: 'SET_SEARCH',
  payload: searchName,
});
