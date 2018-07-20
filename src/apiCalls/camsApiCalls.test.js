import * as apiCalls from './camsApiCalls';

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

describe('deleteCourse', () => {
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

// ====

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

// describe('addTeacherToCourse', () => {
//   let teacherID;

//   beforeEach(() => {
//     teacherID = 1;
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 201,
//       json: () => Promise.resolve({ status: 201 })
//     }));
//   });

//   it('calls fetch with the correct arguments', () => {
//     const url = '/api/v1/courses/1/teachers';
//     const options = {
//       method: 'POST',
//       headers: { 'content-type': 'application/json' },
//       body: JSON.stringify(teacherID)
//     };

//     apiCalls.addTeacherToCourse(1, teacherID);

//     expect(window.fetch).toHaveBeenCalledWith(url, options);
//   });

//   it('returns a 201 status code if successful', async () => {
//     const expected = { status: 201 };
//     const result = await apiCalls.addTeacherToCourse(1, teacherID);

//     expect(result).toEqual(expected);
//   });

//   it('throws an error if the status is not ok', () => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 500
//     }));

//     const expected = Error('Does not have necessary info');
//     const result = apiCalls.addTeacherToCourse(1);

//     expect(result).rejects.toEqual(expected);
//   });
// });

// describe('deleteCourse', () => {
//   beforeEach(() => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 204,
//     }));
//   });

//   it('calls fetch with the correct arguments', () => {
//     const url = '/api/v1/courses/3/teachers/1';
//     const options = {
//       method: 'DELETE',
//       headers: { 'content-type': 'application/json' }
//     };

//     apiCalls.deleteTeacherFromCourse(3, 1);

//     expect(window.fetch).toHaveBeenCalledWith(url, options);
//   });

//   it('throws an error if the status is not ok', () => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 500
//     }));

//     const expected = Error('That id could not be found.');
//     const result = apiCalls.deleteTeacherFromCourse(3);

//     expect(result).rejects.toEqual(expected);
//   });
// });