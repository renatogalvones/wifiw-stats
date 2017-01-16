import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import Seasons from './../components/Seasons';
import base from './../base';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: [],
      loading: true
    }
  }
  componentDidMount() {
    base.syncState('seasons', {
      context: this,
      state: 'seasons',
      asArray: true,
      then() {
        this.setState({loading: false})
        this.forceUpdate();
      }
    });
  }
  render() {
    return (
      <div>
        <h1>WiFIW Stats</h1>
        <Seasons seasons={this.state.seasons}/>
      </div>
    )
  }
}

export default Home;
