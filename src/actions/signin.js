
export const signIn = (user) => {
  return ({
    type: 'SIGNIN_USER',
    user
  });
};