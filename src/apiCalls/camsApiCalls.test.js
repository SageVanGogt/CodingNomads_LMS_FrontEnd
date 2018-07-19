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
  let newTeacher;

  beforeEach(() => {
    newTeacher = { name: 'Joe Shmo' };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 201,
      json: () => Promise.resolve({ id: 3, name: 'Joe Shmo' })
    }));
  });

  it('calls fetch with the correct arguments', () => {
    const url = '/api/v1/courses/1/teachers';
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTeacher)
    };

    apiCalls.addTeacherToCourse(1, newTeacher);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('returns a new course object with course id', async () => {
    const expected = { id: 3, name: 'Joe Shmo' };
    const result = await apiCalls.addTeacherToCourse(1, newTeacher);

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

// describe('updateCourse', () => {
//   let updatedCourse;

//   beforeEach(() => {
//     updatedCourse = {
//       id: 3,
//       name: 'this is an updated course'
//     }
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 200,
//       json: () => Promise.resolve({ id: 3, name: 'this is an updated course' })
//     }))
//   })

//   it('calls fetch with the correct arguments', () => {
//     const url = '/api/v1/courses/3';
//     const options = {
//       method: 'PATCH',
//       headers: { 'content-type': 'application/json' },
//       body: JSON.stringify(updatedCourse)
//     };

//     apiCalls.updateCourse(updatedCourse);

//     expect(window.fetch).toHaveBeenCalledWith(url, options);
//   })

//   it('returns the updated course', async () => {
//     const expected = { id: 3, name: 'this is an updated course' };
//     const result = await apiCalls.updateCourse(updatedCourse);

//     expect(result).toEqual(expected);
//   })

//   it('throws an error if the status is not ok', () => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 500
//     }))

//     const expected = Error('Failed to update course.');
//     const result = apiCalls.updateCourse(updatedCourse);

//     expect(result).rejects.toEqual(expected);
//   })
// })

// describe('deleteCourse', () => {
//   beforeEach(() => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 204,
//     }))
//   })

//   it('calls fetch with the correct arguments', () => {
//     const url = '/api/v1/courses/3';
//     const options = {
//       method: 'DELETE',
//       headers: { 'content-type': 'application/json' }
//     };

//     apiCalls.deleteCourse(3);

//     expect(window.fetch).toHaveBeenCalledWith(url, options);
//   })

//   it('throws an error if the status is not ok', () => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 500
//     }))

//     const expected = Error('That id could not be found.');
//     const result = apiCalls.deleteCourse(3);

//     expect(result).rejects.toEqual(expected);
//   })
// })


