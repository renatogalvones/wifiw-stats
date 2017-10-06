// eslint-disable-next-line no-underscore-dangle
import { createStore } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;
