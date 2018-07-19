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
    const result = await apiCalls.getAllTasks();

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


