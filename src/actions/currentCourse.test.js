import * as actions from './currentCourse';

describe('currentCourse actions', () => {
  describe('updateCurrentCourse', () => {
    it('returns an object with type UPDATE_CURRENT_COURSE and correct payload', () => {
      let mockCurrentCourse = {
        id: 1,
        name: '',
        description: '',
        students: [],
        tasks: []
      };
      let expected = {
        type: 'UPDATE_CURRENT_COURSE',
        currentCourse: {
          id: 1,
          name: '',
          description: '',
          students: [],
          tasks: []
        }
      };
      let actual = actions.updateCurrentCourse(mockCurrentCourse);

      expect(actual).toEqual(expected);
    })
  })
})
