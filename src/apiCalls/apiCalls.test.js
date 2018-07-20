import * as apiCalls from './apiCalls.js';

describe('getAllTasks', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(['task1', 'task2', 'task3'])
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/tasks';

    apiCalls.getAllTasks();

    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('returns an array of all tasks', async () => {
    const expected = ['task1', 'task2', 'task3'];
    const result = await apiCalls.getAllTasks();

    expect(result).toEqual(expected);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const expected = Error('User can not do that.');
    const result = apiCalls.getAllTasks();

    expect(result).rejects.toEqual(expected);
  })
})

describe('getTask', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ id: 1, name: 'this is a task' })
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = 'api/v1/tasks/1';

    apiCalls.getTask(1);

    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('returns a task object', async () => {
    const expected = { id: 1, name: 'this is a task' };
    const result = await apiCalls.getTask(1);

    expect(result).toEqual(expected);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('Fetched task could not be found.');
    const result = apiCalls.getTask(1);

    expect(result).rejects.toEqual(expected);
  })
})

describe('addTask', () => {
  let newTask;

  beforeEach(() => {
    newTask = { name: 'this is a new task' };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 201,
      json: () => Promise.resolve({ id: 3, name: 'this is a new task' })
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/tasks';
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTask)
    };

    apiCalls.addTask(newTask);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  })

  it('returns a new task object with task id', async () => {
    const expected = { id: 3, name: 'this is a new task' };
    const result = await apiCalls.addTask(newTask);

    expect(result).toEqual(expected);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('Does not have necessary info');
    const result = apiCalls.addTask(newTask);

    expect(result).rejects.toEqual(expected);
  })
})

describe('updateTask', () => {
  let updatedTask;

  beforeEach(() => {
    updatedTask = {
      id: 3,
      name: 'this is an updated task'
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ id: 3, name: 'this is an updated task' })
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/tasks/3';
    const options = {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedTask)
    };

    apiCalls.updateTask(updatedTask);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  })

  it('returns the updated task', async () => {
    const expected = { id: 3, name: 'this is an updated task' };
    const result = await apiCalls.updateTask(updatedTask);

    expect(result).toEqual(expected);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('Failed to update task.');
    const result = apiCalls.updateTask(updatedTask);

    expect(result).rejects.toEqual(expected);
  })
})

describe('deleteTask', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 204,
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/tasks/3';
    const options = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    };
    
    apiCalls.deleteTask(3);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('That id could not be found.');
    const result = apiCalls.deleteTask(3);

    expect(result).rejects.toEqual(expected);
  })
})



describe('getAllCourses', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(['course1', 'course2', 'course3'])
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses';

    apiCalls.getAllCourses();

    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('returns an array of all courses', async () => {
    const expected = ['course1', 'course2', 'course3'];
    const result = await apiCalls.getAllCourses();

    expect(result).toEqual(expected);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const expected = Error('User can not do that.');
    const result = apiCalls.getAllCourses();

    expect(result).rejects.toEqual(expected);
  })
})

describe('getCourse', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ id: 1, name: 'this is a course' })
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = 'api/v1/courses/1';

    apiCalls.getCourse(1);

    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('returns a course object', async () => {
    const expected = { id: 1, name: 'this is a course' };
    const result = await apiCalls.getCourse(1);

    expect(result).toEqual(expected);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('Fetched course could not be found.');
    const result = apiCalls.getCourse(1);

    expect(result).rejects.toEqual(expected);
  })
})

describe('addCourse', () => {
  let newCourse;

  beforeEach(() => {
    newCourse = { name: 'this is a new course' };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 201,
      json: () => Promise.resolve({ id: 3, name: 'this is a new course' })
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses';
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newCourse)
    };

    apiCalls.addCourse(newCourse);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  })

  it('returns a new course object with course id', async () => {
    const expected = { id: 3, name: 'this is a new course' };
    const result = await apiCalls.addCourse(newCourse);

    expect(result).toEqual(expected);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('Does not have necessary info');
    const result = apiCalls.addCourse(newCourse);

    expect(result).rejects.toEqual(expected);
  })
})

describe('updateCourse', () => {
  let updatedCourse;

  beforeEach(() => {
    updatedCourse = {
      id: 3,
      name: 'this is an updated course'
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ id: 3, name: 'this is an updated course' })
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/3';
    const options = {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedCourse)
    };

    apiCalls.updateCourse(updatedCourse);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  })

  it('returns the updated course', async () => {
    const expected = { id: 3, name: 'this is an updated course' };
    const result = await apiCalls.updateCourse(updatedCourse);

    expect(result).toEqual(expected);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('Failed to update course.');
    const result = apiCalls.updateCourse(updatedCourse);

    expect(result).rejects.toEqual(expected);
  })
})

describe('deleteCourse', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 204,
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/3';
    const options = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    };
    
    apiCalls.deleteCourse(3);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('That id could not be found.');
    const result = apiCalls.deleteCourse(3);

    expect(result).rejects.toEqual(expected);
  })
})





describe('getAllCourseStudents', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(['student1', 'student2', 'student3'])
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/1/students';

    apiCalls.getAllCourseStudents(1);

    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('returns an array of all students', async () => {
    const expected = ['student1', 'student2', 'student3'];
    const result = await apiCalls.getAllCourseStudents();

    expect(result).toEqual(expected);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const expected = Error('Error.');
    const result = apiCalls.getAllCourseStudents();

    expect(result).rejects.toEqual(expected);
  })
})

