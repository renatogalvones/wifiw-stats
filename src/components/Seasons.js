import React from 'react';
import { Link } from 'react-router';

class Seasons extends React.Component {
  constructor(props) {
    super();

  }
  render() {
    let seasons = this.props.seasons;
    return (
      <table>
        <tbody>
          <tr>
              <th>Temporadas</th>
          </tr>
          {
            Object.keys(seasons).map(function(season) {
              return (
                <tr key={seasons[season].id}>
                  <td>
                    <Link to={"/seasons/" + seasons[season].id}>{seasons[season].id}</Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

export default Seasons;
