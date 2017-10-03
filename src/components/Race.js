import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCoach } from '../actions/';

class Race extends Component {
  constructor() {
    super();

    this.addCoach = this.addCoach.bind(this);
  }

  addCoach(e) {
    e.preventDefault();
    const { onAddCoach } = this.props;
    const newCoach = this.newCoach.value;
    this.newCoach.value = '';
    onAddCoach(newCoach);
  }

  render() {
    const { coaches } = this.props;
    const coachesList = [];
    coaches.forEach(coach => coachesList.push(<tr key={coach.id}><td>{coach.name}</td></tr>));

    return (
      <div>
        {/* <h1>Corrida dos campeões</h1> */}
        <form onSubmit={this.addCoach}>
          <p>Adicionar Treinador</p>
          <input type="text" ref={(ref) => { this.newCoach = ref; }} />
        </form>
        <table>
          <thead>
            <tr>
              <th>Treinador</th>
              <th>Pontos</th>
            </tr>
          </thead>
          <tbody>
            {coachesList}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coaches: state.coaches,
});

const mapDispatchToProps = dispatch => ({
  onAddCoach: newCoach => dispatch(addCoach(newCoach)),
});

const RaceConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Race);

export default RaceConnected;
