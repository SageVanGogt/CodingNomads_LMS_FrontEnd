import signinReducer from './signinReducer';

describe('signinReducer', () => {
  it('should return a state of user in case SIGNIN_USER', () => {
    let expected = {id: 1, role: 1};
    let mockAction = {
      type: 'SIGNIN_USER',
      user: expected
    };
    let initialState = {};
    let actual = signinReducer(initialState, mockAction);
    
    expect(actual).toEqual(expected);
  })

  it('returns default state if action type does not match', () => {
    let mockAction = {
      type: 'I_AM_NOT_AN_ACTION',
      user: { id: 1, role: 1 }
    };
    
    let defaultState = {};
    let actual = signinReducer(defaultState, mockAction);
    
    expect(actual).toEqual(defaultState);

  })

})
