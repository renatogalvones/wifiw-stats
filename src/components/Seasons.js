import React from 'react';
import { Link } from 'react-router';
import SeasonsData from './../seasons';

class Season extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
              <th>Temporadas</th>
          </tr>
          {
            Object.keys(SeasonsData).map(function(key){
              return (
                <tr><td><Link {...this.props} to={"/seasons/" + key}>{key}</Link></td></tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

export default Season;
