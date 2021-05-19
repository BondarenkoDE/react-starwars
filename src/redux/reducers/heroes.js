const initialState = {
  items: [],
  page: 1,
  pagesCount: [],
};

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HEROES':
      return { ...state, items: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_PAGES':
      return { ...state, pagesCount: action.payload };

    default:
      return state;
  }
};

export default heroes;
