import React from 'react';

class Race extends React.Component {
  render() {
    const value = store.getState();

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
            <tr>{ value }</tr>
          </tbody>
        </table>
        <button onClick={() => { store.dispatch({ type: 'INCREMENT' })} }>ADD</button>
        <button onClick={() => { store.dispatch({ type: 'DECREMENT' })} }>REMOVE</button>
      </div>
    )
  }
}

export default Race;
