import { combineReducers } from 'redux';

import heroes from './heroes';
import sort from './sort';
import pagination from './pagination';

const rootReducer = combineReducers({
  heroes,
  sort,
  pagination,
});

export default rootReducer;
