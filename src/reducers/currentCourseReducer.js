export const currentCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_COURSE':
      return action.currentCourse;
    case 'REMOVE_CURRENT_COURSE':
      return {}
    default:
      return state;
  }
};
