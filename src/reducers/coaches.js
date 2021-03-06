import * as types from '../constants/ActionTypes';

const initialState = [
  {
    name: 'Galvão',
    id: 0,
  },
];
console.log(types);
function coaches(state = initialState, action) {
  switch (action.type) {
    case types.ADD_COACH: {
      return [
        ...state,
        {
          id: state.reduce((maxId, coach) => Math.max(coach.id, maxId), -1) + 1,
          name: action.name,
        },
      ];
    }

    case types.DELETE_COACH:
      return state.filter(coach => coach.id !== action.id);

    case types.EDIT_COACH:
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

export default coaches;
