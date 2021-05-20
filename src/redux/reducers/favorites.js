const initialState = {
  items: {},
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_HERO':
      const curentHeroItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: curentHeroItems,
        },
      };
      return {
        ...state,
        items: newItems,
      };
    default:
      return state;
  }
};

export default favorites;
