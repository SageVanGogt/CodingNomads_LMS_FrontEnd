export const currentCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_COURSE':
      return action.currentCourse;
    default:
      return state;
  }
};
