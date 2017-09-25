import React from 'react';
import { connect } from 'react-redux';
import { addCoach } from '../actions/';

const Race = ({ dispatch }) => {
  return (
    <div>
      galvao
      {/* <h1>Corrida dos campeões</h1>
      <table>
        <thead>
          <tr>
            <th>Treinador</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          <tr>{ value }</tr>
        </tbody>
      </table> */}
      {/* <button onClick={() => { store.dispatch({ type: 'INCREMENT' })} }>ADD</button> */}
      {/* <button onClick={() => { store.dispatch({ type: 'DECREMENT' })} }>REMOVE</button> */}
    </div>
  );
};

// const mapStateToProps = state => ({
//   coaches: getCoaches(state.coaches),
// });

const mapDispatchToProps = {
  onAddCoach: addCoach,
};

const RaceConnected = connect()(Race);

export default RaceConnected;
