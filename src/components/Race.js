import React from 'react';
import { connect } from 'react-redux';
import { addCoach } from '../actions/';

const Race = ({ coaches, onAddCoach }) => {
  return (
    <div>
      <h1>Corrida dos campeões</h1>
      <table>
        <thead>
          <tr>
            <th>Treinador</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
      <button onClick={() => { onAddCoach('galvao'); }}>ADD</button>
      {/* <button onClick={() => { store.dispatch({ type: 'DECREMENT' })} }>REMOVE</button> */}
    </div>
  );
};

const mapStateToProps = state => ({
  coaches: state.coaches,
});

const mapDispatchToProps = dispatch => ({
  onAddCoach: newCoach => dispatch(addCoach(newCoach)),
});

const RaceConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Race);

export default RaceConnected;
