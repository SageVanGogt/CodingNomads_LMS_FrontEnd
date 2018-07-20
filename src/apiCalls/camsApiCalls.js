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