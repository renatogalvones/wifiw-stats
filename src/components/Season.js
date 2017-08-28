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
        const seasons = this.state.seasons;
        console.log(seasons);
        seasons[0].championships[0].coaches[3] = 'PORTUGAL - Vitor Zagallo';
        console.log(seasons[0].championships[0].coaches[2]);
        this.setState({ seasons: seasons });
        this.setState({ loading: false });
        // this.updateSeason();
      }
    });
  }



  updateSeason() {
    this.updateTeams();
    this.calcGames();
  }

  updateTeams() {
    console.log('updateTeams');
    let seasons = this.getSeasons(),
        season = this.getSeason();

    Object.keys(season.championships).map(function(championship) {
      let teams = [],
          uniqueTeams = [],
          champ = season.championships[championship];

      champ.games.map((game) => {
        teams.push(game.teamA, game.teamB);
      })

      season.championships[championship].teams = _uniq(teams);
    })

    seasons.map((season, index) => {
      if (season.id === this.getSelectedSeason()) {
        seasons[index] = season;
      };
    })

    this.setState({
      seasons: seasons
    });


  }

  getSelectedSeason() {
    return this.props.params.seasonId;
  }

  getSeasons() {
    return this.state.seasons
  }

  getSeason() {
    let seasons = this.getSeasons();
    let season = seasons.filter((season) => {
      return this.props.params.seasonId === season.id
    });

    return season[0];
  }

  calcGames() {
    let seasons = this.state.seasons;

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


  render() {
    return (
      <table>
        { this.header() }
      </table>
    )
  }
}

export default Season;
