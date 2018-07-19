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
  const url = `api/v1/tasks/${taskId}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Fetched task could not be found.');
    }
    const task = await response.json();
    return task;
  } catch (error) {
    throw error;
  }
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

export const updateTask = async (updatedTask) => {
  const url = `/api/v1/task/${updatedTask.id}`;
  const options = {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(updatedTask)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 200) {
      throw Error('Failed to update task.');
    }
    const task = await response.json();
    return task;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  const url = `/api/v1/tasks/${taskId}`;
  const options = {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' }
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 204) {
      throw Error('That id could not be found.');
    }
  } catch (error) {
    throw error;
  }
};

export const getAllCourses = async () => {
  const url = '/api/v1/courses';
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
