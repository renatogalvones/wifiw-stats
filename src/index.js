import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

// import Home from './components/Home';
// import Season from './components/Season';
// import Seasons from './components/Seasons';
// import NotFound from './components/NotFound';
import Race from './components/Race';

import './index.css';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <Route path="/" component={Race} />
        {/* <Match exactly pattern="/seasons/" component={Home} />
        <Match pattern="/seasons/:seasonId" component={Season} />
        <Match patter="/corrida/" component={Race} /> */}
        {/* <Miss component={NotFound} /> */}
      </BrowserRouter>
    </Provider>
  );
};

render(<Root />, document.getElementById('root'));
