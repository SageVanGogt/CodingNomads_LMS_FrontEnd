const signinReducer = (state = {id: 1, roleId: 1}, action) => {
  switch (action.type) {
    case 'SIGNIN_USER':
      return action.user;
    default: 
      return state;
  }
};

export default signinReducer;