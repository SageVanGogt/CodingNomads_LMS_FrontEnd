import { currentTaskReducer } from './currentTaskReducer';

describe('currentTaskReducer', () => {
  it('returns a state of currentTask if type is UPDATE_CURRENT_TASK', () => {
    let mockAction = {
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
    let expected = {
      id: 1,
      name: '',
      description: '',
      videoLink: '',
      docs: [],
      labs: []
    };
    
    let initialState = {};
    let actual = currentTaskReducer(initialState, mockAction);
    
    expect(actual).toEqual(expected);
  })

  it('returns new state if type is REMOVE_CURRENT_TASK', () => {
    let mockAction = {
      type: 'REMOVE_CURRENT_TASK',
    };
    let expected = {};
    
    let initialState = { 
      id: 1,
      name: '',
      description: '',
      videoLink: '',
      docs: [],
      labs: []
    };
    let actual = currentTaskReducer(initialState, mockAction);
    
    expect(actual).toEqual(expected);

  })

  it('returns default state if action type does not match', () => {
    let mockAction = {
      type: 'I_AM_NOT_AN_ACTION',
      currentTask: {
        id: 1,
        name: '',
        description: '',
        videoLink: '',
        docs: [],
        labs: []
      }
    };
    
    let defaultState = {};
    let actual = currentTaskReducer(defaultState, mockAction);
    
    expect(actual).toEqual(defaultState);

  })
})
