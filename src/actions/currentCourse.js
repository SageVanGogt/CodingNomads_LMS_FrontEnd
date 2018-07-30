export const updateCurrentCourse = course => ({
  type: 'UPDATE_CURRENT_COURSE',
  currentCourse: course
});

export const removeCurrentCourse = () => ({
  type: 'REMOVE_CURRENT_COURSE'
});