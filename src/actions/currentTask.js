export const updateCurrentTask = (task) => ({
  type: 'UPDATE_CURRENT_TASK',
  currentTask: task
});

export const removeCurrentTask = () => ({
  type: 'REMOVE_CURRENT_TASK'
});
