import { combineReducers } from 'redux';
import signinReducer from './signinReducer';
import currentTaskReducer from './currentTaskReducer';

export const rootReducer = combineReducers({
  user: signinReducer,
  currentTask: currentTaskReducer
});
