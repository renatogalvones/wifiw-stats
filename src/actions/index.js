export function addCoach(name) {
  return {
    type: 'ADD_COACH',
    name,
  };
}

export function removeCoach(index) {
  return {
    type: 'REMOVE_COACH',
    index,
  };
}

export function editCoach(index, name) {
  return {
    type: 'EDIT_COACH',
    index,
    name,
  };
}
