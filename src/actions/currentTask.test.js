import * as actions from './currentTask';

describe('currentTask actions', () => {
  describe('updateCurrentTask', () => {
    it('returns an object with type UPDATE_CURRENT_TASK and correct payload', () => {
      let mockCurrentTask = {
          id: 1,
          name: '',
          description: '',
          videoLink: '',
          docs: [],
          labs: []
        };
      let expected = {
        type: 'UPDATE_CURRENT_TASK',
        currentTask: {
          id: 1,
          name: '',
          description: '',
          videoLink: '',
          docs: [],
          labs: []
        }
      };
      let actual = actions.updateCurrentTask(mockCurrentTask);

      expect(actual).toEqual(expected);
    })
  })
})
