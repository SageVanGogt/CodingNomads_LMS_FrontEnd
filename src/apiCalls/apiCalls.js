import { apiPath } from '../constants/apiPath';

export const getAllTasks = async () => {
  const url = apiPath + '/tasks';
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Could not fetch tasks');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

// export const getAllTasksAuthed = async () => {
//   const token = localStorage.getItem('access_token') || null;
//   const url = apiPath + '/tasks';
//   const options = {
//     headers: { 'Authorization': `Bearer ${token}` }
//   }
//   try {
//     const response = await fetch(url);
//     if (response.status !== 200) {
//       throw Error('Could not fetch tasks');
//     } else {
//       return await response.json();
//     }
//   } catch (error) {
//     throw error;
//   }
// };

export const getTask = async (taskId) => {
  const url = apiPath + `/tasks/${taskId}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Task could not be found.');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const postTask = async (newTask) => {
  const url = apiPath + '/tasks';
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newTask)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 201) {
      throw Error('Could not post task');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
}; 

export const updateTask = async (updatedTask) => {
  const url = apiPath + `/tasks/${updatedTask.id}`;
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTask)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 200) {
      throw Error('Could not patch request');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  const url = apiPath + `/tasks/${taskId}`;
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
  const url = apiPath + '/courses';
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Could not get courses');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const getCourse = async (courseId) => {
  const url = apiPath + `/courses/${courseId}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Could not find course');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const addCourse = async (newCourse) => {
  const url = apiPath + '/courses';
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newCourse)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 200) {
      throw Error('Could not add course');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
}; 

export const updateCourse = async (updatedCourse) => {
  const url = apiPath + `/courses`;
  const options = {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(updatedCourse)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 200) {
      throw Error('Failed to update course.');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const deleteCourse = async (courseId) => {
  const url = apiPath + `/courses/${courseId}`;
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
  const url = apiPath + `/courses/${courseId}/students`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Could not get students in course');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const addCourseStudent = async (newCourseStudent, course) => {
  const studentCourseRelation = {
    studentId: newCourseStudent.id,
    courseId: course.id
  };
  const url = apiPath + '/courses/students';
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(studentCourseRelation)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 201) {
      throw Error('Could not add student to course');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
}; 

export const deleteCourseStudent = async (student, course) => {
  const url = apiPath + `/courses/${course.id}/student/${student.id}`;
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
  const url = apiPath + `/courses/${courseID}/teachers`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Could not get teachers');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const addTeacherToCourse = async (courseId, teacherID) => {
  const url = apiPath + `/courses/${courseId}/teachers`;
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(teacherID)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 201) {
      throw Error('Could not add teacher to course');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const deleteTeacherFromCourse = async (courseId, teacherId) => {
  const url = apiPath + `/courses/${courseId}/teachers/${teacherId}`;
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
  const url = apiPath + `/courses/${courseID}/tasks`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('Could not get tasks for that course');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const postTaskToCourse = async (courseId, taskID) => {
  const url = apiPath + `/courses/${courseId}/tasks`;
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(taskID)
  };
  try {
    const response = await fetch(url, options);
    if (response.status !== 201) {
      throw Error('Could not add task to course');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const deleteTaskFromCourse = async (courseId, taskID) => {
  const url = apiPath + `/courses/${courseId}/tasks/${taskID}`;
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
  const url = apiPath + '/docs';
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const getAllLabs = async () => {
  const url = apiPath + '/labs';
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error('');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const deleteDocsFromTask = async (taskId, docsArr) => {
  const url = apiPath + `/task/${taskId}/docs`;
  const options = {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ docs: docsArr })
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

export const deleteLabsFromTask = async (taskId, labsArr) => {
  const url = apiPath + `/task/${taskId}/labs`;
  const options = {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ labs: labsArr })
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

export const deleteTasksFromCourse = async (courseId, tasksArr) => {
  const url = apiPath + `/course/${courseId}/tasks`;
  const options = {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ tasks: tasksArr })
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

export const deleteStudentsFromCourse = async (courseId, studentsArr) => {
  const url = apiPath + `/course/${courseId}/students`;
  const options = {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ students: studentsArr })
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

export const authUser = async (user) => {
  const url = apiPath + '/users'; 
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user)
  };
  try {
    const response = await fetch(url, options);
    if (response.message !== 'success') {
      throw Error('User does not exist');
    } 
    const userAuth = await response.json();
    return userAuth;
  } catch (error) {
    throw error;
  }
};


