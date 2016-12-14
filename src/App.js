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

class App extends Component {
    getInitialState() {
      return {
        seasons : seasons
      }
    }
  render() {
    return (
      <div className="App">
          <table>
            <tbody>
              <tr>
                  <th>Temporada</th>
              </tr>
                  {(Object.keys(seasons).map(function(key){
                    return (
                      <tr><td><a href="/{{key}}">{key}</a></td></tr>
                    )
                  }))}
            </tbody>
          </table>
      </div>
    );
  }
}

export default App;
