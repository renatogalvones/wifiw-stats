import * as types from '../constants/ActionTypes';

const initialState = [];

function championships(state = initialState, action) {
  switch (action.type) {
    case types.ADD_CHAMPIONSHIP: {
      return [
        ...state,
        {
          id: state.reduce((maxId, coach) => Math.max(coach.id, maxId), -1) + 1,
          name: action.name,
        },
      ];
    }

    case types.DELETE_CHAMPIONSHIP:
      return state.filter(coach => coach.id !== action.id);

    case types.EDIT_CHAMPIONSHIP:
      return state.map((coach) => {
        if (coach.id === action.id) {
          return { ...coach, name: action.name };
        }
        return coach;
      });

    default: {
      return state;
    }
  }
}

export default championships;
