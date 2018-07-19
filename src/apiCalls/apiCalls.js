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

};

export const addTask = async (newTask) => {
  const url = '/api/v1/tasks';
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newTask)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 201) {
      throw Error('Does not have necessary info');
    }
    const task = await response.json();
    return task;
  } catch (error) {
    throw error;
  }
}; 

export const updateTask = async (task) => {

};

export const deleteTask = async (taskId) => {

};
