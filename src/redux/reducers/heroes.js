const initialState = {
  items: [],
};

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HEROES':
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export default heroes;
