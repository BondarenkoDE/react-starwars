import { combineReducers } from 'redux';

import heroes from './heroes';
import pagination from './pagination';
import filters from './filters';
import favorites from './favorites';

const rootReducer = combineReducers({
  heroes,
  pagination,
  filters,
  favorites,
});

export default rootReducer;
