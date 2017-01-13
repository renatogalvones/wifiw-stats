import React from 'react';
import { Link } from 'react-router';


class Season extends React.Component {
  componentWillMount() {
    // this.setState({
    //   seasonId: this.props.params.seasonId
    // })
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>

          </tr>
          {
            // Object.keys(SeasonsData[this.props.params.seasonId].championships).map(function(key){
            //   return (
            //     <tr><td><Link to={`/seasons/${this.props.params.seasonId}`}>{key}</Link></td></tr>
            //   )
            // })
          }
        </tbody>
      </table>
    )
  }
}

export default Season;
