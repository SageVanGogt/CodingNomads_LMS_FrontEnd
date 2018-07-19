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

export const addTeacherToCourse = async (courseId, newTeacher) => {
  const url = `/api/v1/courses/${courseId}/teachers`;
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newTeacher)
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