import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //если есть расширение Redux, то выполнится первая функция, если нет, выполнится обычный редаксовский compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
