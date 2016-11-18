import React, { Component } from 'react';
import Rebase from 're-base';
import seasons from './seasons';

import './App.css';

const base = Rebase.createClass({
    apiKey: "AIzaSyCsLajAxV1VFZvRPBWlVRPlmdIGz7Bm3RI",
    authDomain: "wifiw-cd757.firebaseapp.com",
    databaseURL: "https://wifiw-cd757.firebaseio.com",
    storageBucket: "wifiw-cd757.appspot.com",
    messagingSenderId: "574098281160"
});

console.log(seasons);

class App extends Component {
    getInitialState() {
      return {
        saci : true
      }
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <table>
              <tr>
                  <th>Campoenato</th>
              </tr>
              <tr>
                  <td></td>
              </tr>
          </table>
        </p>
      </div>
    );
  }
}

export default App;
