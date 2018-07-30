import { currentCourseReducer } from './currentCourseReducer';

describe('currentCourseReducer', () => {
  it('returns a state of currentCourse if type is UPDATE_CURRENT_COURSE', () => {
    let mockAction = {
      type: 'UPDATE_CURRENT_COURSE',
      currentCourse: {
        id: 1,
        name: '',
        description: '',
        students: [],
        tasks: []
      }
    };
    let expected = {
      id: 1,
      name: '',
      description: '',
      students: [],
      tasks: []
    };

    let initialState = {};
    let actual = currentCourseReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  })

  it('returns new state if type is REMOVE_CURRENT_COURSE', () => {
    let mockAction = {
      type: 'REMOVE_CURRENT_COURSE',
    };
    let expected = {};

    let initialState = {
      id: 1,
      name: '',
      description: ''
    };
    let actual = currentCourseReducer(initialState, mockAction);

    expect(actual).toEqual(expected);

  })

  it('returns default state if action type does not match', () => {
    let mockAction = {
      type: 'I_AM_NOT_AN_ACTION',
      currentCourse: {
        id: 1,
        name: '',
        description: '',
        videoLink: '',
        docs: [],
        labs: []
      }
    };

    let defaultState = {};
    let actual = currentCourseReducer(defaultState, mockAction);

    expect(actual).toEqual(defaultState);

  })
})
