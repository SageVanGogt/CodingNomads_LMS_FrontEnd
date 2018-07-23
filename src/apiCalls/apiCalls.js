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
  const url = `/api/v1/tasks/${updatedTask.id}`;
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

export const getCourse = async (courseId) => {
  const url = `api/v1/courses/${courseId}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Fetched course could not be found.');
    }
    const course = await response.json();
    return course;
  } catch (error) {
    throw error;
  }
};

export const addCourse = async (newCourse) => {
  const url = '/api/v1/courses';
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newCourse)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 201) {
      throw Error('Does not have necessary info');
    }
    const course = await response.json();
    return course;
  } catch (error) {
    throw error;
  }
}; 

export const updateCourse = async (updatedCourse) => {
  const url = `/api/v1/courses/${updatedCourse.id}`;
  const options = {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(updatedCourse)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 200) {
      throw Error('Failed to update course.');
    }
    const course = await response.json();
    return course;
  } catch (error) {
    throw error;
  }
};

export const deleteCourse = async (courseId) => {
  const url = `/api/v1/courses/${courseId}`;
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

export const getAllCourseStudents = async (courseId) => {
  const url = `/api/v1/courses/${courseId}/students`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Error.');
    }
    const course = await response.json();
    return course;
  } catch (error) {
    throw error;
  }
};

export const addCourseStudent = async (newCourseStudent, course) => {
  const studentCourseRelation = {
    studentId: newCourseStudent.id,
    courseId: course.id
  };
  const url = '/api/v1/courses/students';
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(studentCourseRelation)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 201) {
      throw Error('Does not have necessary info');
    }
    const course = await response.json();
    return course;
  } catch (error) {
    throw error;
  }
}; 

export const deleteCourseStudent = async (student, course) => {
  const url = `/api/v1/courses/${course.id}/student/${student.id}`;
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

export const getCourseTeachers = async (courseID) => {
  const url = `/api/v1/courses/${courseID}/teachers`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Teachers not found.');
    }
    const teachers = await response.json();
    return teachers;
  } catch (error) {
    throw error;
  }
};

export const addTeacherToCourse = async (courseId, teacherID) => {
  const url = `/api/v1/courses/${courseId}/teachers`;
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(teacherID)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 201) {
      throw Error('Does not have necessary info');
    }
    const course = await response.json();
    return course;
  } catch (error) {
    throw error;
  }
};

export const deleteTeacherFromCourse = async (courseId, teacherId) => {
  const url = `/api/v1/courses/${courseId}/teachers/${teacherId}`;
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

export const getCourseTasks = async (courseID) => {
  const url = `/api/v1/courses/${courseID}/tasks`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Tasks not found.');
    }
    const teachers = await response.json();
    return teachers;
  } catch (error) {
    throw error;
  }
};

export const addTaskToCourse = async (courseId, taskID) => {
  const url = `/api/v1/courses/${courseId}/tasks`;
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(taskID)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 201) {
      throw Error('Does not have necessary info');
    }
    const course = await response.json();
    return course;
  } catch (error) {
    throw error;
  }
};

export const deleteTaskFromCourse = async (courseId, taskID) => {
  const url = `/api/v1/courses/${courseId}/tasks/${taskID}`;
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

export const getAllDocs = async () => {
  const url = '/api/v1/docs';
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Error.');
    }
    const docs = await response.json();
    return docs;
  } catch (error) {
    throw error;
  }
};

export const getAllLabs = async () => {
  const url = '/api/v1/labs';
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Error.');
    }
    const labs = await response.json();
    return labs;
  } catch (error) {
    throw error;
  }
};