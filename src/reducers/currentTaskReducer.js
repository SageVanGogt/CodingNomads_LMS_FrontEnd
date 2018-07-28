export const currentTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_TASK':
      return action.currentTask;
    case 'REMOVE_CURRENT_TASK':
      return {};
    default:
      return state;
  } 
};
