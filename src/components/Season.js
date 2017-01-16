import React from 'react';
import { Link } from 'react-router';
import base from './../base';

class Season extends React.Component {
  constructor(props) {
    super();

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

    base.syncState('coaches', {
      context: this,
      state: 'coaches',
      asArray: true,
      then() {
        // this.state.coaches.map((coach) => {
        //   console.log(coach);
        // })

      }
    });
  }

  header() {
    return (
      <thead>
        <tr>
            <th>Campeonatos</th>
        </tr>
      </thead>
    )
  }

  listChampionships() {
    let seasons = this.state.seasons;
    let season = seasons.filter((season) => {
      return this.props.params.seasonId === season.id
    });

    if (seasons.length > 0) {
      Object.keys(season[0].championships).map(function(championship) {
        console.log(season[0].championships[championship].name);
        var x = season[0].championships[championship].games.filter((value) => {
          return (value.teamA.match('Renato') || value.teamA.match('RG Ganso'));
        });

        console.log(x);

        // return (
        //   <tr key={seasons[season].id}>
        //     <td>
        //       <Link to={"/seasons/" + seasons[season].id}>{seasons[season].id}</Link>
        //     </td>
        //   </tr>
        // )
      })

    }

    return (
      <tbody></tbody>
    )
  }

  render() {


    return (
      <table>
        { this.header() }
        { this.listChampionships() }
      </table>
    )
  }
}

export default Season;
