import React from 'react';
import { Link } from 'react-router';
import base from './../base';
import _uniq from 'lodash.uniq';

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
        let teams = [],
            uniqueTeams = [],
            champ = season[0].championships[championship];

        champ.games.map((game) => {
          teams.push(game.teamA, game.teamB);
        })

        console.log(_uniq(teams));;
        // console.log(uniqueTeams);


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
