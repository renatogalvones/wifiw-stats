import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import coaches from './coaches';
import championships from './championships';

const rootReducer = combineReducers({
  coaches,
  championships,
  routing: routerReducer,
});

export default rootReducer;
