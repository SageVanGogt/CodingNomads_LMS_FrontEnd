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

    const expected = 'Error: There was a problem with the fetch request.';
    const result = await apiCalls.getAllTasks();

    expect(result).rejects.toEqual(expected);
  })
})

describe('getTask', () => {
  it('calls fetch with the correct arguments', () => {

  })

  it('returns a task object', async () => {

  })

  it('throws an error if the status is not ok', () => {

  })
})

describe('addTask', () => {
  it('calls fetch with the correct arguments', () => {

  })

  it('returns a new task object with task id', async () => {

  })

  it('throws an error if the status is not ok', () => {

  })
})

describe('updateTask', () => {
  it('calls fetch with the correct arguments', () => {

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


