import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import Seasons from './../components/Seasons';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Wifiw Stats</h1>
        <Seasons />
      </div>
    )
  }
}

export default Home;
