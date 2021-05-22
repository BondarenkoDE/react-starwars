const initialState = {
  sortBy: { name: 'Все', type: '' },
  searchName: '',
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === 'SET_SEARCH') {
    return {
      ...state,
      searchName: action.payload,
    };
  }
  return state;
};

export default filters;
