import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import coaches from './coaches';

const rootReducer = combineReducers({
  coaches,
  routing: routerReducer,
});

export default rootReducer;
