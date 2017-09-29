import * as types from '../constants/ActionTypes';

const initialState = [
  {
    name: 'Galvão',
    id: 0
  }
]

function coaches(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COACH': {
      return [
        ...state,
        {
          id: state.reduce((maxId, coach) => Math.max(coach.id, maxId), -1) + 1,
          name: action.name,
        },
      ];
    }
    // case type.DELETE_TODO:
    //   return state.filter(coach =>
    //     coach.id !== action.id
    //   )
    //
    // case type.EDIT_TODO:
    //   return state.map(coach =>
    //     coach.id === action.id ?
    //       { ...coach, text: action.text } :
    //       coach
    //   )
    default: {
      return state;
    }
  }
}

export default coaches;
