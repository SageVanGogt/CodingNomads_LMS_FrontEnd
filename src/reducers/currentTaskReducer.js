export const currentTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_TASK':
      return action.currentTask;
    default:
      return state;
  } 
};
