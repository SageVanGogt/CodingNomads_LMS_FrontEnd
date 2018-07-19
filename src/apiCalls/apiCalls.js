export const getAllTasks = async () => {
  const url = '/api/v1/tasks';
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('User can not do that.');
    }
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    throw error;
  }
};

export const getTask = async (taskId) => {

}

export const addTask = async (task) => {

} 

export const updateTask = async (task) => {

}

export const deleteTask = async (taskId) => {

}
