import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

// import Home from './components/Home';
// import Season from './components/Season';
// import Seasons from './components/Seasons';
// import NotFound from './components/NotFound';
import Race from './components/Race';

import './index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Race} />
        {/* <Match exactly pattern="/seasons/" component={Home} />
        <Match pattern="/seasons/:seasonId" component={Season} />
        <Match patter="/corrida/" component={Race} /> */}
        {/* <Miss component={NotFound} /> */}
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'));
