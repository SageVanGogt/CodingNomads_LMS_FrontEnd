import * as actions from './signin';

describe('signin actions', () => {
  describe('signin user', () => {
    it('should return an object with type SIGNIN_USER', () => {
      let expected = {
        type: 'SIGNIN_USER',
        user: {id: 1, role: 1}
      };
      let mockUser = {id: 1, role: 1};
      let actual = actions.signIn(mockUser);

      expect(actual).toEqual(expected);
    })
  })
})