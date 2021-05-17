const initialState = {
  items: [],
  page: 1,
  pagesNumbers: [],
};

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HEROES':
      return { ...state, items: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_PAGES':
      return { ...state, pagesNumbers: action.payload };

    default:
      return state;
  }
};

export default heroes;