// describe('getCourse', () => {
//   beforeEach(() => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 200,
//       json: () => Promise.resolve({ id: 1, name: 'this is a course' })
//     }))
//   })

//   it('calls fetch with the correct arguments', () => {
//     const url = 'api/v1/courses/1';

//     apiCalls.getCourse(1);

//     expect(window.fetch).toHaveBeenCalledWith(url);
//   })

//   it('returns a course object', async () => {
//     const expected = { id: 1, name: 'this is a course' };
//     const result = await apiCalls.getCourse(1);

//     expect(result).toEqual(expected);
//   })

//   it('throws an error if the status is not ok', () => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 500
//     }))

//     const expected = Error('Fetched course could not be found.');
//     const result = apiCalls.getCourse(1);

//     expect(result).rejects.toEqual(expected);
//   })
// })

describe('addCourseStudent', () => {
  let newCourseStudent;
  let course;

  beforeEach(() => {
    newCourseStudent = { id: 1, name: 'chucho' };
    course = {id: 3}
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 201,
      json: () => Promise.resolve({ id: 3, studentId: 1, courseId: 1 })
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/students';
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({studentId: 1, courseId: 3})
    };

    apiCalls.addCourseStudent(newCourseStudent, course);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  })

  it('returns a new course student relation object with course id and student id', async () => {
    const expected = { id: 3, studentId: 1, courseId: 1 };
    const result = await apiCalls.addCourseStudent(newCourseStudent, course);

    expect(result).toEqual(expected);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('Does not have necessary info');
    const result = apiCalls.addCourseStudent(newCourseStudent, course);

    expect(result).rejects.toEqual(expected);
  })
})

describe('deleteCourseStudent', () => {
  let student;
  let course;

  beforeEach(() => {
    student = {id: 1};
    course = {id: 1};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 204,
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/1/student/1';
    const options = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    };
    
    apiCalls.deleteCourseStudent(student, course);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('That id could not be found.');
    const result = apiCalls.deleteCourseStudent(student, course);

    expect(result).rejects.toEqual(expected);
  })
})

describe('getCourseTeachers', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(['teacher1', 'teacher2'])
    }));
  });

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/1/teachers';

    apiCalls.getCourseTeachers(1);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('returns an array of all teachers', async () => {
    const expected = ['teacher1', 'teacher2'];
    const result = await apiCalls.getCourseTeachers(1);

    expect(result).toEqual(expected);
  });

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const expected = Error('Teachers not found.');
    const result = apiCalls.getCourseTeachers(1);

    expect(result).rejects.toEqual(expected);
  });
});

describe('addTeacherToCourse', () => {
  let teacherID;

  beforeEach(() => {
    teacherID = 1;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 201,
      json: () => Promise.resolve({ status: 201})
    }));
  });

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/1/teachers';
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(teacherID)
    };

    apiCalls.addTeacherToCourse(1, teacherID);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('returns a 201 status code if successful', async () => {
    const expected = { status: 201 };
    const result = await apiCalls.addTeacherToCourse(1, teacherID);

    expect(result).toEqual(expected);
  });

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const expected = Error('Does not have necessary info');
    const result = apiCalls.addTeacherToCourse(1);

    expect(result).rejects.toEqual(expected);
  });
});

describe('deleteTeacherFromCourse', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 204,
    }));
  });

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/3/teachers/1';
    const options = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    };

    apiCalls.deleteTeacherFromCourse(3, 1);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const expected = Error('That id could not be found.');
    const result = apiCalls.deleteTeacherFromCourse(3);

    expect(result).rejects.toEqual(expected);
  });
});

describe('getCourseTasks', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve([{ id: 1, name: 'task 1' }, { id: 2, name: 'task 2' }])
    }));
  });

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/1/tasks';

    apiCalls.getCourseTasks(1);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('returns an array of all tasks', async () => {
    const expected = [{ id: 1, name: 'task 1' }, { id: 2, name: 'task 2' }];
    const result = await apiCalls.getCourseTasks(1);

    expect(result).toEqual(expected);
  });

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const expected = Error('Tasks not found.');
    const result = apiCalls.getCourseTasks(1);

    expect(result).rejects.toEqual(expected);
  });
});

describe('addTaskToCourse', () => {
  let taskID;

  beforeEach(() => {
    taskID = 1;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 201,
      json: () => Promise.resolve({ status: 201 })
    }));
  });

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/1/teachers';
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(taskID)
    };

    apiCalls.addTeacherToCourse(1, taskID);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('returns a 201 status code if successful', async () => {
    const expected = { status: 201 };
    const result = await apiCalls.addTeacherToCourse(1, taskID);

    expect(result).toEqual(expected);
  });

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const expected = Error('Does not have necessary info');
    const result = apiCalls.addTeacherToCourse(1);

    expect(result).rejects.toEqual(expected);
  });
});

describe('deleteTaskFromCourse', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 204,
    }));
  });

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/3/tasks/1';
    const options = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    };

    apiCalls.deleteTaskFromCourse(3, 1);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const expected = Error('That id could not be found.');
    const result = apiCalls.deleteTaskFromCourse(3);

    expect(result).rejects.toEqual(expected);
  });
});


