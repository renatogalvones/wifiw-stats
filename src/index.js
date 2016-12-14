import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Home from './components/Home';
import Season from './components/Season';
import NotFound from './components/NotFound';

import './index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Root</h1>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/season/:seasonId" component={Season} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'));
