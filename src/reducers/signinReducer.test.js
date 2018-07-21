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
})