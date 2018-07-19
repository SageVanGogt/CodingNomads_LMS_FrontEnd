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

  it('throws an error if the status is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const expected = Error('There was a problem with the fetch request.');
    const result = await apiCalls.getAllTasks();

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

    const expected = Error('There was a problem with the fetch request.');
    const result = await apiCalls.getTask(1);

    expect(result).rejects.toEqual(expected);
  })
})

describe('addTask', () => {
  let newTask;

  beforeEach(() => {
    newTask = { name: 'this is a new task' };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ id: 3, name: 'this is a new task' })
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/tasks'
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTask)
    }

    apiCalls.addTask(newTask);

    expect(window.fetch).toHaveBeenCalledWith(url, option);
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

    const expected = Error('There was a problem with the fetch request.');
    const result = await apiCalls.addTask(newTask);

    expect(result).toEqual(expected);

  })
})

describe('updateTask', () => {
  let updatedTask;

  beforeEach(() => {
    updatedTask = {
      name: 'this is an updated task'
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ id: 3, name: 'this is an updated task' })
    }))
  })

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/task/3';
    const options = {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedTask)
    };

    apiCalls.updateTask(updatedTask);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  })

  it('returns the updated task', async () => {

  })

  it('throws an error if the status is not ok', () => {

  })
})

describe('deleteTask', () => {
  it('calls fetch with the correct arguments', () => {

  })

  it('returns the deleted task', async () => {

  })

  it('throws an error if the status is not ok', () => {

  })
})

describe('getAllCourses', () => {
  it('calls fetch with the correct arguments', () => {

  })

  it('returns an array of all courses', async () => {

  })

  it('throws an error if the status is not ok', () => {

  })
})

describe('getCourse', () => {
  it('calls fetch with the correct arguments', () => {

  })

  it('returns a course object', async () => {

  })

  it('throws an error if the status is not ok', () => {

  })
})

describe('addCourse', () => {
  it('calls fetch with the correct arguments', () => {

  })

  it('returns a new course object with course id', async () => {

  })

  it('throws an error if the status is not ok', () => {

  })
})

describe('updateCourse', () => {
  it('calls fetch with the correct arguments', () => {

  })

  it('returns the updated course', async () => {

  })

  it('throws an error if the status is not ok', () => {

  })
})

describe('deleteCourse', () => {
  it('calls fetch with the correct arguments', () => {

  })

  it('returns the deleted course', async () => {

  })

  it('throws an error if the status is not ok', () => {

  })
})


